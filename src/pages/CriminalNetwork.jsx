import { useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Handle,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";

import {
  Network,
  Phone,
  Landmark,
  Camera,
  MapPin,
  Shield,
  User,
  Car,
  Brain,
  AlertTriangle,
} from "lucide-react";

/* ---------- Custom Node ---------- */

function PersonNode({ data }) {
  const colors = {
    mastermind: "bg-red-600 border-red-400",
    suspect: "bg-blue-600 border-blue-400",
    witness: "bg-green-600 border-green-400",
    officer: "bg-yellow-500 border-yellow-300 text-black",
    vehicle: "bg-purple-600 border-purple-400",
    bank: "bg-cyan-600 border-cyan-400",
  };

  return (
    <div
      className={`px-4 py-3 rounded-xl border-2 shadow-lg min-w-[150px] text-center ${colors[data.type]}`}
    >
      <Handle type="target" position={Position.Top} className="!bg-white" />

      <div className="flex justify-center mb-2">
        {data.icon}
      </div>

      <h3 className="font-semibold text-sm">{data.label}</h3>

      <p className="text-xs opacity-80">{data.role}</p>

      <Handle type="source" position={Position.Bottom} className="!bg-white" />
    </div>
  );
}

const nodeTypes = {
  person: PersonNode,
};

/* ---------- Network Data ---------- */

const nodes = [
  {
    id: "1",
    type: "person",
    position: { x: 420, y: 30 },
    data: {
      label: "Vikram Singh",
      role: "Mastermind",
      icon: <User size={26} />,
      type: "mastermind",
    },
  },

  {
    id: "2",
    type: "person",
    position: { x: 170, y: 180 },
    data: {
      label: "Ravi Kumar",
      role: "Suspect",
      icon: <User size={22} />,
      type: "suspect",
    },
  },

  {
    id: "3",
    type: "person",
    position: { x: 420, y: 180 },
    data: {
      label: "Aman Shah",
      role: "Suspect",
      icon: <User size={22} />,
      type: "suspect",
    },
  },

  {
    id: "4",
    type: "person",
    position: { x: 670, y: 180 },
    data: {
      label: "Neha",
      role: "Witness",
      icon: <User size={22} />,
      type: "witness",
    },
  },

  {
    id: "5",
    type: "person",
    position: { x: 860, y: 70 },
    data: {
      label: "Inspector Rao",
      role: "Officer",
      icon: <Shield size={22} />,
      type: "officer",
    },
  },

  {
    id: "6",
    type: "person",
    position: { x: 170, y: 350 },
    data: {
      label: "KA-01-AB-1234",
      role: "Vehicle",
      icon: <Car size={22} />,
      type: "vehicle",
    },
  },

  {
    id: "7",
    type: "person",
    position: { x: 420, y: 350 },
    data: {
      label: "Bank Account",
      role: "Financial Link",
      icon: <Landmark size={22} />,
      type: "bank",
    },
  },

  {
    id: "8",
    type: "person",
    position: { x: 670, y: 350 },
    data: {
      label: "Unknown Number",
      role: "Phone Contact",
      icon: <Phone size={22} />,
      type: "vehicle",
    },
  },
];

const edges = [
  {
    id: "1-2",
    source: "1",
    target: "2",
    label: "Phone Calls",
    animated: true,
    style: { stroke: "#38BDF8", strokeWidth: 3 },
  },
  {
    id: "1-3",
    source: "1",
    target: "3",
    label: "Money Transfer",
    animated: true,
    style: { stroke: "#F97316", strokeWidth: 3 },
  },
  {
    id: "2-4",
    source: "2",
    target: "4",
    label: "Seen Together",
    animated: true,
    style: { stroke: "#22C55E", strokeWidth: 3 },
  },
  {
    id: "3-4",
    source: "3",
    target: "4",
    label: "CCTV Match",
    animated: true,
    style: { stroke: "#9333EA", strokeWidth: 3 },
  },
  {
    id: "5-1",
    source: "5",
    target: "1",
    label: "Investigation",
    animated: true,
    style: { stroke: "#FACC15", strokeWidth: 3 },
  },
  {
    id: "2-6",
    source: "2",
    target: "6",
    label: "Vehicle Used",
    animated: true,
    style: { stroke: "#8B5CF6", strokeWidth: 3 },
  },
  {
    id: "1-7",
    source: "1",
    target: "7",
    label: "Bank Link",
    animated: true,
    style: { stroke: "#06B6D4", strokeWidth: 3 },
  },
  {
    id: "3-8",
    source: "3",
    target: "8",
    label: "Unknown Contact",
    animated: true,
    style: { stroke: "#EC4899", strokeWidth: 3 },
  },
];

/* ---------- Main Page ---------- */

export default function CriminalNetwork() {
  const [filter, setFilter] = useState("All");

  return (
    <div className="bg-[#020817] min-h-screen text-white p-6">
      {/* Header */}

      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Network className="text-cyan-400" />
            Criminal Network
          </h1>

          <p className="text-slate-400 mt-1">
            AI-powered relationship and hierarchy analysis
          </p>
        </div>

        <span className="bg-cyan-900/30 border border-cyan-700 text-cyan-300 px-4 py-2 rounded-xl">
          Live Intelligence
        </span>
      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-4 gap-5 mb-6">
        <StatCard title="Total Persons" value="8" color="blue" />
        <StatCard title="Connections" value="18" color="cyan" />
        <StatCard title="High Risk" value="3" color="red" />
        <StatCard title="AI Accuracy" value="96%" color="green" />
      </div>

      {/* Filters */}

      <div className="flex flex-wrap gap-3 mb-6">
        {["All", "Calls", "Financial", "Location", "Social"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-4 py-2 rounded-lg transition ${
              filter === item
                ? "bg-cyan-600"
                : "bg-[#08111F] hover:bg-slate-800"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Graph */}

      <div className="grid xl:grid-cols-4 gap-6">
        <div className="xl:col-span-3 bg-[#08111F] border border-slate-800 rounded-xl p-5">
          <div className="h-[650px] rounded-lg overflow-hidden border border-slate-700 bg-[#020817]">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              fitView
            >
              <Background color="#1E293B" gap={24} />
              <Controls />
              <MiniMap />
            </ReactFlow>
          </div>
        </div>

        {/* Side Panel */}

        <div className="bg-[#08111F] border border-slate-800 rounded-xl p-5 space-y-5">
          <h3 className="font-bold text-xl">Selected Profile</h3>

          <div className="bg-[#0F172A] rounded-lg p-4 border border-slate-700">
            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mx-auto">
              <User size={30} />
            </div>

            <h4 className="text-center font-semibold mt-3">
              Vikram Singh
            </h4>

            <p className="text-center text-red-400 text-sm">
              Mastermind
            </p>

            <div className="mt-4 space-y-3 text-sm">
              <Info icon={Phone} text="42 Calls Linked" />
              <Info icon={Landmark} text="₹12.4L Transactions" />
              <Info icon={MapPin} text="Bengaluru Central" />
              <Info icon={Camera} text="CCTV Match: 94%" />
            </div>
          </div>

          <div className="bg-red-900/20 border border-red-700 rounded-lg p-4">
            <div className="flex gap-2 items-center">
              <AlertTriangle className="text-red-400" />

              <h4 className="font-semibold text-red-300">
                Risk Assessment
              </h4>
            </div>

            <p className="text-sm text-slate-300 mt-3">
              AI identified multiple communication and financial
              connections indicating coordinated criminal activity.
            </p>

            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1">
                <span>Threat Level</span>
                <span>96%</span>
              </div>

              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-red-500 w-[96%]"></div>
              </div>
            </div>
          </div>

          <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4">
            <div className="flex gap-2 items-center">
              <Brain className="text-blue-400" />

              <h4 className="font-semibold text-blue-300">
                AI Recommendation
              </h4>
            </div>

            <p className="text-sm text-slate-300 mt-3">
              Monitor linked bank accounts, intercept communication,
              and increase surveillance around Bengaluru Central.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Components ---------- */

function StatCard({ title, value, color }) {
  const colors = {
    blue: "from-blue-600 to-cyan-500",
    cyan: "from-cyan-600 to-blue-500",
    red: "from-red-600 to-red-400",
    green: "from-green-600 to-emerald-500",
  };

  return (
    <div className="bg-[#08111F] border border-slate-800 rounded-xl p-5">
      <div className={`h-1 rounded-full bg-gradient-to-r ${colors[color]} mb-4`} />

      <p className="text-slate-400 text-sm">{title}</p>

      <h2 className="text-3xl font-bold mt-2">{value}</h2>
    </div>
  );
}

function Info({ icon: Icon, text }) {
  return (
    <div className="flex gap-2 items-center text-slate-300">
      <Icon size={16} className="text-cyan-400" />
      {text}
    </div>
  );
}