"use client";

interface SearchSelectProps {
  label: string;
  options: string[];
}

export default function SearchSelect({
  label,
  options,
}: SearchSelectProps) {

  return (
    <div>

      <input
        list={label}
        placeholder={`Search ${label}`}
        className="w-full rounded-lg border p-3 text-sm outline-none"
      />

      <datalist id={label}>
        {options.map((option) => (
          <option
            key={option}
            value={option}
          />
        ))}
      </datalist>

    </div>
  );
}
