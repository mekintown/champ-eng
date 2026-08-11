import type { ApplicationStage } from "./application-checklist-data";
import type { StageScheduleStatus } from "./stage-schedule";

type ChecklistScheduleProps = {
  activeIndex: number;
  onSelectStage: (index: number) => void;
  scheduleStatuses: Record<string, StageScheduleStatus> | null;
  stages: ApplicationStage[];
};

export function ChecklistSchedule({
  activeIndex,
  onSelectStage,
  scheduleStatuses,
  stages,
}: ChecklistScheduleProps): React.JSX.Element {
  return (
    <section aria-label="Application schedule" className="mt-7">
      <div className="mb-2.5 flex items-baseline justify-between">
        <h2 className="text-[12px] font-extrabold">Key dates</h2>
        <p className="text-[10px] font-semibold text-black/50">Bangkok time</p>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {stages.map((stage, index) => {
          const status = scheduleStatuses?.[stage.id];
          const isActive = activeIndex === index;

          return (
            <button
              aria-current={isActive ? "step" : undefined}
              className={`min-w-0 cursor-pointer rounded-xl border p-2 text-left transition-colors ${isActive ? "border-[#922D2E] bg-[#922D2E] text-white shadow-[0_8px_16px_rgb(146_45_46_/_18%)]" : "border-[#BCBEC0]/70 bg-white/70 text-black hover:border-[#922D2E]"}`}
              key={stage.id}
              onClick={() => onSelectStage(index)}
              type="button"
            >
              <span
                className={`block text-[9px] leading-[1.2] font-extrabold ${isActive ? "text-white" : "text-[#922D2E]"}`}
              >
                {stage.label}
              </span>
              <span
                className={`mt-2 block text-[9px] leading-[1.35] font-bold ${isActive ? "text-white/80" : "text-black/65"}`}
              >
                {stage.dateLabel}
              </span>
              <span
                className={`mt-2 block text-[9px] leading-[1.2] font-bold ${isActive ? "text-white" : status?.isPast ? "text-black/45" : "text-[#922D2E]"}`}
              >
                {status?.message ?? "Upcoming"}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
