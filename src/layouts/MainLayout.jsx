import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function MainLayout({ children }) {
  return (
    <div className="flex h-screen bg-[#020817] text-white">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />

        <main className="flex-1 overflow-y-auto bg-[#020817]">
          {children}
        </main>
      </div>
    </div>
  );
}