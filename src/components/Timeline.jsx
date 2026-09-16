const events = [
  { time: "10:30", event: "Phone Call" },
  { time: "11:15", event: "Money Transfer" },
  { time: "14:00", event: "Meeting Detected" }
];

function Timeline() {
  return (
    <div className="bg-slate-800 p-5 rounded-xl">
      <h2 className="text-xl mb-5">Timeline</h2>

      {events.map((item, index) => (
        <div key={index} className="mb-4">
          <p className="text-blue-400">{item.time}</p>
          <p>{item.event}</p>
        </div>
      ))}
    </div>
  );
}

export default Timeline;