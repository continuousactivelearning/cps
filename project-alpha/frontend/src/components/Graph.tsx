import { useEffect, useRef } from 'react';
import { DataSet, Network } from 'vis-network/standalone';
import type { Node, Edge } from 'vis-network';

type GraphProps = {
  topic: string;
  prerequisites?: string[];
};

const Graph = ({ topic, prerequisites }: GraphProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Ensure prerequisites is an array
    const safePrerequisites = prerequisites || [];

    const nodes: Node[] = [
      { id: 'Start', label: 'Start', color: '#90caf9', level: 0 },
      ...safePrerequisites.map((p, i) => ({
        id: p,
        label: p,
        color: '#a5d6a7',
        level: i + 1,
      })),
      { id: topic, label: topic, color: '#ffab91', level: safePrerequisites.length + 1 },
    ];

    const edges: Edge[] = [];

    // Connect: Start → prereq1
    if (safePrerequisites.length > 0) {
      edges.push({ from: 'Start', to: safePrerequisites[0], arrows: 'to' });

      // Chain: prereq1 → prereq2 → ...
      for (let i = 0; i < safePrerequisites.length - 1; i++) {
        edges.push({ from: safePrerequisites[i], to: safePrerequisites[i + 1], arrows: 'to' });
      }

      // Final prereq → Topic
      edges.push({ from: safePrerequisites[safePrerequisites.length - 1], to: topic, arrows: 'to' });
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
    <div style={{
      width: '100%',
      height: '400px',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      backgroundColor: '#fafafa',
      overflow: 'hidden'
    }}>
      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default Graph;