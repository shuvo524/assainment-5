import type { Technology } from "../types";

interface StackItemProps {
  tech: Technology;
  onRemove: (id: string) => void;
}

function StackItem({ tech, onRemove }: StackItemProps) {
  return (
    <div className="flex items-center justify-between border rounded-lg p-3">
      <div className="flex items-center gap-3">
        <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
        <div>
          <p className="font-medium">{tech.name}</p>
          <p className="text-gray-400 text-xs">{tech.category}</p>
        </div>
      </div>

      <button onClick={() => onRemove(tech.id)} className="text-gray-400 cursor-pointer">
        ✕
      </button>
    </div>
  );
}

export default StackItem;