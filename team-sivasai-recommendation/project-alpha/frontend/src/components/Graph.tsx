import { useEffect, useRef } from 'react';
import { DataSet, Network } from 'vis-network/standalone';
import type { Node, Edge } from 'vis-network';

type GraphProps = {
  topic: string;
  prerequisites: string[];
};

const Graph = ({ topic, prerequisites }: GraphProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const nodes: Node[] = [
      { id: 'Start', label: 'Start', color: '#90caf9', level: 0 },
      ...prerequisites.map((p, i) => ({
        id: p,
        label: p,
        color: '#a5d6a7',
        level: i + 1,
      })),
      { id: topic, label: topic, color: '#ffab91', level: prerequisites.length + 1 },
    ];

    const edges: Edge[] = [];

    // Connect: Start → prereq1
    if (prerequisites.length > 0) {
      edges.push({ from: 'Start', to: prerequisites[0], arrows: 'to' });

      // Chain: prereq1 → prereq2 → ...
      for (let i = 0; i < prerequisites.length - 1; i++) {
        edges.push({ from: prerequisites[i], to: prerequisites[i + 1], arrows: 'to' });
      }

      // Final prereq → Topic
      edges.push({ from: prerequisites[prerequisites.length - 1], to: topic, arrows: 'to' });
    } else {
      edges.push({ from: 'Start', to: topic, arrows: 'to' });
    }

    const data = {
      nodes: new DataSet<Node>(nodes),
      edges: new DataSet<Edge>(edges),
    };

    const options = {
      layout: {
        hierarchical: {
          enabled: true,
          levelSeparation: 150,
          direction: 'UD', // Up to Down
          sortMethod: 'directed',
        },
      },
      physics: {
        enabled: false,
      },
      edges: {
        smooth: true,
        arrows: {
          to: { enabled: true, scaleFactor: 1 },
        },
      },
      nodes: {
        shape: 'box',
        font: {
          face: 'Arial',
          size: 14,
        },
        margin: {
          top: 10,
          bottom: 10,
          left: 10,
          right: 10,
        },
      },
    };

    new Network(containerRef.current, data, options);
  }, [topic, prerequisites]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <div
        ref={containerRef}
style={{
  width: '100%',
  height: '550px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  backgroundColor: '#fafafa',
}}


      />
    </div>
  );
};

export default Graph;