import { MapPin, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";

const cityData = [
  {
    city: "Bengaluru",
    risk: 96,
    incidents: 482,
    solved: 89,
    trend: "up",
    level: "Critical",
  },
  {
    city: "Mangaluru",
    risk: 88,
    incidents: 241,
    solved: 92,
    trend: "up",
    level: "High",
  },
  {
    city: "Belagavi",
    risk: 72,
    incidents: 167,
    solved: 84,
    trend: "down",
    level: "Moderate",
  },
  {
    city: "Mysuru",
    risk: 58,
    incidents: 124,
    solved: 95,
    trend: "down",
    level: "Low",
  },
];

const levelStyle = {
  Critical: {
    badge: "bg-red-900/40 text-red-300 border-red-700",
    bar: "bg-red-500",
  },
  High: {
    badge: "bg-orange-900/40 text-orange-300 border-orange-700",
    bar: "bg-orange-500",
  },
  Moderate: {
    badge: "bg-yellow-900/40 text-yellow-300 border-yellow-700",
    bar: "bg-yellow-500",
  },
  Low: {
    badge: "bg-green-900/40 text-green-300 border-green-700",
    bar: "bg-green-500",
  },
};

export default function CityRisk() {
  return (
    <div className="bg-[#08111F] border border-slate-800 rounded-2xl p-5 shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-3">
          <MapPin className="text-cyan-400" size={24} />
          <div>
            <h2 className="text-xl font-bold">City Risk Analysis</h2>
            <p className="text-xs text-slate-400">
              AI-powered threat assessment
            </p>
          </div>
        </div>

        <span className="bg-cyan-900/30 border border-cyan-700 text-cyan-300 px-3 py-1 rounded-full text-xs">
          Live
        </span>
      </div>

      {/* Cities */}
      <div className="space-y-4">
        {cityData.map((city) => (
          <div
            key={city.city}
            className="bg-[#0F172A] border border-slate-700 rounded-xl p-4 hover:border-cyan-500 transition-all"
          >
            {/* Top */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg">{city.city}</h3>
                <p className="text-xs text-slate-400">
                  {city.incidents} incidents reported
                </p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs border ${levelStyle[city.level].badge}`}
              >
                {city.level}
              </span>
            </div>

            {/* Risk Score */}
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Risk Score</span>
                <span className="font-semibold">{city.risk}%</span>
              </div>

              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full ${levelStyle[city.level].bar}`}
                  style={{ width: `${city.risk}%` }}
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-[#08111F] rounded-lg p-3 border border-slate-700">
                <p className="text-xs text-slate-400">Cases Solved</p>
                <h4 className="font-bold text-green-400">
                  {city.solved}%
                </h4>
              </div>

              <div className="bg-[#08111F] rounded-lg p-3 border border-slate-700">
                <p className="text-xs text-slate-400">Trend</p>

                <div className="flex items-center gap-1 mt-1">
                  {city.trend === "up" ? (
                    <>
                      <TrendingUp size={16} className="text-red-400" />
                      <span className="text-red-400 text-sm">Increasing</span>
                    </>
                  ) : (
                    <>
                      <TrendingDown size={16} className="text-green-400" />
                      <span className="text-green-400 text-sm">Decreasing</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Action */}
            <button className="w-full mt-4 bg-cyan-600 hover:bg-cyan-500 transition py-2 rounded-lg text-sm font-medium">
              View Intelligence Report
            </button>
          </div>
        ))}
      </div>

      {/* AI Recommendation */}
      <div className="mt-5 bg-red-900/20 border border-red-700 rounded-xl p-4">
        <div className="flex gap-2 items-center">
          <AlertTriangle className="text-red-400" size={20} />
          <h3 className="font-semibold text-red-300">
            AI Recommendation
          </h3>
        </div>

        <p className="text-sm text-slate-300 mt-2 leading-relaxed">
          Increase patrol deployment in **Bengaluru Central** and
          monitor financial transactions linked to high-risk suspects
          during the next **48 hours**.
        </p>
      </div>
    </div>
  );
}