
import { useState } from "react";
import {
  Shield,
  Search,
  User,
  Trophy,
  Target,
  Clock,
  CheckCircle,
  Brain,
  Star,
  ArrowRight,
} from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const officers = [
  {
    id: "OF-001",
    name: "Inspector Rao",
    rank: "Inspector",
    casesSolved: 48,
    activeCases: 6,
    aiScore: 96,
    responseTime: "12 min",
    performance: 92,
  },
  {
    id: "OF-002",
    name: "ACP Sharma",
    rank: "ACP",
    casesSolved: 63,
    activeCases: 4,
    aiScore: 98,
    responseTime: "10 min",
    performance: 97,
  },
  {
    id: "OF-003",
    name: "Inspector Mehta",
    rank: "Inspector",
    casesSolved: 39,
    activeCases: 8,
    aiScore: 89,
    responseTime: "18 min",
    performance: 81,
  },
  {
    id: "OF-004",
    name: "SI Kumar",
    rank: "Sub Inspector",
    casesSolved: 31,
    activeCases: 5,
    aiScore: 91,
    responseTime: "15 min",
    performance: 87,
  },
];

const chartData = [
  { month: "Apr", solved: 28 },
  { month: "May", solved: 35 },
  { month: "Jun", solved: 42 },
  { month: "Jul", solved: 39 },
  { month: "Aug", solved: 48 },
  { month: "Sep", solved: 63 },
];

export default function OfficerPerformance() {
  const [search, setSearch] = useState("");
  const [rankFilter, setRankFilter] = useState("All");

  const filtered = officers.filter((officer) => {
    const matchSearch =
      officer.name.toLowerCase().includes(search.toLowerCase()) ||
      officer.id.toLowerCase().includes(search.toLowerCase());

    const matchRank =
      rankFilter === "All" || officer.rank === rankFilter;

    return matchSearch && matchRank;
  });

  return (
    <div className="bg-[#020817] min-h-screen text-white p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Shield className="text-cyan-400" />
            Officer Performance
          </h1>

          <p className="text-slate-400 mt-1">
            AI-powered performance analytics for law enforcement officers
          </p>
        </div>

        <div className="bg-cyan-900/20 border border-cyan-700 px-4 py-2 rounded-xl">
          Performance Engine Active
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-4 gap-5 mb-6">
        <StatCard title="Total Officers" value="128" icon={Shield} color="blue" />
        <StatCard title="Cases Solved" value="1,284" icon={CheckCircle} color="green" />
        <StatCard title="Avg AI Score" value="94%" icon={Brain} color="cyan" />
        <StatCard title="Avg Response" value="14 min" icon={Clock} color="orange" />
      </div>

      {/* Search + Filter */}
      <div className="bg-[#08111F] border border-slate-800 rounded-xl p-5 mb-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-3 text-slate-500" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Officer..."
              className="w-full bg-[#0F172A] border border-slate-700 rounded-lg pl-10 pr-3 py-3 outline-none focus:border-cyan-500"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {["All", "ACP", "Inspector", "Sub Inspector"].map((rank) => (
              <button
                key={rank}
                onClick={() => setRankFilter(rank)}
                className={`px-3 py-2 rounded-lg transition ${
                  rankFilter === rank
                    ? "bg-cyan-600"
                    : "bg-[#0F172A] hover:bg-slate-800"
                }`}
              >
                {rank}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Leaderboard + Chart */}
      <div className="grid xl:grid-cols-3 gap-6 mb-6">
        {/* Leaderboard */}
        <div className="bg-[#08111F] border border-slate-800 rounded-xl p-5">
          <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
            <Trophy className="text-yellow-400" />
            Top Performers
          </h3>

          <div className="space-y-4">
            {officers
              .sort((a, b) => b.performance - a.performance)
              .slice(0, 3)
              .map((officer, index) => (
                <div
                  key={officer.id}
                  className="flex items-center justify-between bg-[#0F172A] border border-slate-700 rounded-lg p-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center font-bold">
                      {index + 1}
                    </div>

                    <div>
                      <h4 className="font-semibold">{officer.name}</h4>
                      <p className="text-xs text-slate-400">{officer.rank}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-yellow-400 font-bold">
                      {officer.performance}%
                    </p>
                    <p className="text-xs text-slate-400">
                      Performance
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Chart */}
        <div className="xl:col-span-2 bg-[#08111F] border border-slate-800 rounded-xl p-5">
          <h3 className="text-xl font-bold mb-4">
            Monthly Cases Solved
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid stroke="#1E293B" strokeDasharray="3 3" />

              <XAxis dataKey="month" stroke="#94A3B8" />

              <YAxis stroke="#94A3B8" />

              <Tooltip
                contentStyle={{
                  background: "#08111F",
                  border: "1px solid #334155",
                }}
              />

              <Bar
                dataKey="solved"
                fill="#06B6D4"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Officer Cards */}
      <div className="grid lg:grid-cols-2 gap-5">
        {filtered.map((officer) => (
          <div
            key={officer.id}
            className="bg-[#08111F] border border-slate-800 rounded-xl p-5 hover:border-cyan-500 transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{officer.name}</h3>
                <p className="text-cyan-300">{officer.rank}</p>
              </div>

              <div className="flex items-center gap-1 text-yellow-400">
                <Star size={18} />
                {officer.aiScore}%
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-5 text-sm">
              <Info icon={User} text={officer.id} />
              <Info icon={CheckCircle} text={`${officer.casesSolved} Solved`} />
              <Info icon={Target} text={`${officer.activeCases} Active`} />
              <Info icon={Clock} text={officer.responseTime} />
            </div>

            {/* Performance Bar */}
            <div className="mt-5">
              <div className="flex justify-between text-xs mb-1">
                <span>Performance Score</span>
                <span>{officer.performance}%</span>
              </div>

              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-cyan-500"
                  style={{ width: `${officer.performance}%` }}
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-5">
              <button className="bg-cyan-600 hover:bg-cyan-500 px-3 py-2 rounded-lg transition">
                View Profile
              </button>

              <button className="border border-slate-700 hover:border-cyan-500 px-3 py-2 rounded-lg transition">
                View Cases
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* AI Insights */}
      <div className="mt-8 bg-blue-900/20 border border-blue-700 rounded-xl p-5">
        <div className="flex items-center gap-2">
          <Brain className="text-blue-400" />
          <h3 className="font-semibold text-blue-300">
            AI Performance Insights
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-5">
          <Insight
            title="Top Performer"
            text="ACP Sharma has the highest AI performance score with 63 solved cases."
          />

          <Insight
            title="Response Time"
            text="Average response time improved by 18% compared to last month."
          />

          <Insight
            title="Recommendation"
            text="Assign additional resources to officers handling critical investigations."
          />
        </div>

        <button className="mt-5 bg-cyan-600 hover:bg-cyan-500 px-4 py-3 rounded-lg flex items-center gap-2">
          Generate Performance Report
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
    green: "from-green-600 to-emerald-500",
    cyan: "from-cyan-600 to-blue-500",
    orange: "from-orange-600 to-yellow-500",
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
    <div className="flex items-center gap-2 text-slate-300">
      <Icon size={16} className="text-cyan-400" />
      {text}
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