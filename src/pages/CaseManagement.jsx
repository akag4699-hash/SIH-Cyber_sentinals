import { useState } from "react";
import {
  FolderKanban,
  Search,
  Filter,
  Eye,
  Edit,
  Network,
  User,
  Calendar,
  MapPin,
  Brain,
  ArrowRight,
  ShieldAlert,
  Clock,
  CheckCircle,
} from "lucide-react";

const cases = [
  {
    id: "FIR-2026-018",
    crime: "Cyber Fraud",
    city: "Bengaluru",
    officer: "Inspector Rao",
    priority: "Critical",
    status: "Under Investigation",
    progress: 35,
    date: "17 Sep 2026",
  },
  {
    id: "FIR-2026-015",
    crime: "Money Laundering",
    city: "Mangaluru",
    officer: "ACP Sharma",
    priority: "High",
    status: "Evidence Collection",
    progress: 68,
    date: "16 Sep 2026",
  },
  {
    id: "FIR-2026-011",
    crime: "Vehicle Theft",
    city: "Belagavi",
    officer: "Inspector Mehta",
    priority: "Medium",
    status: "Charge Sheeted",
    progress: 90,
    date: "15 Sep 2026",
  },
  {
    id: "FIR-2026-006",
    crime: "Drug Trafficking",
    city: "Mysuru",
    officer: "SI Kumar",
    priority: "High",
    status: "Surveillance Active",
    progress: 52,
    date: "14 Sep 2026",
  },
];

const priorityStyle = {
  Critical: "bg-red-900/30 text-red-300 border-red-700",
  High: "bg-orange-900/30 text-orange-300 border-orange-700",
  Medium: "bg-yellow-900/30 text-yellow-300 border-yellow-700",
};

export default function CaseManagement() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredCases = cases.filter((item) => {
    const matchSearch =
      item.id.toLowerCase().includes(search.toLowerCase()) ||
      item.crime.toLowerCase().includes(search.toLowerCase()) ||
      item.officer.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      statusFilter === "All" || item.status === statusFilter;

    return matchSearch && matchStatus;
  });

  return (
    <div className="bg-[#020817] min-h-screen text-white p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <FolderKanban className="text-cyan-400" />
            Case Management
          </h1>
          <p className="text-slate-400 mt-1">
            Track investigations, officers, evidence, and AI insights.
          </p>
        </div>

        <button className="bg-cyan-600 hover:bg-cyan-500 transition px-5 py-3 rounded-xl font-medium">
          + Create New Case
        </button>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-5 mb-6">
        <StatCard title="Total Cases" value="1,284" icon={FolderKanban} color="blue" />
        <StatCard title="Active" value="214" icon={Clock} color="orange" />
        <StatCard title="Critical" value="32" icon={ShieldAlert} color="red" />
        <StatCard title="Completed" value="1,038" icon={CheckCircle} color="green" />
      </div>

      {/* Search + Filter */}
      <div className="bg-[#08111F] border border-slate-800 rounded-xl p-5 mb-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-3 text-slate-500" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search FIR, Crime, Officer..."
              className="w-full bg-[#0F172A] border border-slate-700 rounded-lg pl-10 pr-3 py-3 outline-none focus:border-cyan-500"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {[
              "All",
              "Under Investigation",
              "Evidence Collection",
              "Charge Sheeted",
              "Surveillance Active",
            ].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-2 rounded-lg text-sm transition ${
                  statusFilter === status
                    ? "bg-cyan-600"
                    : "bg-[#0F172A] hover:bg-slate-800"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Case Cards */}
      <div className="grid lg:grid-cols-2 gap-5">
        {filteredCases.map((item) => (
          <div
            key={item.id}
            className="bg-[#08111F] border border-slate-800 rounded-xl p-5 hover:border-cyan-500 transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold">{item.id}</h2>
                <p className="text-cyan-300">{item.crime}</p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs border ${priorityStyle[item.priority]}`}
              >
                {item.priority}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-5 text-sm">
              <Info icon={MapPin} text={item.city} />
              <Info icon={Calendar} text={item.date} />
              <Info icon={User} text={item.officer} />
              <Info icon={Clock} text={item.status} />
            </div>

            {/* Progress */}
            <div className="mt-5">
              <div className="flex justify-between text-xs mb-1">
                <span>Investigation Progress</span>
                <span>{item.progress}%</span>
              </div>

              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-cyan-500"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 mt-5">
              <ActionButton icon={Eye} text="View" />
              <ActionButton icon={Edit} text="Edit" />
              <ActionButton icon={Network} text="Network" />
            </div>
          </div>
        ))}
      </div>

      {/* AI Insights */}
      <div className="mt-8 bg-blue-900/20 border border-blue-700 rounded-xl p-5">
        <div className="flex items-center gap-2">
          <Brain className="text-blue-400" />
          <h3 className="font-semibold text-blue-300">
            AI Investigation Insights
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-5">
          <Insight
            title="Priority Case"
            text="FIR-2026-018 shows new criminal links and should be expanded immediately."
          />

          <Insight
            title="Financial Activity"
            text="Suspicious transactions connected to two ongoing investigations."
          />

          <Insight
            title="Patrol Suggestion"
            text="Increase surveillance in Bengaluru Central between 8 PM and 11 PM."
          />
        </div>

        <button className="mt-5 bg-cyan-600 hover:bg-cyan-500 px-4 py-3 rounded-lg flex items-center gap-2">
          Generate AI Case Summary
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

/* ---------- Reusable Components ---------- */

function StatCard({ title, value, icon: Icon, color }) {
  const colors = {
    blue: "from-blue-600 to-cyan-500",
    orange: "from-orange-600 to-yellow-500",
    red: "from-red-600 to-red-400",
    green: "from-green-600 to-emerald-500",
  };

  return (
    <div className="bg-[#08111F] border border-slate-800 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-slate-400 text-sm">{title}</p>
          <h3 className="text-3xl font-bold mt-2">{value}</h3>
        </div>

        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[color]} flex items-center justify-center`}
        >
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
}

function Info({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2 text-slate-300">
      <Icon size={16} className="text-cyan-400" />
      {text}
    </div>
  );
}

function ActionButton({ icon: Icon, text }) {
  return (
    <button className="flex items-center gap-2 bg-[#0F172A] border border-slate-700 hover:border-cyan-500 px-3 py-2 rounded-lg transition">
      <Icon size={16} />
      {text}
    </button>
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