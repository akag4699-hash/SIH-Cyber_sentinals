import { useState } from "react";
import {
  Settings as SettingsIcon,
  User,
  Shield,
  Bell,
  Brain,
  Palette,
  Database,
  Download,
  Save,
  Lock,
  Monitor,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function Settings() {
  const [profile, setProfile] = useState({
    name: "Gov Officer",
    email: "officer@gov.in",
    rank: "Administrator",
  });

  const [notifications, setNotifications] = useState({
    critical: true,
    ai: true,
    reports: false,
    email: true,
  });

  const [security, setSecurity] = useState({
    twoFA: true,
    session: "30",
  });

  const [appearance, setAppearance] = useState("Dark");

  return (
    <div className="bg-[#020817] min-h-screen text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <SettingsIcon className="text-cyan-400" />
            System Settings
          </h1>
          <p className="text-slate-400 mt-1">
            Configure your AI-Powered Criminal Network Analysis System
          </p>
        </div>

        <button className="bg-cyan-600 hover:bg-cyan-500 px-5 py-3 rounded-xl flex items-center gap-2 transition">
          <Save size={18} />
          Save Changes
        </button>
      </div>

      {/* Profile Section */}
      <Section title="Officer Profile" icon={User}>
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            label="Officer Name"
            value={profile.name}
            onChange={(v) => setProfile({ ...profile, name: v })}
          />
          <Input
            label="Email"
            value={profile.email}
            onChange={(v) => setProfile({ ...profile, email: v })}
          />
          <Input
            label="Rank"
            value={profile.rank}
            onChange={(v) => setProfile({ ...profile, rank: v })}
          />
        </div>
      </Section>

      {/* Security */}
      <Section title="Security Settings" icon={Shield}>
        <div className="space-y-4">
          <Toggle
            label="Enable Two-Factor Authentication"
            checked={security.twoFA}
            onChange={() =>
              setSecurity({ ...security, twoFA: !security.twoFA })
            }
          />

          <div>
            <label className="text-sm text-slate-400">
              Session Timeout
            </label>

            <select
              value={security.session}
              onChange={(e) =>
                setSecurity({ ...security, session: e.target.value })
              }
              className="w-full mt-2 bg-[#0F172A] border border-slate-700 rounded-lg p-3"
            >
              <option value="15">15 Minutes</option>
              <option value="30">30 Minutes</option>
              <option value="60">60 Minutes</option>
            </select>
          </div>
        </div>
      </Section>

      {/* Notifications */}
      <Section title="Notification Preferences" icon={Bell}>
        <div className="space-y-3">
          <Toggle
            label="Critical Alerts"
            checked={notifications.critical}
            onChange={() =>
              setNotifications({
                ...notifications,
                critical: !notifications.critical,
              })
            }
          />

          <Toggle
            label="AI Recommendations"
            checked={notifications.ai}
            onChange={() =>
              setNotifications({
                ...notifications,
                ai: !notifications.ai,
              })
            }
          />

          <Toggle
            label="Investigation Reports"
            checked={notifications.reports}
            onChange={() =>
              setNotifications({
                ...notifications,
                reports: !notifications.reports,
              })
            }
          />

          <Toggle
            label="Email Notifications"
            checked={notifications.email}
            onChange={() =>
              setNotifications({
                ...notifications,
                email: !notifications.email,
              })
            }
          />
        </div>
      </Section>

      {/* AI Settings */}
      <Section title="AI Assistant Settings" icon={Brain}>
        <div className="grid md:grid-cols-2 gap-4">
          <SettingCard
            icon={Brain}
            title="AI Confidence Threshold"
            value="90%"
          />

          <SettingCard
            icon={Clock}
            title="Real-Time Analysis"
            value="Enabled"
          />

          <SettingCard
            icon={CheckCircle}
            title="Auto Report Generation"
            value="Enabled"
          />

          <SettingCard
            icon={Lock}
            title="Sensitive Data Protection"
            value="High"
          />
        </div>
      </Section>

      {/* Appearance */}
      <Section title="Dashboard Appearance" icon={Palette}>
        <div className="flex gap-4">
          {["Dark", "Blue", "System"].map((theme) => (
            <button
              key={theme}
              onClick={() => setAppearance(theme)}
              className={`px-4 py-3 rounded-lg transition ${
                appearance === theme
                  ? "bg-cyan-600"
                  : "bg-[#0F172A] hover:bg-slate-800"
              }`}
            >
              {theme}
            </button>
          ))}
        </div>
      </Section>

      {/* System Configuration */}
      <Section title="System Configuration" icon={Monitor}>
        <div className="grid md:grid-cols-3 gap-4">
          <SettingCard
            icon={Database}
            title="Database"
            value="Connected"
          />

          <SettingCard
            icon={Brain}
            title="AI Model"
            value="v3.2"
          />

          <SettingCard
            icon={Monitor}
            title="System Status"
            value="Operational"
          />
        </div>
      </Section>

      {/* Backup */}
      <Section title="Backup & Export" icon={Download}>
        <div className="flex flex-wrap gap-4">
          <button className="bg-cyan-600 hover:bg-cyan-500 px-5 py-3 rounded-lg transition">
            Backup Database
          </button>

          <button className="border border-slate-700 hover:border-cyan-500 px-5 py-3 rounded-lg transition">
            Export Reports
          </button>

          <button className="border border-slate-700 hover:border-cyan-500 px-5 py-3 rounded-lg transition">
            Download Logs
          </button>
        </div>
      </Section>

      {/* Audit Log */}
      <Section title="Recent Audit Activity" icon={Clock}>
        <div className="space-y-3">
          <AuditLog
            time="2 min ago"
            action="AI Report Generated"
            user="Inspector Rao"
          />

          <AuditLog
            time="12 min ago"
            action="Evidence Uploaded"
            user="ACP Sharma"
          />

          <AuditLog
            time="30 min ago"
            action="New FIR Registered"
            user="SI Kumar"
          />

          <AuditLog
            time="1 hr ago"
            action="Criminal Network Updated"
            user="AI System"
          />
        </div>
      </Section>
    </div>
  );
}

/* ---------- Reusable Components ---------- */

function Section({ title, icon: Icon, children }) {
  return (
    <div className="bg-[#08111F] border border-slate-800 rounded-xl p-5 mb-6">
      <h2 className="text-xl font-semibold flex items-center gap-2 mb-5">
        <Icon className="text-cyan-400" size={22} />
        {title}
      </h2>

      {children}
    </div>
  );
}

function Input({ label, value, onChange }) {
  return (
    <div>
      <label className="text-sm text-slate-400">{label}</label>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full mt-2 bg-[#0F172A] border border-slate-700 rounded-lg p-3 outline-none focus:border-cyan-500"
      />
    </div>
  );
}

function Toggle({ label, checked, onChange }) {
  return (
    <div className="flex justify-between items-center bg-[#0F172A] border border-slate-700 rounded-lg p-4">
      <span>{label}</span>

      <button
        onClick={onChange}
        className={`w-12 h-6 rounded-full relative transition ${
          checked ? "bg-cyan-500" : "bg-slate-600"
        }`}
      >
        <span
          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition ${
            checked ? "left-7" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}

function SettingCard({ icon: Icon, title, value }) {
  return (
    <div className="bg-[#0F172A] border border-slate-700 rounded-lg p-4">
      <Icon className="text-cyan-400 mb-3" size={24} />

      <h3 className="font-semibold">{title}</h3>

      <p className="text-slate-400 text-sm mt-1">{value}</p>
    </div>
  );
}

function AuditLog({ time, action, user }) {
  return (
    <div className="bg-[#0F172A] border border-slate-700 rounded-lg p-4 flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{action}</h3>
        <p className="text-sm text-slate-400">{user}</p>
      </div>

      <span className="text-xs text-slate-500">{time}</span>
    </div>
  );
}