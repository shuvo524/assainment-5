import type { Technology } from "../types";

interface TechCardProps {
  tech: Technology;
  isAdded: boolean;
  onAdd: (tech: Technology) => void;
}

const colorMap: Record<string, string> = {
  sky: "bg-sky-50 text-sky-600",
  green: "bg-green-50 text-green-600",
  blue: "bg-blue-50 text-blue-600",
  gray: "bg-gray-100 text-gray-600",
  cyan: "bg-cyan-50 text-cyan-600",
  orange: "bg-orange-50 text-orange-600",
  yellow: "bg-yellow-50 text-yellow-700",
  red: "bg-red-50 text-red-600",
};

function TechCard({ tech, isAdded, onAdd }: TechCardProps) {
  return (
    <div className="border border-gray-100 shadow-sm rounded-xl p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
        <span className={`${colorMap[tech.badgeColor]} px-3 py-1 rounded-full text-xs`}>
          {tech.badge}
        </span>
      </div>

      <h3 className="text-lg font-bold">{tech.name}</h3>
      <p className="text-gray-500 text-sm">{tech.description}</p>

      <div className="flex items-center justify-between text-sm">
        <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
          {tech.category}
        </span>
        <span className="text-gray-500">{tech.difficulty}</span>
        <span className="flex items-center gap-1">⭐ {tech.rating}</span>
      </div>

      <button
        className="btn btn-neutral"
        disabled={isAdded}
        onClick={() => onAdd(tech)}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechCard;