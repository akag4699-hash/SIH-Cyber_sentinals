const data = [
  { title: "Active Cases", value: "128" },
  { title: "High Risk", value: "24" },
  { title: "Suspects", value: "510" },
  { title: "Alerts", value: "16" }
];

export default function KPICards() {
  return (
    <div className="grid grid-cols-4 gap-5">
      {data.map((item) => (
        <div
          key={item.title}
          className="card p-6 text-center"
        >
          <p className="text-sm text-gray-300">{item.title}</p>
          <h2 className="text-4xl font-bold mt-2">{item.value}</h2>
        </div>
      ))}
    </div>
  );
}