
import { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";

const crimeData = [
  { name: "Body", cases: 245 },
  { name: "Cyber", cases: 198 },
  { name: "Property", cases: 320 },
  { name: "Narcotics", cases: 156 },
  { name: "Public Order", cases: 281 },
];

const monthlyData = [
  { month: "Jan", cases: 120 },
  { month: "Feb", cases: 150 },
  { month: "Mar", cases: 175 },
  { month: "Apr", cases: 210 },
  { month: "May", cases: 240 },
  { month: "Jun", cases: 260 },
  { month: "Jul", cases: 310 },
  { month: "Aug", cases: 350 },
];

const pieData = [
  { name: "Solved", value: 72 },
  { name: "Pending", value: 28 },
];

const COLORS = [
  "#2563EB",
  "#F97316",
  "#22C55E",
  "#9333EA",
  "#06B6D4",
];

export default function CrimeChart() {
  const [selectedView, setSelectedView] = useState("Weekly");

  return (
    <div className="bg-[#08111F] border border-slate-800 rounded-2xl p-6 shadow-lg">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <BarChart3 className="text-cyan-400" />
            Crime Analytics Center
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            AI-powered crime statistics and trend analysis
          </p>
        </div>

        {/* Filter */}
        <div className="flex gap-2">
          {["Daily", "Weekly", "Monthly"].map((view) => (
            <button
              key={view}
              onClick={() => setSelectedView(view)}
              className={`px-4 py-2 rounded-lg text-sm transition ${
                selectedView === view
                  ? "bg-cyan-600 text-white"
                  : "bg-[#0F172A] text-slate-300 hover:bg-slate-800"
              }`}
            >
              {view}
            </button>
          ))}
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-[#0F172A] rounded-xl p-4 border border-slate-700">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400 text-sm">Total Cases</p>
              <h3 className="text-3xl font-bold mt-1">1,200</h3>
            </div>

            <ShieldCheck className="text-blue-400" size={30} />
          </div>

          <p className="text-green-400 text-sm mt-3">
            ▲ 12% from last month
          </p>
        </div>

        <div className="bg-[#0F172A] rounded-xl p-4 border border-slate-700">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400 text-sm">High Risk Cases</p>
              <h3 className="text-3xl font-bold mt-1">148</h3>
            </div>

            <AlertTriangle className="text-red-400" size={30} />
          </div>

          <p className="text-red-400 text-sm mt-3">
            ▲ Immediate attention required
          </p>
        </div>

        <div className="bg-[#0F172A] rounded-xl p-4 border border-slate-700">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400 text-sm">Detection Rate</p>
              <h3 className="text-3xl font-bold mt-1">92%</h3>
            </div>

            <TrendingUp className="text-green-400" size={30} />
          </div>

          <p className="text-green-400 text-sm mt-3">
            AI Accuracy Improved
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid xl:grid-cols-2 gap-6">
        {/* Crime Categories */}
        <div className="bg-[#0F172A] border border-slate-700 rounded-xl p-5">
          <h3 className="font-semibold mb-4">
            Top Crime Categories
          </h3>

          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={crimeData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#1E293B"
              />

              <XAxis dataKey="name" stroke="#94A3B8" />

              <YAxis stroke="#94A3B8" />

              <Tooltip
                contentStyle={{
                  background: "#08111F",
                  border: "1px solid #334155",
                  borderRadius: "10px",
                }}
              />

              <Bar dataKey="cases" radius={[8, 8, 0, 0]}>
                {crimeData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Case Resolution */}
        <div className="bg-[#0F172A] border border-slate-700 rounded-xl p-5">
          <h3 className="font-semibold mb-4">
            Case Resolution
          </h3>

          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={pieData}
                innerRadius={70}
                outerRadius={100}
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={["#22C55E", "#EF4444"][index]}
                  />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{
                  background: "#08111F",
                  border: "1px solid #334155",
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          <div className="flex justify-center gap-6 mt-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              Solved
            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              Pending
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Trend */}
      <div className="mt-6 bg-[#0F172A] border border-slate-700 rounded-xl p-5">
        <h3 className="font-semibold mb-4">
          Monthly Crime Trend
        </h3>

        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={monthlyData}>
            <defs>
              <linearGradient
                id="crimeGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#06B6D4"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="#06B6D4"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#1E293B"
            />

            <XAxis dataKey="month" stroke="#94A3B8" />

            <YAxis stroke="#94A3B8" />

            <Tooltip
              contentStyle={{
                background: "#08111F",
                border: "1px solid #334155",
              }}
            />

            <Area
              type="monotone"
              dataKey="cases"
              stroke="#06B6D4"
              fill="url(#crimeGradient)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* AI Insights */}
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="bg-blue-900/20 border border-blue-700 rounded-xl p-4">
          <h4 className="font-semibold text-blue-300">
            Cyber Crime Rising
          </h4>

          <p className="text-sm text-slate-300 mt-2">
            AI detected a 23% increase in phishing-related incidents
            during the last two weeks.
          </p>
        </div>

        <div className="bg-red-900/20 border border-red-700 rounded-xl p-4">
          <h4 className="font-semibold text-red-300">
            High Risk Zone
          </h4>

          <p className="text-sm text-slate-300 mt-2">
            Bengaluru Central shows the highest concentration of
            organized crime activity.
          </p>
        </div>

        <div className="bg-green-900/20 border border-green-700 rounded-xl p-4">
          <h4 className="font-semibold text-green-300">
            Patrol Recommendation
          </h4>

          <p className="text-sm text-slate-300 mt-2">
            Increase patrol frequency between 8 PM and 11 PM in
            identified hotspots.
          </p>
        </div>
      </div>
    </div>
  );
}