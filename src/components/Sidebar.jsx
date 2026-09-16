import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  Activity,
  Shield,
  FolderKanban,
  Archive,
  Users,
  UserRound,
  Network,
  Siren,
  ScanFace,
  Car,
  Phone,
  Landmark,
  Globe,
  Map,
  Clock3,
  Brain,
  BarChart3,
  Route,
  Radio,
  FileText,
  ClipboardList,
  Bell,
  Bot,
  Settings,
  CircleHelp,
} from "lucide-react";

const menuSections = [
  {
    title: "MAIN",
    items: [
      { icon: LayoutDashboard, label: "Executive Dashboard", active: true },
      { icon: Activity, label: "Live Monitoring" },
      { icon: Shield, label: "Command Center" },
    ],
  },
  {
    title: "INVESTIGATION",
    items: [
      { icon: FolderKanban, label: "FIR Management" },
      { icon: Archive, label: "Case Management" },
      { icon: ClipboardList, label: "Evidence Vault" },
      { icon: Users, label: "Suspect Profiles" },
      { icon: UserRound, label: "Victim Profiles" },
      { icon: Users, label: "Witness Records" },
    ],
  },
  {
    title: "INTELLIGENCE",
    items: [
      { icon: Network, label: "Criminal Network" },
      { icon: Siren, label: "AI Alerts", badge: 12 },
      { icon: ScanFace, label: "Facial Recognition" },
      { icon: Car, label: "Vehicle Tracking" },
      { icon: Phone, label: "Call Analysis" },
      { icon: Landmark, label: "Financial Intelligence" },
      { icon: Globe, label: "Social Media Intelligence" },
    ],
  },
  {
    title: "ANALYTICS",
    items: [
      { icon: BarChart3, label: "Crime Analytics" },
      { icon: Map, label: "Heat Map" },
      { icon: Clock3, label: "Timeline Analysis" },
      { icon: Brain, label: "Predictive Crime" },
    ],
  },
  {
    title: "OPERATIONS",
    items: [
      { icon: Route, label: "Patrol Management" },
      { icon: Radio, label: "Incident Response" },
      { icon: Shield, label: "Officer Performance" },
    ],
  },
  {
    title: "REPORTS",
    items: [
      { icon: FileText, label: "AI Reports" },
      { icon: ClipboardList, label: "Crime Statistics" },
      { icon: Archive, label: "Export PDF" },
    ],
  },
  {
    title: "SYSTEM",
    items: [
      { icon: Bell, label: "Notifications", badge: 5 },
      { icon: Bot, label: "AI Assistant" },
      { icon: Settings, label: "Settings" },
      { icon: CircleHelp, label: "Help Center" },
    ],
  },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [openSections, setOpenSections] = useState({
    MAIN: true,
    INVESTIGATION: true,
    INTELLIGENCE: true,
    ANALYTICS: false,
    OPERATIONS: false,
    REPORTS: false,
    SYSTEM: true,
  });

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-72"
      } h-screen bg-[#07111F] border-r border-slate-800 flex flex-col transition-all duration-300`}
    >
      {/* Header */}
      <div className="p-5 border-b border-slate-800">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div>
              <h1 className="text-lg font-bold text-orange-400">
                KSP AI-PORTAL
              </h1>
              <p className="text-xs text-cyan-400">
                Intelligence Center
              </p>
            </div>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-slate-800"
          >
            <ChevronRight
              size={20}
              className={`transition-transform ${
                collapsed ? "" : "rotate-180"
              }`}
            />
          </button>
        </div>

        {!collapsed && (
          <div className="mt-4 bg-green-900/20 border border-green-700 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-sm text-green-300">
                Live Monitoring Active
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Search */}
      {!collapsed && (
        <div className="p-4">
          <input
            placeholder="Search menu..."
            className="w-full bg-[#0F172A] border border-slate-700 rounded-lg px-3 py-2 text-sm outline-none focus:border-cyan-500"
          />
        </div>
      )}

      {/* Menu */}
      <div className="flex-1 overflow-y-auto px-2">
        {menuSections.map((section) => (
          <div key={section.title} className="mb-3">
            {!collapsed ? (
              <>
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                >
                  {section.title}
                  {openSections[section.title] ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </button>

                {openSections[section.title] && (
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <button
                        key={item.label}
                        className={`w-full flex items-center justify-between px-3 py-3 rounded-lg transition ${
                          item.active
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                            : "text-slate-300 hover:bg-slate-800"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon size={18} />
                          <span className="text-sm">
                            {item.label}
                          </span>
                        </div>

                        {item.badge && (
                          <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="space-y-2">
                {section.items.map((item) => (
                  <button
                    key={item.label}
                    className={`w-full flex justify-center p-3 rounded-lg ${
                      item.active
                        ? "bg-blue-600"
                        : "hover:bg-slate-800 text-slate-300"
                    }`}
                    title={item.label}
                  >
                    <item.icon size={20} />
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 p-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-blue-700 flex items-center justify-center font-bold">
            GO
          </div>

          {!collapsed && (
            <div>
              <h3 className="font-semibold text-sm">
                Gov Officer
              </h3>
              <p className="text-xs text-slate-400">
                Clearance Level: Administrator
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}