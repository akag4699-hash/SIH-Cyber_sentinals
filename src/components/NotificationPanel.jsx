import { useState } from "react";
import {
  Bell,
  Siren,
  Brain,
  Shield,
  FileText,
  CheckCircle2,
  Trash2,
  Filter,
  ArrowRight,
} from "lucide-react";

const notificationsData = [
  {
    id: 1,
    title: "High-Risk Criminal Connection Detected",
    message: "AI linked Vikram Singh with three new suspects.",
    category: "Critical",
    time: "2 min ago",
    unread: true,
  },
  {
    id: 2,
    title: "Evidence Uploaded",
    message: "New CCTV footage added to FIR-2026-018.",
    category: "Evidence",
    time: "8 min ago",
    unread: true,
  },
  {
    id: 3,
    title: "AI Prediction Updated",
    message: "Hotspot probability increased for Bengaluru Central.",
    category: "AI",
    time: "15 min ago",
    unread: true,
  },
  {
    id: 4,
    title: "Officer Assigned",
    message: "Inspector Rao assigned to Money Laundering Case.",
    category: "Officer",
    time: "30 min ago",
    unread: false,
  },
  {
    id: 5,
    title: "Financial Link Discovered",
    message: "Bank account connected to multiple FIR records.",
    category: "Critical",
    time: "1 hr ago",
    unread: false,
  },
];

const categoryConfig = {
  Critical: {
    icon: Siren,
    color: "text-red-400",
    bg: "bg-red-900/20 border-red-700",
  },
  AI: {
    icon: Brain,
    color: "text-cyan-400",
    bg: "bg-cyan-900/20 border-cyan-700",
  },
  Officer: {
    icon: Shield,
    color: "text-yellow-400",
    bg: "bg-yellow-900/20 border-yellow-700",
  },
  Evidence: {
    icon: FileText,
    color: "text-green-400",
    bg: "bg-green-900/20 border-green-700",
  },
};

export default function NotificationPanel() {
  const [notifications, setNotifications] = useState(notificationsData);
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? notifications
      : notifications.filter((n) => n.category === filter);

  const unreadCount = notifications.filter((n) => n.unread).length;

  const markRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, unread: false } : n
      )
    );
  };

  const clearAll = () => setNotifications([]);

  return (
    <div className="bg-[#08111F] border border-slate-800 rounded-2xl p-5 shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-3">
          <Bell className="text-cyan-400" size={24} />

          <div>
            <h2 className="text-xl font-bold">
              Notification Center
            </h2>

            <p className="text-xs text-slate-400">
              Live intelligence updates
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="bg-red-900/30 border border-red-700 text-red-300 px-3 py-1 rounded-full text-xs animate-pulse">
            {unreadCount} Unread
          </span>

          <button
            onClick={clearAll}
            className="p-2 hover:bg-slate-800 rounded-lg transition"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-5">
        {["All", "Critical", "AI", "Officer", "Evidence"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-3 py-2 rounded-lg text-sm transition ${
              filter === item
                ? "bg-cyan-600 text-white"
                : "bg-[#0F172A] text-slate-300 hover:bg-slate-800"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Notification List */}
      <div className="space-y-4 max-h-[520px] overflow-y-auto pr-1">
        {filtered.map((notification) => {
          const config = categoryConfig[notification.category];
          const Icon = config.icon;

          return (
            <div
              key={notification.id}
              className={`bg-[#0F172A] border rounded-xl p-4 hover:border-cyan-500 transition ${
                notification.unread
                  ? config.bg
                  : "border-slate-700"
              }`}
            >
              <div className="flex gap-3">
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center ${config.bg}`}
                >
                  <Icon size={22} className={config.color} />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="font-semibold">
                      {notification.title}
                    </h3>

                    {notification.unread && (
                      <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
                    )}
                  </div>

                  <p className="text-sm text-slate-400 mt-1">
                    {notification.message}
                  </p>

                  <div className="flex justify-between items-center mt-3">
                    <span className="text-xs text-slate-500">
                      {notification.time}
                    </span>

                    <div className="flex gap-2">
                      <button className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-1">
                        View
                        <ArrowRight size={15} />
                      </button>

                      {notification.unread && (
                        <button
                          onClick={() => markRead(notification.id)}
                          className="text-green-400 hover:text-green-300 text-sm flex items-center gap-1"
                        >
                          <CheckCircle2 size={15} />
                          Read
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            <Bell size={40} className="mx-auto mb-3 opacity-50" />
            <p>No notifications available.</p>
          </div>
        )}
      </div>

      {/* AI Summary */}
      <div className="mt-6 bg-blue-900/20 border border-blue-700 rounded-xl p-4">
        <div className="flex items-center gap-2">
          <Brain className="text-blue-400" size={20} />
          <h3 className="font-semibold text-blue-300">
            AI Notification Summary
          </h3>
        </div>

        <p className="text-sm text-slate-300 mt-2">
          AI detected **2 critical threats** requiring immediate
          attention and **1 new evidence upload** linked to
          FIR-2026-018.
        </p>
      </div>
    </div>
  );
}