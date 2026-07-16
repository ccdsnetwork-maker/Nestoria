"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";


interface SearchSelectProps {
  label: string;
  options: string[];
  disabled?: boolean;
  onSelect?: (value: string) => void;
}


export default function SearchSelect({
  label,
  options,
  disabled = false,
  onSelect,
}: SearchSelectProps) {


  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);



  const safeOptions = options.filter(
    (item): item is string =>
      typeof item === "string"
  );



  const filtered = safeOptions.filter((item) =>
    item.toLowerCase().includes(
      value.toLowerCase()
    )
  );



  function choose(item: string) {

    setValue(item);

    setOpen(false);

    onSelect?.(item);

  }



  return (

    <div className="relative">


      <div className="relative">


        <input
          value={value}

          disabled={disabled}

          onChange={(e) => {
            setValue(e.target.value);
            setOpen(true);
          }}

          onFocus={() => {
            if (!disabled) {
              setOpen(true);
            }
          }}

          placeholder={
            disabled
              ? `Select previous option first`
              : `Search ${label}`
          }

          className="w-full rounded-lg border p-3 pr-10 text-sm outline-none disabled:bg-gray-100"

        />


        <ChevronDown
          size={18}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
        />


      </div>



      {open && !disabled && (

        <div className="absolute z-50 mt-1 max-h-52 w-full overflow-y-auto rounded-lg border bg-white shadow">


          {filtered.length > 0 ? (

            filtered.map((item) => (

              <button
                key={item}
                type="button"
                onClick={() => choose(item)}
                className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
              >
                {item}
              </button>

            ))

          ) : (

            <p className="px-4 py-3 text-sm text-gray-500">
              No results found
            </p>

          )}


        </div>

      )}


    </div>

  );

}
