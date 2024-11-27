
import Panel0 from "./components/panel0";
import Panel1 from "./components/panel1";
import Panel2 from "./components/panel2";
import Panel3 from "./components/panel3";

// # this is branch main2

export default function Dashboard() {
  return (
    <div className="h-screen ml-[2vw] mr-[2vw]">
      <h1 className="h-[3vh]">Dashboardxyz</h1>
      <div className="grid grid-cols-2 gap-4 h-[90vh] w-full">
        <div className="rounded-xl overflow-clip border-4 border-gray-400 h-[45vh]">
        <Panel0 />
        </div>
        <div className="rounded-xl overflow-clip border-4 border-gray-400 h-[45vh]">
        <Panel1 />
        </div>
        <div className="rounded-xl overflow-clip border-4 border-gray-400 h-[45vh]">
        <Panel2 />
        </div>
        <div className="rounded-xl overflow-clip border-4 border-gray-400 h-[45vh]">
        <Panel3 />
        </div>
        </div>
    </div>
  );
}
    