import { Search, Bell, Settings, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

export default function Topbar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="h-20 bg-[#08111F] border-b border-slate-800 px-6 flex items-center justify-between shadow-lg">
      {/* Search */}
      <div className="relative w-full max-w-xl">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          placeholder="Global Search (Crime No, FIR, Accused, Officer...)"
          className="w-full bg-[#020817] border border-slate-700 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5 ml-6">
        {/* Live Time */}
        <div className="hidden lg:block text-right">
          <p className="text-sm font-medium">
            {time.toLocaleDateString("en-IN")}
          </p>
          <p className="text-xs text-slate-400">
            {time.toLocaleTimeString("en-IN")}
          </p>
        </div>

        {/* System Status */}
        <div className="hidden md:flex items-center gap-2 bg-green-900/30 border border-green-700 px-3 py-2 rounded-full">
          <ShieldCheck size={16} className="text-green-400" />
          <span className="text-green-300 text-sm">Operational</span>
        </div>

        {/* Notification */}
        <button className="relative p-2 rounded-lg hover:bg-slate-800 transition">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 rounded-full text-[10px] flex items-center justify-center font-bold">
            7
          </span>
        </button>

        {/* Settings */}
        <button className="p-2 rounded-lg hover:bg-slate-800 transition">
          <Settings size={20} />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 border-l border-slate-700 pl-4">
          <div className="w-11 h-11 rounded-full bg-blue-700 flex items-center justify-center font-bold shadow-lg">
            GO
          </div>

          <div className="hidden sm:block">
            <h3 className="text-sm font-semibold">Gov Officer</h3>
            <p className="text-xs text-slate-400">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}