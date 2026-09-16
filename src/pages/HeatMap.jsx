import { useState } from "react";
import {
  MapPin,
  AlertTriangle,
  ShieldAlert,
  Search,
  Brain,
} from "lucide-react";

import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* Fix default marker icons */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

/* Crime Data */

const hotspots = [
  {
    city: "Bengaluru",
    position: [12.9716, 77.5946],
    risk: "Critical",
    cases: 482,
    score: 96,
  },
  {
    city: "Mysuru",
    position: [12.2958, 76.6394],
    risk: "Medium",
    cases: 124,
    score: 58,
  },
  {
    city: "Mangaluru",
    position: [12.9141, 74.856],
    risk: "High",
    cases: 241,
    score: 88,
  },
  {
    city: "Belagavi",
    position: [15.8497, 74.4977],
    risk: "Medium",
    cases: 167,
    score: 72,
  },
  {
    city: "Hubballi",
    position: [15.3647, 75.124],
    risk: "High",
    cases: 203,
    score: 82,
  },
];

const riskColor = {
  Critical: "#EF4444",
  High: "#F97316",
  Medium: "#EAB308",
};

export default function CrimeHeatMap() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = hotspots.filter((item) => {
    const matchRisk =
      filter === "All" || item.risk === filter;

    const matchSearch = item.city
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchRisk && matchSearch;
  });

  return (
    <div className="bg-[#020817] min-h-screen text-white p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <MapPin className="text-cyan-400" />
            Crime Heat Map
          </h1>

          <p className="text-slate-400 mt-1">
            AI-powered geographic crime hotspot visualization
          </p>
        </div>

        <div className="bg-cyan-900/20 border border-cyan-700 px-4 py-2 rounded-xl">
          Live Monitoring Active
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-5 mb-6">
        <Stat title="Hotspots" value="24" color="red" />
        <Stat title="High Risk" value="8" color="orange" />
        <Stat title="Critical Zones" value="3" color="red" />
        <Stat title="AI Accuracy" value="96%" color="green" />
      </div>

      {/* Search & Filter */}
      <div className="bg-[#08111F] border border-slate-800 rounded-xl p-5 mb-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-3 text-slate-500"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search City..."
              className="w-full bg-[#0F172A] border border-slate-700 rounded-lg pl-10 pr-3 py-3 outline-none focus:border-cyan-500"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {["All", "Critical", "High", "Medium"].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-3 py-2 rounded-lg transition ${
                  filter === item
                    ? "bg-cyan-600"
                    : "bg-[#0F172A] hover:bg-slate-800"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="bg-[#08111F] border border-slate-800 rounded-xl overflow-hidden mb-6">
        <MapContainer
          center={[14.5, 75.9]}
          zoom={7}
          style={{ height: "600px", width: "100%" }}
        >
          <TileLayer
            attribution="OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {filtered.map((spot, index) => (
            <CircleMarker
              key={index}
              center={spot.position}
              radius={spot.score / 4}
              pathOptions={{
                color: riskColor[spot.risk],
                fillColor: riskColor[spot.risk],
                fillOpacity: 0.5,
              }}
            >
              <Popup>
                <div className="text-black">
                  <h3 className="font-bold">{spot.city}</h3>

                  <p>Risk: {spot.risk}</p>

                  <p>Cases: {spot.cases}</p>

                  <p>AI Score: {spot.score}%</p>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>

      {/* Legend */}
      <div className="bg-[#08111F] border border-slate-800 rounded-xl p-5 mb-6">
        <h3 className="font-semibold mb-4">Risk Legend</h3>

        <div className="flex flex-wrap gap-6">
          <Legend color="bg-red-500" label="Critical" />
          <Legend color="bg-orange-500" label="High" />
          <Legend color="bg-yellow-500" label="Medium" />
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-blue-900/20 border border-blue-700 rounded-xl p-5">
        <div className="flex items-center gap-2">
          <Brain className="text-blue-400" />

          <h3 className="font-semibold text-blue-300">
            AI Hotspot Analysis
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-5">
          <Insight
            title="Highest Risk"
            text="Bengaluru Central has the highest concentration of organized crime."
          />

          <Insight
            title="Emerging Pattern"
            text="Mangaluru shows increasing financial fraud activity."
          />

          <Insight
            title="Recommendation"
            text="Increase patrol deployment in identified hotspots during peak hours."
          />
        </div>
      </div>
    </div>
  );
}

/* ---------- Components ---------- */

function Stat({ title, value, color }) {
  const colors = {
    red: "from-red-600 to-red-400",
    orange: "from-orange-600 to-yellow-500",
    green: "from-green-600 to-emerald-500",
  };

  return (
    <div className="bg-[#08111F] border border-slate-800 rounded-xl p-5">
      <div
        className={`h-1 rounded-full bg-gradient-to-r ${colors[color]} mb-4`}
      />

      <p className="text-slate-400 text-sm">{title}</p>

      <h2 className="text-3xl font-bold mt-2">{value}</h2>
    </div>
  );
}

function Legend({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`w-4 h-4 rounded-full ${color}`}></span>
      {label}
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