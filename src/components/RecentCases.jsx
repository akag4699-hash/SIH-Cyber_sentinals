const cases = [
  ["100030018202600046","Under Investigation"],
  ["300010007202600037","Under Investigation"],
  ["200040020202600069","Charge Sheeted"],
  ["100040023202600025","Under Investigation"],
  ["100050027202600034","Charge Sheeted"]
];

export default function RecentCases(){
  return(
    <div className="bg-[#08111f] border border-slate-800 rounded-xl p-5">
      <div className="flex justify-between mb-4">
        <h2 className="font-semibold">
          RECENT CASES
        </h2>

        <span className="text-cyan-400 text-xs cursor-pointer">
          VIEW ALL →
        </span>
      </div>

      {cases.map((c,i)=>(
        <div key={i} className="border-b border-slate-800 py-3 last:border-none">
          <h3 className="text-sm font-semibold">
            FIR No: {c[0]}
          </h3>

          <p className="text-xs text-slate-400">
            Cyber Crime · Karnataka PS
          </p>

          <span className="inline-block mt-2 bg-blue-900 text-blue-300 px-2 py-1 rounded text-xs">
            {c[1]}
          </span>
        </div>
      ))}
    </div>
  );
}