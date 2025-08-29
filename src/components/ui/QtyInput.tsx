// src/components/ui/QtyInput.tsx
export default function QtyInput({
  value,
  onChange,
  min = 1,
}: {
  value: number;
  onChange: (n: number) => void;
  min?: number;
}) {
  return (
    <div className="inline-flex items-center rounded-xl border bg-white/70">
      <button
        className="px-3 py-2 text-gray-600 hover:text-gray-900"
        onClick={() => onChange(Math.max(min, value - 1))}
      >
        −
      </button>
      <input
        type="number"
        min={min}
        value={value}
        onChange={(e) => onChange(Math.max(min, Number(e.target.value) || min))}
        className="w-14 px-2 py-2 text-center outline-none bg-transparent"
      />
      <button
        className="px-3 py-2 text-gray-600 hover:text-gray-900"
        onClick={() => onChange(value + 1)}
      >
        +
      </button>
    </div>
  );
}
