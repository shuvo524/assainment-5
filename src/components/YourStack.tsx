import type { Technology } from "../types";
import StackItem from "./StackItem";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

function YourStack({ stack, onRemove, onRemoveAll }: YourStackProps) {
  return (
    <div className="border rounded-xl p-5 h-fit">
      <h3 className="text-lg font-bold">Your Stack</h3>

      {stack.length === 0 ? (
        <>
          <p className="text-gray-400 text-sm">No technologies selected yet.</p>
          <div className="border border-dashed rounded-lg p-8 text-center text-gray-400 text-sm mt-4">
            Your stack is empty.
          </div>
        </>
      ) : (
        <>
          <p className="text-gray-400 text-sm">
            {stack.length} Technology Selected
          </p>

          <div className="flex flex-col gap-3 mt-4">
            {stack.map((tech) => (
              <StackItem key={tech.id} tech={tech} onRemove={onRemove} />
            ))}
          </div>

          <button
            className="btn btn-outline btn-error w-full mt-4"
            onClick={onRemoveAll}
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
}

export default YourStack;