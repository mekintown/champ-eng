import type { ApplicationStage } from "./application-checklist-data";

type ChecklistProgressCardProps = {
  completedItems: string[];
  onToggleItem: (itemId: string) => void;
  stage: ApplicationStage;
};

export function ChecklistProgressCard({
  completedItems,
  onToggleItem,
  stage,
}: ChecklistProgressCardProps): React.JSX.Element {
  const progressPercent = (completedItems.length / stage.checklist.length) * 100;

  return (
    <div className="mt-[25px] rounded-2xl border border-[#BCBEC0] bg-white p-[18px] shadow-[0_12px_28px_rgb(0_0_0_/_6%)]">
      <div className="flex justify-between text-[11px] font-bold text-black">
        <span>{stage.label}</span>
        <span>
          {completedItems.length} / {stage.checklist.length} done
        </span>
      </div>
      <div
        aria-hidden="true"
        className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-[#BCBEC0]/35"
      >
        <span
          className="block h-full rounded-full bg-[#922D2E] [background-image:linear-gradient(90deg,#922D2E,#000)] transition-[width] duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <ul className="mt-4 grid list-none p-0">
        {stage.checklist.map((item, index) => {
          const inputId = `${stage.id}-${index}`;
          const isComplete = completedItems.includes(item.id);

          return (
            <li className="border-b border-[#BCBEC0]/35 py-3 text-xs last:border-0" key={item.id}>
              <input
                checked={isComplete}
                className="peer sr-only"
                id={inputId}
                onChange={() => onToggleItem(item.id)}
                type="checkbox"
              />
              {/* Outstanding items stay red; completed ones fade to grey. */}
              <label
                className={`grid cursor-pointer grid-cols-[20px_1fr] items-start gap-2.5 leading-[1.55] peer-focus-visible:[&>span:first-child]:ring-2 peer-focus-visible:[&>span:first-child]:ring-[#922D2E] peer-focus-visible:[&>span:first-child]:ring-offset-2 ${isComplete ? "text-black/40" : "font-bold text-[#922D2E]"}`}
                htmlFor={inputId}
              >
                <span
                  aria-hidden="true"
                  className={`grid size-[18px] place-items-center rounded-md border text-[10px] font-extrabold ${isComplete ? "border-[#BCBEC0] bg-[#BCBEC0] text-white" : "border-[#922D2E] bg-white text-transparent"}`}
                >
                  ✓
                </span>
                <span className={isComplete ? "line-through" : undefined}>
                  {item.text}
                </span>
              </label>
              {item.resources ? (
                <div className="mt-2 ml-[30px] flex flex-wrap gap-2">
                  {item.resources.map((resource) => (
                    <a
                      href={resource.href}
                      key={resource.href}
                      rel="noreferrer"
                      target="_blank"
                      className="rounded-full border border-[#922D2E]/35 px-2.5 py-[5px] text-[10px] font-extrabold text-[#922D2E] transition-colors hover:bg-[#922D2E] hover:text-white"
                    >
                      {resource.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
