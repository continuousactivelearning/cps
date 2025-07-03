import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import { dsaConcepts } from '../concept-graph/conceptList';

dotenv.config();

const uri =
  process.env.MONGO_URI || 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/recommendation-system?';;

const dbName = 'DSA-Assessment-Hub';
const collectionName = 'Concepts';

async function getAllPrerequisites(mainConcepts: string[]) {
  const client = new MongoClient(uri, {
    tls: true
  });

  try {
    await client.connect();
    const collection = client.db(dbName).collection(collectionName);

    const visited = new Set<string>();
    const result = new Set<string>();

    async function dfs(concept: string) {
      if (visited.has(concept)) return;
      visited.add(concept);

      const node = await collection.findOne({ name: concept });
      if (node?.prerequisites?.length) {
        for (const prereq of node.prerequisites) {
          const pre = await collection.findOne({ _id: prereq });
          if (pre?.name) {
            result.add(pre.name);
            await dfs(pre.name);
          }
        }
      }
    }

    const normalizedMainConcepts = mainConcepts.map((c) => c.toLowerCase());
    const concepts = dsaConcepts.filter((concept) =>
      normalizedMainConcepts.includes(concept.toLowerCase())
    );

    for (let concept of concepts) {
      await dfs(concept);
    }
    const preReqArray = Array.from(result).filter(concept => !normalizedMainConcepts.includes(concept.toLowerCase()));
    return preReqArray;
  } catch (err) {
    console.error('Error during prerequisite fetch:', err);
    return [];
  } finally {
    await client.close();
  }
}

export default getAllPrerequisites;
