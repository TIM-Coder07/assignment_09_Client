import { Label } from "@heroui/react";

export function Filter({ value, onChange }) {
  return (
    <div className="flex gap-4 items-center">
      
      {/* FROM */}
      <div className="flex flex-col">
        <Label>From</Label>
        <input
          type="date"
          className="border p-2 rounded"
          value={value?.startDate || ""}
          onChange={(e) =>
            onChange({
              ...value,
              startDate: e.target.value,
            })
          }
        />
      </div>

      {/* TO */}
      <div className="flex flex-col">
        <Label>To</Label>
        <input
          type="date"
          className="border p-2 rounded"
          value={value?.endDate || ""}
          onChange={(e) =>
            onChange({
              ...value,
              endDate: e.target.value,
            })
          }
        />
      </div>

    </div>
  );
}