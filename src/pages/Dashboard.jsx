import {
  ShieldCheck,
  Activity,
  Radar,
  Clock3,
} from "lucide-react";

import KPICards from "../components/KPICards";
import CrimeChart from "../components/CrimeChart";
import AIAlert from "../components/AIAlert";
import NetworkGraph from "../components/NetworkGraph";
import CityRisk from "../components/CityRisk";
import RecentCases from "../components/RecentCases";
import Timeline from "../components/Timeline";
import NotificationPanel from "../components/NotificationPanel";

import { dashboardStats } from "../data/crimeData";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-8 bg-[#020817] min-h-screen">

      {/* Hero Banner */}

      <div className="rounded-3xl bg-gradient-to-r from-[#08111F] via-[#0B1A2E] to-[#102A43] border border-slate-700 p-8">

        <div className="flex flex-col lg:flex-row justify-between gap-8">

          <div>

            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-cyan-400" size={34}/>
              <h1 className="text-4xl font-bold">
                AI Intelligence Command Center
              </h1>
            </div>

            <p className="text-slate-300 max-w-2xl">
              AI-Powered Criminal Network Analysis System for SIH 2026.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">

              <Badge
                icon={<Activity size={16}/>}
                text="Live Monitoring"
              />

              <Badge
                icon={<Radar size={16}/>}
                text="AI Engine Active"
              />

              <Badge
                icon={<Clock3 size={16}/>}
                text="24×7 Surveillance"
              />

            </div>

          </div>

          {/* Today's Operations */}

          <div className="bg-[#08111F] border border-slate-700 rounded-2xl p-5 w-full lg:w-80">

            <h2 className="font-semibold mb-5">
              Today's Operations
            </h2>

            <Operation
              label="Active Cases"
              value={dashboardStats.activeCases}
            />

            <Operation
              label="High Risk Alerts"
              value={dashboardStats.highRisk}
            />

            <Operation
              label="Live Surveillance"
              value={dashboardStats.liveSurveillance}
            />

            <Operation
              label="AI Accuracy"
              value={`${dashboardStats.aiAccuracy}%`}
            />

          </div>

        </div>

      </div>

      {/* KPI Cards */}

      <KPICards />

      {/* Charts */}

      <div className="grid xl:grid-cols-3 gap-6">

        <div className="xl:col-span-2">
          <CrimeChart />
          <RecentCases />
        </div>

        <div className="space-y-6">
          <CityRisk />
          <Timeline />
        </div>

      </div>

      {/* AI Alert */}

      <AIAlert />

      {/* Criminal Network */}

      <NetworkGraph />

      {/* Bottom */}

      <div className="grid xl:grid-cols-2 gap-6">

        <NotificationPanel />

        <div className="bg-[#08111F] border border-slate-700 rounded-2xl p-6">

          <h2 className="text-xl font-bold text-cyan-400 mb-5">
            Quick Access
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <Quick title="FIR Management"/>

            <Quick title="Case Management"/>

            <Quick title="Evidence Vault"/>

            <Quick title="Criminal Network"/>

            <Quick title="Heat Map"/>

            <Quick title="Officer Performance"/>

            <Quick title="AI Reports"/>

            <Quick title="Settings"/>

          </div>

        </div>

      </div>

      {/* Footer */}

      <footer className="border-t border-slate-800 pt-6 flex justify-between flex-wrap gap-3 text-sm text-slate-400">

        <span>KSP AI Portal • SIH 2026</span>

        <span>AI Model v3.2 • Operational</span>

      </footer>

    </div>
  );
}

/* ---------- Small Components ---------- */

function Badge({ icon, text }) {
  return (
    <div className="flex items-center gap-2 bg-cyan-900/20 border border-cyan-700 text-cyan-300 px-4 py-2 rounded-full">
      {icon}
      {text}
    </div>
  );
}

function Operation({ label, value }) {
  return (
    <div className="flex justify-between bg-[#0F172A] border border-slate-700 rounded-lg p-3 mb-3">
      <span className="text-slate-400">{label}</span>
      <span className="font-bold text-cyan-400">{value}</span>
    </div>
  );
}

function Quick({ title }) {
  return (
    <button className="bg-[#0F172A] border border-slate-700 hover:border-cyan-500 rounded-xl p-4 text-left transition">
      {title}
    </button>
  );
}