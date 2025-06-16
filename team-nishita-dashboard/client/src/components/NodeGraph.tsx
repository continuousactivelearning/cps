import React, { useEffect, useState } from "react";
import ReactFlow, {
    Background,
    Controls,
    MiniMap,
    useReactFlow,
    ReactFlowProvider,
} from "reactflow";
import type { Node, Edge } from "reactflow";
import dagre from "dagre";
import "reactflow/dist/style.css";

type ModuleNode = {
    id: string;
    label: string;
    prerequisites: string[];
};

const NODE_WIDTH = 180;
const NODE_HEIGHT = 60;

const completedModuleIds: string[] = ["Math", "Recursion", "Arrays"];

const modules: ModuleNode[] = [
    { id: "Math", label: "Mathematics", prerequisites: [] },
    { id: "Recursion", label: "Recursion", prerequisites: ["Math"] },
    { id: "SortSearch", label: "Sorting & Searching", prerequisites: ["Recursion"] },
    { id: "Arrays", label: "Arrays & Strings", prerequisites: ["SortSearch"] },
    { id: "LinkedList", label: "Linked Lists", prerequisites: ["Arrays"] },
    { id: "StacksQueues", label: "Stacks & Queues", prerequisites: ["LinkedList"] },
    { id: "Trees", label: "Trees", prerequisites: ["StacksQueues"] },
    { id: "Graphs", label: "Graphs", prerequisites: ["Trees"] },
    { id: "DP", label: "Dynamic Programming", prerequisites: ["Graphs"] },
    { id: "Greedy", label: "Greedy Algorithms", prerequisites: ["DP"] },
    { id: "Backtracking", label: "Backtracking", prerequisites: ["DP"] },
    { id: "Hashing", label: "Hashing", prerequisites: ["Arrays"] },
    { id: "Heaps", label: "Heaps", prerequisites: ["Trees"] },
    { id: "Tries", label: "Tries", prerequisites: ["Arrays"] },
    { id: "BitManip", label: "Bit Manipulation", prerequisites: ["Math"] },
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
        node.position = {
            x: pos.x - NODE_WIDTH / 2,
            y: pos.y - NODE_HEIGHT / 2,
        };
    });

    return { nodes, edges };
};

const GraphInner: React.FC = () => {
    const [graphNodes, setGraphNodes] = useState<Node[]>([]);
    const [graphEdges, setGraphEdges] = useState<Edge[]>([]);
    const { fitView } = useReactFlow();

    useEffect(() => {
        const nodes: Node[] = modules.map((module) => {
            const isCompleted = completedModuleIds.includes(module.id);
            return {
                id: module.id,
                data: { label: module.label },
                position: { x: 0, y: 0 },
                style: {
                    backgroundColor: isCompleted ? "#dcfce7" : "#ffffff",
                    border: isCompleted ? "2px solid #22c55e" : "1px solid #d1d5db",
                    color: isCompleted ? "#166534" : "#111827",
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
                style: { stroke: "#888" },
            }))
        );

        const { nodes: layoutedNodes, edges: layoutedEdges } = layoutWithDagre(nodes, edges);
        setGraphNodes(layoutedNodes);
        setGraphEdges(layoutedEdges);

        setTimeout(() => fitView({ padding: 0.2 }), 0);
    }, []);

    return (
        <ReactFlow
            nodes={graphNodes}
            edges={graphEdges}
            fitView
            proOptions={{ hideAttribution: true }}
            panOnScroll
            zoomOnScroll
            minZoom={0.4}
            maxZoom={2}
        >
            <MiniMap />
            <Controls />
            <Background />
        </ReactFlow>
    );
};

const DependencyGraph: React.FC = () => {
    return (
        <div className="w-full h-[80vh] p-2 overflow-auto border rounded bg-white shadow">
            <ReactFlowProvider>
                <GraphInner />
            </ReactFlowProvider>
        </div>
    );
};

export default DependencyGraph;
