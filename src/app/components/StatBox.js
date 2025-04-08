
export default function StatBox({ icon, label, value, color = 'gray' }) {
  return (
    <div className={`flex items-center gap-2 bg-${color}-100 text-${color}-700 px-4 py-2 rounded-lg shadow-sm`}>
      <div className="text-xl">{icon}</div>
      <span className="font-medium">
        {label}: {value}
      </span>
    </div>
  );
}
