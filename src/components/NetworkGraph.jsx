import React from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Handle,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";

const CriminalNode = ({ data }) => {
  const colors = {
    mastermind: "bg-red-600 border-red-400",
    suspect: "bg-blue-600 border-blue-400",
    witness: "bg-green-600 border-green-400",
    officer: "bg-yellow-500 border-yellow-300 text-black",
  };

  return (
    <div
      className={`px-4 py-3 rounded-xl border-2 shadow-lg min-w-[140px] text-center ${colors[data.type]}`}
    >
      <Handle type="target" position={Position.Top} className="!bg-white" />

      <div className="text-2xl mb-1">{data.icon}</div>

      <h3 className="font-semibold text-sm">{data.label}</h3>

      <p className="text-xs opacity-80">{data.role}</p>

      <Handle type="source" position={Position.Bottom} className="!bg-white" />
    </div>
  );
};

const nodeTypes = {
  criminal: CriminalNode,
};

const nodes = [
  {
    id: "1",
    type: "criminal",
    position: { x: 320, y: 40 },
    data: {
      label: "Vikram",
      role: "Mastermind",
      icon: "👑",
      type: "mastermind",
    },
  },

  {
    id: "2",
    type: "criminal",
    position: { x: 120, y: 180 },
    data: {
      label: "Ravi",
      role: "Suspect",
      icon: "👤",
      type: "suspect",
    },
  },

  {
    id: "3",
    type: "criminal",
    position: { x: 520, y: 180 },
    data: {
      label: "Aman",
      role: "Suspect",
      icon: "👤",
      type: "suspect",
    },
  },

  {
    id: "4",
    type: "criminal",
    position: { x: 320, y: 330 },
    data: {
      label: "Riya",
      role: "Witness",
      icon: "🟢",
      type: "witness",
    },
  },

  {
    id: "5",
    type: "criminal",
    position: { x: 690, y: 120 },
    data: {
      label: "Inspector",
      role: "Officer",
      icon: "🛡️",
      type: "officer",
    },
  },
];

const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    label: "Phone Calls",
    animated: true,
    style: { stroke: "#38bdf8", strokeWidth: 2 },
    labelStyle: { fill: "#94a3b8", fontSize: 12 },
  },

  {
    id: "e1-3",
    source: "1",
    target: "3",
    label: "Money Transfer",
    animated: true,
    style: { stroke: "#f97316", strokeWidth: 2 },
    labelStyle: { fill: "#94a3b8", fontSize: 12 },
  },

  {
    id: "e2-4",
    source: "2",
    target: "4",
    label: "Seen Together",
    animated: true,
    style: { stroke: "#22c55e", strokeWidth: 2 },
    labelStyle: { fill: "#94a3b8", fontSize: 12 },
  },

  {
    id: "e3-4",
    source: "3",
    target: "4",
    label: "CCTV Match",
    animated: true,
    style: { stroke: "#a855f7", strokeWidth: 2 },
    labelStyle: { fill: "#94a3b8", fontSize: 12 },
  },

  {
    id: "e5-1",
    source: "5",
    target: "1",
    label: "Investigation",
    animated: true,
    style: { stroke: "#facc15", strokeWidth: 2 },
    labelStyle: { fill: "#94a3b8", fontSize: 12 },
  },
];

export default function NetworkGraph() {
  return (
    <div className="bg-[#08111f] border border-slate-800 rounded-xl p-5 h-[650px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="text-xl font-bold text-white">
            Criminal Network Analysis
          </h2>

          <p className="text-sm text-slate-400">
            AI-powered relationship visualization
          </p>
        </div>

        <span className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-sm">
          Live Graph
        </span>
      </div>

      {/* Legend */}
      <div className="flex gap-5 text-sm mb-4 flex-wrap">
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          Mastermind
        </span>

        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-500"></span>
          Suspect
        </span>

        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          Witness
        </span>

        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          Officer
        </span>
      </div>

      {/* Graph */}
      <div className="rounded-xl overflow-hidden border border-slate-700 h-[520px]">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          attributionPosition="bottom-left"
        >
          <Background color="#1e293b" gap={24} />
          <Controls />
          <MiniMap
            nodeColor={(node) => {
              if (node.data.type === "mastermind") return "#ef4444";
              if (node.data.type === "suspect") return "#2563eb";
              if (node.data.type === "witness") return "#22c55e";
              return "#facc15";
            }}
          />
        </ReactFlow>
      </div>
    </div>
  );
}