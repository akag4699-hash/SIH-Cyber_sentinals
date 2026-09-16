import { useState } from "react";
import {
  Brain,
  Search,
  FileText,
  Download,
  Eye,
  CheckCircle,
  Clock,
  AlertTriangle,
  User,
  Calendar,
  ArrowRight,
} from "lucide-react";

const reportsData = [
  {
    id: "RPT-2026-018",
    title: "Mastermind Network Analysis",
    fir: "FIR-2026-018",
    category: "Network",
    officer: "Inspector Rao",
    date: "17 Sep 2026",
    confidence: 98,
    status: "Completed",
  },
  {
    id: "RPT-2026-015",
    title: "Financial Intelligence Report",
    fir: "FIR-2026-015",
    category: "Financial",
    officer: "ACP Sharma",
    date: "16 Sep 2026",
    confidence: 94,
    status: "Completed",
  },
  {
    id: "RPT-2026-011",
    title: "Crime Pattern Prediction",
    fir: "FIR-2026-011",
    category: "Predictive",
    officer: "SI Kumar",
    date: "15 Sep 2026",
    confidence: 91,
    status: "Processing",
  },
  {
    id: "RPT-2026-006",
    title: "Investigation Summary",
    fir: "FIR-2026-006",
    category: "Investigation",
    officer: "Inspector Mehta",
    date: "14 Sep 2026",
    confidence: 87,
    status: "Pending",
  },
];

const categoryColor = {
  Network: "bg-purple-900/30 text-purple-300 border-purple-700",
  Financial: "bg-green-900/30 text-green-300 border-green-700",
  Predictive: "bg-blue-900/30 text-blue-300 border-blue-700",
  Investigation: "bg-orange-900/30 text-orange-300 border-orange-700",
};

const statusConfig = {
  Completed: {
    icon: CheckCircle,
    color: "text-green-400",
    badge: "bg-green-900/30 text-green-300 border-green-700",
  },
  Processing: {
    icon: Clock,
    color: "text-yellow-400",
    badge: "bg-yellow-900/30 text-yellow-300 border-yellow-700",
  },
  Pending: {
    icon: AlertTriangle,
    color: "text-red-400",
    badge: "bg-red-900/30 text-red-300 border-red-700",
  },
};

export default function AIReports() {
  const [search, setSearch] = useState("");

  const filtered = reportsData.filter(
    (r) =>
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.fir.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#08111F] border border-slate-800 rounded-2xl p-6 shadow-lg">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Brain className="text-cyan-400" />
            AI Investigation Reports
          </h2>

          <p className="text-sm text-slate-400 mt-1">
            Automatically generated intelligence reports
          </p>
        </div>

        <div className="bg-cyan-900/20 border border-cyan-700 px-4 py-2 rounded-xl">
          <div className="flex items-center gap-2">
            <Brain size={18} className="text-cyan-400 animate-pulse" />
            <span className="text-cyan-300 text-sm">
              AI Report Engine Active
            </span>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search
          size={18}
          className="absolute left-3 top-3 text-slate-500"
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search FIR or Report..."
          className="w-full bg-[#0F172A] border border-slate-700 rounded-lg pl-10 pr-3 py-3 text-sm outline-none focus:border-cyan-500"
        />
      </div>

      {/* Report Cards */}
      <div className="grid lg:grid-cols-2 gap-5">
        {filtered.map((report) => {
          const StatusIcon = statusConfig[report.status].icon;

          return (
            <div
              key={report.id}
              className="bg-[#0F172A] border border-slate-700 rounded-xl p-5 hover:border-cyan-500 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg">
                    {report.title}
                  </h3>

                  <p className="text-sm text-cyan-300 mt-1">
                    {report.fir}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs border ${categoryColor[report.category]}`}
                >
                  {report.category}
                </span>
              </div>

              {/* Report Info */}
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <User size={16} className="text-cyan-400" />
                  {report.officer}
                </div>

                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-cyan-400" />
                  {report.date}
                </div>

                <div className="flex items-center gap-2">
                  <StatusIcon
                    size={16}
                    className={statusConfig[report.status].color}
                  />
                  <span
                    className={`px-2 py-1 rounded-full text-xs border ${statusConfig[report.status].badge}`}
                  >
                    {report.status}
                  </span>
                </div>
              </div>

              {/* Confidence */}
              <div className="mt-5">
                <div className="flex justify-between text-xs mb-1">
                  <span>AI Confidence</span>
                  <span>{report.confidence}%</span>
                </div>

                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-cyan-500"
                    style={{ width: `${report.confidence}%` }}
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-5">
                <button className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 transition px-3 py-2 rounded-lg text-sm">
                  <Eye size={16} />
                  View
                </button>

                <button className="flex items-center gap-2 border border-slate-600 hover:border-cyan-500 transition px-3 py-2 rounded-lg text-sm">
                  <Download size={16} />
                  Export PDF
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* AI Recommendations */}
      <div className="mt-8 bg-blue-900/20 border border-blue-700 rounded-xl p-5">
        <div className="flex items-center gap-2">
          <Brain className="text-blue-400" size={22} />
          <h3 className="font-semibold text-blue-300">
            AI Recommendations
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="bg-[#0F172A] rounded-lg p-4 border border-slate-700">
            <h4 className="font-semibold text-red-300">
              High Priority
            </h4>

            <p className="text-sm text-slate-300 mt-2">
              Expand the criminal network linked to FIR-2026-018.
            </p>
          </div>

          <div className="bg-[#0F172A] rounded-lg p-4 border border-slate-700">
            <h4 className="font-semibold text-cyan-300">
              Financial Tracking
            </h4>

            <p className="text-sm text-slate-300 mt-2">
              Monitor linked bank accounts for the next 48 hours.
            </p>
          </div>

          <div className="bg-[#0F172A] rounded-lg p-4 border border-slate-700">
            <h4 className="font-semibold text-green-300">
              Patrol Deployment
            </h4>

            <p className="text-sm text-slate-300 mt-2">
              Increase surveillance in Bengaluru Central hotspot.
            </p>
          </div>
        </div>

        <button className="mt-5 bg-cyan-600 hover:bg-cyan-500 transition px-4 py-3 rounded-lg flex items-center gap-2 text-sm font-medium">
          Generate New AI Report
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}