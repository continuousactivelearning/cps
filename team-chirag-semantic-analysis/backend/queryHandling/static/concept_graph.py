import json

def analyze_learning_gap(user_query, known_concepts, json_path='cs_learning_graph.json'):
    # Load the JSON
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    concepts = data['concepts']

    # Build lookups
    concept_by_id = {}
    concept_by_name = {}
    for concept in concepts:
        concept_by_id[concept['id']] = concept
        concept_by_name[concept['name'].lower()] = concept
        for subconcept in concept.get('subconcepts', []):
            concept_by_id[subconcept['id']] = subconcept
            concept_by_name[subconcept['name'].lower()] = subconcept

    # Step 1: Match query to concept/subconcept (name or keyword)
    def match_concept(query):
        q = query.lower()
        # Direct name match
        if q in concept_by_name:
            return concept_by_name[q]
        # Keyword match
        for node in concept_by_name.values():
            if any(q in kw.lower() for kw in node.get('keywords', [])):
                return node
        return None

    matched = match_concept(user_query)
    if not matched:
        return {
            "matched_concept": None,
            "missing_prerequisites": [],
            "topic_suggestions": [],
            "resources": {},
            "message": "No matching concept found."
        }

    # Step 2: Pull prerequisites
    prereqs = matched.get('prerequisites', [])

    # Step 3: Subtract known concepts
    missing_prereqs = [p for p in prereqs if p.lower() not in (k.lower() for k in known_concepts)]

    # Step 4: Add topic suggestions (subconcepts/related topics)
    topic_suggestions = []
    for tid in matched.get('topic_suggestions', []):
        if tid in concept_by_id:
            topic_suggestions.append(concept_by_id[tid])

    # Step 5: Gather resources for missing prereqs and suggestions
    def get_resources(node):
        return node.get('resources', {})

    resources = {
        "matched": get_resources(matched),
        "missing_prereqs": {p: get_resources(concept_by_name.get(p.lower(), {})) for p in missing_prereqs},
        "suggestions": {s['name']: get_resources(s) for s in topic_suggestions}
    }

    return {
        "matched_concept": matched['name'],
        "missing_prerequisites": missing_prereqs,
        "topic_suggestions": [s['name'] for s in topic_suggestions],
        "resources": resources,
        "message": "Success"
    } 