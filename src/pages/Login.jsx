import { useState } from "react";
import { Shield, User, Lock, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [officerId, setOfficerId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Demo credentials
    if (officerId === "admin" && password === "1234") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      alert("Invalid Officer ID or Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020817] px-4">

      <div className="w-full max-w-md bg-[#08111F] border border-slate-700 rounded-3xl p-8 shadow-2xl">

        <div className="text-center mb-8">
          <Shield className="mx-auto text-cyan-400" size={60}/>
          <h1 className="text-3xl font-bold text-white mt-4">
            KSP AI Portal
          </h1>
          <p className="text-slate-400 mt-2">
            AI-Powered Criminal Network Analysis System
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">

          <div className="relative">
            <User className="absolute left-4 top-3 text-slate-500"/>
            <input
              type="text"
              placeholder="Officer ID"
              value={officerId}
              onChange={(e)=>setOfficerId(e.target.value)}
              className="w-full pl-12 py-3 rounded-xl bg-[#0F172A] border border-slate-700 text-white"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-3 text-slate-500"/>

            <input
              type={showPassword ? "text":"password"}
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full pl-12 pr-12 py-3 rounded-xl bg-[#0F172A] border border-slate-700 text-white"
            />

            <button
              type="button"
              onClick={()=>setShowPassword(!showPassword)}
              className="absolute right-4 top-3 text-slate-400"
            >
              {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition"
          >
            Secure Login
          </button>

        </form>

        <div className="mt-6 text-center text-sm text-slate-500">
          Demo Login
          <br/>
          Officer ID: **admin**
          <br/>
          Password: **1234**
        </div>

      </div>

    </div>
  );
}