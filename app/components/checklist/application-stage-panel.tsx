import type { KeyboardEvent, PointerEvent } from "react";

import type { ApplicationStage } from "./application-checklist-data";
import { ApplicationFormGuide } from "./application-form-guide";
import { ChecklistProgressCard } from "./checklist-progress-card";
import type { StageScheduleStatus } from "./stage-schedule";
import { StageControls } from "./stage-controls";

type ApplicationStagePanelProps = {
  completedItems: string[];
  isFirstStage: boolean;
  isLastStage: boolean;
  onKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
  onNextStage: () => void;
  onPointerDown: (event: PointerEvent<HTMLElement>) => void;
  onPointerUp: (event: PointerEvent<HTMLElement>) => void;
  onPreviousStage: () => void;
  onToggleItem: (itemId: string) => void;
  scheduleStatus?: StageScheduleStatus;
  stage: ApplicationStage;
};

export function ApplicationStagePanel({
  completedItems,
  isFirstStage,
  isLastStage,
  onKeyDown,
  onNextStage,
  onPointerDown,
  onPointerUp,
  onPreviousStage,
  onToggleItem,
  scheduleStatus,
  stage,
}: ApplicationStagePanelProps): React.JSX.Element {
  return (
    <article
      aria-labelledby={`${stage.id}-tab`}
      className="mt-5 rounded-[20px] bg-transparent animate-[slide-in_280ms_ease-out_both]"
      id={`${stage.id}-panel`}
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      role="tabpanel"
      tabIndex={0}
    >
      <div className="flex items-start justify-between gap-5 px-0.5">
        <div className="min-w-0">
          <p className="max-w-[335px] text-[13px] leading-[1.65] text-black/70">
            {stage.description}
          </p>
        </div>
        <aside className="w-[130px] shrink-0 text-right">
          <span className="block text-[14px] leading-[1.35] font-bold text-black/75">
            {stage.dateLabel}
          </span>
          <strong
            className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-[12px] font-extrabold whitespace-nowrap ${scheduleStatus?.isPast ? "bg-[#BCBEC0]/35 text-black/60" : "bg-[#922D2E]/10 text-[#922D2E]"}`}
          >
            {scheduleStatus?.message ?? "Upcoming"}
          </strong>
        </aside>
      </div>

      <ChecklistProgressCard
        completedItems={completedItems}
        onToggleItem={onToggleItem}
        stage={stage}
      />

      {stage.id === "application-form" ? <ApplicationFormGuide /> : null}

      <StageControls
        onNext={onNextStage}
        onPrevious={onPreviousStage}
        showNext={!isLastStage}
        showPrevious={!isFirstStage}
      />
    </article>
  );
}
