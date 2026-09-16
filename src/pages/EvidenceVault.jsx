import { useState } from "react";
import {
  Archive,
  Search,
  Upload,
  Download,
  Eye,
  Camera,
  Image,
  FileText,
  Mic,
  Smartphone,
  ShieldCheck,
  Calendar,
  User,
  Brain,
  HardDrive,
  CheckCircle,
} from "lucide-react";

const evidenceData = [
  {
    id: "EV-2026-001",
    title: "CCTV Footage - MG Road",
    case: "FIR-2026-018",
    type: "CCTV",
    officer: "Inspector Rao",
    date: "17 Sep 2026",
    aiScore: 98,
    status: "Verified",
  },
  {
    id: "EV-2026-002",
    title: "Suspect Photograph",
    case: "FIR-2026-015",
    type: "Image",
    officer: "ACP Sharma",
    date: "16 Sep 2026",
    aiScore: 95,
    status: "Verified",
  },
  {
    id: "EV-2026-003",
    title: "Bank Transaction Report",
    case: "FIR-2026-011",
    type: "Document",
    officer: "SI Kumar",
    date: "15 Sep 2026",
    aiScore: 91,
    status: "Processing",
  },
  {
    id: "EV-2026-004",
    title: "Intercepted Audio Call",
    case: "FIR-2026-006",
    type: "Audio",
    officer: "Inspector Mehta",
    date: "14 Sep 2026",
    aiScore: 89,
    status: "Verified",
  },
  {
    id: "EV-2026-005",
    title: "Phone Call Logs",
    case: "FIR-2026-018",
    type: "Phone",
    officer: "Inspector Rao",
    date: "13 Sep 2026",
    aiScore: 96,
    status: "Verified",
  },
];

const typeConfig = {
  CCTV: { icon: Camera, color: "bg-red-900/30 text-red-300 border-red-700" },
  Image: { icon: Image, color: "bg-blue-900/30 text-blue-300 border-blue-700" },
  Document: { icon: FileText, color: "bg-green-900/30 text-green-300 border-green-700" },
  Audio: { icon: Mic, color: "bg-purple-900/30 text-purple-300 border-purple-700" },
  Phone: { icon: Smartphone, color: "bg-orange-900/30 text-orange-300 border-orange-700" },
};

const statusColor = {
  Verified: "bg-green-900/30 text-green-300 border-green-700",
  Processing: "bg-yellow-900/30 text-yellow-300 border-yellow-700",
};

export default function EvidenceVault() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = evidenceData.filter((item) => {
    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.case.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase());

    const matchFilter = filter === "All" || item.type === filter;

    return matchSearch && matchFilter;
  });

  return (
    <div className="bg-[#020817] min-h-screen text-white p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Archive className="text-cyan-400" />
            Evidence Vault
          </h1>
          <p className="text-slate-400 mt-1">
            Secure AI-powered digital evidence management system
          </p>
        </div>

        <button className="bg-cyan-600 hover:bg-cyan-500 px-5 py-3 rounded-xl flex items-center gap-2">
          <Upload size={18} />
          Upload Evidence
        </button>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-5 mb-6">
        <StatCard title="Total Evidence" value="2,486" icon={Archive} color="blue" />
        <StatCard title="Verified" value="1,972" icon={ShieldCheck} color="green" />
        <StatCard title="AI Accuracy" value="96%" icon={Brain} color="cyan" />
        <StatCard title="Storage Used" value="1.8 TB" icon={HardDrive} color="purple" />
      </div>

      {/* Search & Filter */}
      <div className="bg-[#08111F] border border-slate-800 rounded-xl p-5 mb-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-3 text-slate-500" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Evidence..."
              className="w-full bg-[#0F172A] border border-slate-700 rounded-lg pl-10 pr-3 py-3 outline-none focus:border-cyan-500"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {["All", "CCTV", "Image", "Document", "Audio", "Phone"].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-3 py-2 rounded-lg transition ${
                  filter === item
                    ? "bg-cyan-600"
                    : "bg-[#0F172A] hover:bg-slate-800"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Evidence Cards */}
      <div className="grid lg:grid-cols-2 gap-5">
        {filtered.map((item) => {
          const Icon = typeConfig[item.type].icon;

          return (
            <div
              key={item.id}
              className="bg-[#08111F] border border-slate-800 rounded-xl p-5 hover:border-cyan-500 transition"
            >
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${typeConfig[item.type].color}`}>
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-cyan-300 text-sm">{item.id}</p>
                  </div>
                </div>

                <span className={`px-3 py-1 rounded-full text-xs border ${statusColor[item.status]}`}>
                  {item.status}
                </span>
              </div>

              {/* Info */}
              <div className="grid grid-cols-2 gap-4 mt-5 text-sm text-slate-300">
                <Info icon={FileText} text={item.case} />
                <Info icon={Calendar} text={item.date} />
                <Info icon={User} text={item.officer} />
                <Info icon={ShieldCheck} text={item.type} />
              </div>

              {/* AI Verification */}
              <div className="mt-5">
                <div className="flex justify-between text-xs mb-1">
                  <span>AI Verification</span>
                  <span>{item.aiScore}%</span>
                </div>

                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-cyan-500"
                    style={{ width: `${item.aiScore}%` }}
                  />
                </div>
              </div>

              {/* Chain of Custody */}
              <div className="mt-5 bg-[#0F172A] border border-slate-700 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-400" />
                  <span className="font-semibold text-green-300">
                    Chain of Custody Verified
                  </span>
                </div>

                <p className="text-xs text-slate-400 mt-2">
                  Collected → Verified → Stored → AI Authenticated
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-5">
                <button className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 px-3 py-2 rounded-lg transition">
                  <Eye size={16} />
                  View
                </button>

                <button className="flex items-center gap-2 border border-slate-700 hover:border-cyan-500 px-3 py-2 rounded-lg transition">
                  <Download size={16} />
                  Download
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* AI Insights */}
      <div className="mt-8 bg-blue-900/20 border border-blue-700 rounded-xl p-5">
        <div className="flex items-center gap-2">
          <Brain className="text-blue-400" />
          <h3 className="font-semibold text-blue-300">
            AI Evidence Analysis
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-5">
          <Insight
            title="CCTV Match"
            text="New facial recognition matches connect FIR-2026-018 with previous investigations."
          />

          <Insight
            title="Financial Evidence"
            text="Bank documents reveal recurring transactions between linked suspects."
          />

          <Insight
            title="Recommended Action"
            text="Prioritize verification of pending financial documents."
          />
        </div>
      </div>
    </div>
  );
}

/* ---------- Reusable Components ---------- */

function StatCard({ title, value, icon: Icon, color }) {
  const colors = {
    blue: "from-blue-600 to-cyan-500",
    green: "from-green-600 to-emerald-500",
    cyan: "from-cyan-600 to-blue-500",
    purple: "from-purple-600 to-indigo-500",
  };

  return (
    <div className="bg-[#08111F] border border-slate-800 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-slate-400 text-sm">{title}</p>
          <h3 className="text-3xl font-bold mt-2">{value}</h3>
        </div>

        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[color]} flex items-center justify-center`}>
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
}

function Info({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2">
      <Icon size={16} className="text-cyan-400" />
      <span>{text}</span>
    </div>
  );
}

function Insight({ title, text }) {
  return (
    <div className="bg-[#0F172A] border border-slate-700 rounded-lg p-4">
      <h4 className="font-semibold text-cyan-300">{title}</h4>
      <p className="text-sm text-slate-300 mt-2">{text}</p>
    </div>
  );
}