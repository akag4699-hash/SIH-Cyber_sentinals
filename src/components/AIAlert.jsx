import {
  TriangleAlert,
  ShieldAlert,
  PhoneCall,
  CreditCard,
  MapPin,
  Eye,
} from "lucide-react";

const alerts = [
  {
    id: "AL-001",
    title: "High-Risk Criminal Connection Detected",
    type: "Critical",
    confidence: 98,
    time: "2 min ago",
    location: "Bengaluru",
    icon: ShieldAlert,
    color: "red",
  },
  {
    id: "AL-002",
    title: "Suspicious Money Transfer Pattern",
    type: "High",
    confidence: 94,
    time: "10 min ago",
    location: "Mangaluru",
    icon: CreditCard,
    color: "orange",
  },
  {
    id: "AL-003",
    title: "Frequent Contact Between Suspects",
    type: "Medium",
    confidence: 88,
    time: "22 min ago",
    location: "Mysuru",
    icon: PhoneCall,
    color: "yellow",
  },
  {
    id: "AL-004",
    title: "Location Match Near Crime Scene",
    type: "High",
    confidence: 91,
    time: "35 min ago",
    location: "Belagavi",
    icon: MapPin,
    color: "blue",
  },
];

const badgeColor = {
  red: "bg-red-900/50 text-red-400 border-red-700",
  orange: "bg-orange-900/50 text-orange-400 border-orange-700",
  yellow: "bg-yellow-900/50 text-yellow-400 border-yellow-700",
  blue: "bg-blue-900/50 text-blue-400 border-blue-700",
};

export default function AIAlert() {
  return (
    <div className="bg-[#08111f] border border-slate-800 rounded-xl p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <TriangleAlert className="text-red-400" size={22} />
          <h2 className="text-lg font-semibold">AI ALERT CENTER</h2>
        </div>

        <span className="bg-red-900/40 text-red-300 px-3 py-1 rounded-full text-xs border border-red-700 animate-pulse">
          Live Monitoring
        </span>
      </div>

      {/* Alerts */}
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="bg-[#0F172A] border border-slate-700 rounded-lg p-4 hover:border-cyan-500 transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="flex gap-3">
                <div
                  className={`p-2 rounded-lg ${badgeColor[alert.color]}`}
                >
                  <alert.icon size={22} />
                </div>

                <div>
                  <h3 className="font-semibold">{alert.title}</h3>

                  <p className="text-xs text-slate-400 mt-1">
                    Alert ID: {alert.id}
                  </p>

                  <div className="flex gap-4 mt-2 text-xs text-slate-400">
                    <span>{alert.time}</span>
                    <span>{alert.location}</span>
                  </div>
                </div>
              </div>

              <span
                className={`px-2 py-1 rounded text-xs border ${badgeColor[alert.color]}`}
              >
                {alert.type}
              </span>
            </div>

            {/* Confidence Bar */}
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1">
                <span>AI Confidence</span>
                <span>{alert.confidence}%</span>
              </div>

              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full ${
                    alert.color === "red"
                      ? "bg-red-500"
                      : alert.color === "orange"
                      ? "bg-orange-500"
                      : alert.color === "yellow"
                      ? "bg-yellow-500"
                      : "bg-blue-500"
                  }`}
                  style={{ width: `${alert.confidence}%` }}
                ></div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 mt-4">
              <button className="flex items-center gap-1 px-3 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-sm transition">
                <Eye size={16} />
                View Details
              </button>

              <button className="px-3 py-2 border border-slate-600 hover:border-cyan-500 rounded-lg text-sm transition">
                Assign Officer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}