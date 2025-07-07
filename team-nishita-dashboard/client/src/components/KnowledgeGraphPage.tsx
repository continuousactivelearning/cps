import React, { useEffect, useState, useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useReactFlow,
  ReactFlowProvider,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";
import type {
  Node,
  Edge,
  OnNodesChange,
  OnEdgesChange,
} from "reactflow";
import dagre from "dagre";
import "reactflow/dist/style.css";
import Layout from "./Layout";
import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";

type ModuleNode = {
  id: string;
  label: string;
  prerequisites: string[];
  description?: string;
};

const NODE_WIDTH = 180;
const NODE_HEIGHT = 60;

const completedModuleIds: string[] = [];

const modules: ModuleNode[] = [
  { id: "Math", label: "Mathematics", prerequisites: [], description: "Basic math concepts used in CS." },
  { id: "Recursion", label: "Recursion", prerequisites: ["Math"], description: "Functions that call themselves." },
  { id: "SortSearch", label: "Sorting & Searching", prerequisites: ["Recursion"], description: "Binary search, mergesort, etc." },
  { id: "Arrays", label: "Arrays & Strings", prerequisites: ["SortSearch"], description: "Linear data structures and string manip." },
  { id: "LinkedList", label: "Linked Lists", prerequisites: ["Arrays"], description: "Node-based dynamic data structures." },
  { id: "StacksQueues", label: "Stacks & Queues", prerequisites: ["LinkedList"], description: "LIFO/FIFO structures." },
  { id: "Trees", label: "Trees", prerequisites: ["StacksQueues"], description: "Hierarchical data structures." },
  { id: "Graphs", label: "Graphs", prerequisites: ["Trees"], description: "Nodes and edges representing networks." },
  { id: "DP", label: "Dynamic Programming", prerequisites: ["Graphs"], description: "Optimization with overlapping subproblems." },
  { id: "Greedy", label: "Greedy Algorithms", prerequisites: ["DP"], description: "Local optimal choices for global optima." },
  { id: "Backtracking", label: "Backtracking", prerequisites: ["DP"], description: "Exploring all possibilities recursively." },
  { id: "Hashing", label: "Hashing", prerequisites: ["Arrays"], description: "Efficient key-based lookups." },
  { id: "Heaps", label: "Heaps", prerequisites: ["Trees"], description: "Priority queues using trees." },
  { id: "Tries", label: "Tries", prerequisites: ["Arrays"], description: "Prefix tree for fast lookups." },
  { id: "BitManip", label: "Bit Manipulation", prerequisites: ["Math"], description: "Low-level bitwise logic." },
];

const layoutWithDagre = (nodes: Node[], edges: Edge[]) => {
  const graph = new dagre.graphlib.Graph();
  graph.setGraph({ rankdir: "TB" });
  graph.setDefaultEdgeLabel(() => ({}));

  nodes.forEach((node) => {
    graph.setNode(node.id, { width: NODE_WIDTH, height: NODE_HEIGHT });
  });

  edges.forEach((edge) => {
    graph.setEdge(edge.source, edge.target);
  });

  dagre.layout(graph);

  nodes.forEach((node) => {
    const pos = graph.node(node.id);
    if (pos) {
      node.position = {
        x: pos.x - NODE_WIDTH / 2,
        y: pos.y - NODE_HEIGHT / 2,
      };
    }
  });

  return { nodes, edges };
};

const GraphInner: React.FC = () => {
  const [graphNodes, setGraphNodes] = useState<Node[]>([]);
  const [graphEdges, setGraphEdges] = useState<Edge[]>([]);
  const { fitView, setViewport } = useReactFlow();
  const { darkMode } = useTheme();

  const getPrerequisiteChain = (targetId: string): string[] => {
    const visited = new Set<string>();
    const dfs = (id: string) => {
      if (visited.has(id)) return;
      visited.add(id);
      const mod = modules.find((m) => m.id === id);
      mod?.prerequisites.forEach(dfs);
    };
    dfs(targetId);
    return [...visited];
  };

  const buildGraph = useCallback((highlight: string[] = []) => {
    const nodes: Node[] = modules.map((module) => {
      const isCompleted = completedModuleIds.includes(module.id);
      const isHighlighted = highlight.includes(module.id);
      return {
        id: module.id,
        data: {
          label: (
            <div title={module.description || ""} key={module.id}>
              {module.label}
            </div>
          ),
        },
        position: { x: 0, y: 0 },
        style: {
          backgroundColor: isHighlighted
            ? darkMode ? "#1e3a8a" : "#e0f2fe"
            : isCompleted
              ? darkMode ? "#064e3b" : "#dcfce7"
              : darkMode ? "#374151" : "#ffffff",
          border: isCompleted
            ? "2px solid #22c55e"
            : darkMode ? "1px solid #6b7280" : "1px solid #d1d5db",
          color: isCompleted 
            ? darkMode ? "#4ade80" : "#166534" 
            : darkMode ? "#f9fafb" : "#111827",
          fontWeight: 500,
          borderRadius: 8,
          padding: 10,
          textAlign: "center",
        },
      };
    });

    const edges: Edge[] = modules.flatMap((module) =>
      module.prerequisites.map((prereq) => ({
        id: `${prereq}->${module.id}`,
        source: prereq,
        target: module.id,
        animated: true,
        style: {
          stroke:
            highlight.includes(prereq) && highlight.includes(module.id)
              ? "#0284c7"
              : darkMode ? "#9ca3af" : "#888",
          strokeWidth:
            highlight.includes(prereq) && highlight.includes(module.id)
              ? 2.5
              : 1.2,
        },
      }))
    );

    const { nodes: layoutedNodes, edges: layoutedEdges } = layoutWithDagre(nodes, edges);
    setGraphNodes(layoutedNodes);
    setGraphEdges(layoutedEdges);

    setTimeout(() => {
      fitView({ padding: 0.2 });
      setViewport({ x: 40, y: 0, zoom: 1 });
    }, 0);
  }, [fitView, setViewport, darkMode]);

  useEffect(() => {
    buildGraph();
  }, [buildGraph]);

  const onNodesChange: OnNodesChange = useCallback((changes) => {
    setGraphNodes((nds) => applyNodeChanges(changes, nds));
  }, []);

  const onEdgesChange: OnEdgesChange = useCallback((changes) => {
    setGraphEdges((eds) => applyEdgeChanges(changes, eds));
  }, []);

  const onNodeClick = useCallback(
    (_: React.MouseEvent<Element, MouseEvent>, node: Node) => {
      const chain = getPrerequisiteChain(node.id);
      buildGraph(chain);
    },
    [buildGraph]
  );

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={graphNodes}
        edges={graphEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        fitView
        panOnScroll
        zoomOnScroll
        nodesDraggable
        minZoom={0.3}
        maxZoom={2}
        proOptions={{ hideAttribution: true }}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

const KnowledgeGraphPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.header className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Knowledge Prerequisite Graph
            </h1>
            <h6 className="mt-2 text-gray-600 text-sm max-w-2xl">
              Visualize how different modules build upon each other. Click on any module to highlight its learning chain.
            </h6>
          </motion.header>

          <motion.div className="w-full h-[75vh] rounded-lg overflow-hidden bg-white border shadow">
            <ReactFlowProvider>
              <GraphInner />
            </ReactFlowProvider>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default KnowledgeGraphPage;
