"use client";

import { useRef } from "react";

import { applicationStages } from "./application-checklist-data";
import { ApplicationStagePanel } from "./application-stage-panel";
import { ChecklistSchedule } from "./checklist-schedule";
import { ChecklistStageTabs } from "./checklist-stage-tabs";
import { DressCodePanel } from "./dress-code-panel";
import { useStageScheduleStatuses } from "./stage-schedule";
import { useApplicationChecklist } from "./use-application-checklist";

type ApplicationChecklistProps = {
  id: string;
};

export function ApplicationChecklist({
  id,
}: ApplicationChecklistProps): React.JSX.Element {
  const {
    activeIndex,
    activeStage,
    completedItems,
    handlePointerDown,
    handlePointerUp,
    handleStageNavigationKeyDown,
    selectStage,
    showNextStage,
    showPreviousStage,
    toggleChecklistItem,
  } = useApplicationChecklist();
  const scheduleStatuses = useStageScheduleStatuses(applicationStages);
  const stageViewRef = useRef<HTMLDivElement>(null);

  /**
   * The key dates sit below the stage panel, so bring the panel back into view
   * when a date is picked — otherwise the change happens off-screen.
   */
  function selectStageFromSchedule(index: number): void {
    selectStage(index);
    stageViewRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section
      className="bg-[radial-gradient(circle_at_100%_0,rgb(146_45_46_/_8%),transparent_27%),#fff] px-7 pt-[58px] pb-14"
      id={id}
    >
      <p className="mb-3 text-[11px] font-extrabold tracking-[0.11em] text-[#922D2E] uppercase">
        ChAMP Engineering
      </p>
      <div>
        <h1 className="max-w-[330px] text-[40px] leading-[0.98] font-bold tracking-[0.035em]">
          Application Checklist
        </h1>
        <p className="mt-[17px] inline-flex rounded-full bg-[#922D2E]/10 px-2.5 py-[7px] text-[11px] font-bold text-[#922D2E]">
          {activeStage.dayLabel}
        </p>
      </div>
      <p className="mt-[18px] max-w-[350px] text-[14px] leading-[1.7] text-black/70">
        Explore each stage of the application journey. Swipe or use the tabs to
        see what happens next.
      </p>

      <div ref={stageViewRef} className="scroll-mt-4">
        <ChecklistStageTabs
          activeIndex={activeIndex}
          onKeyDown={handleStageNavigationKeyDown}
          onSelectStage={selectStage}
          stages={applicationStages}
        />

        <ApplicationStagePanel
          completedItems={completedItems}
          isFirstStage={activeIndex === 0}
          isLastStage={activeIndex === applicationStages.length - 1}
          key={activeStage.id}
          onKeyDown={handleStageNavigationKeyDown}
          onNextStage={showNextStage}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPreviousStage={showPreviousStage}
          onToggleItem={toggleChecklistItem}
          scheduleStatus={scheduleStatuses?.[activeStage.id]}
          stage={activeStage}
        />
      </div>

      {activeStage.showDressCode ? <DressCodePanel /> : null}

      <ChecklistSchedule
        activeIndex={activeIndex}
        onSelectStage={selectStageFromSchedule}
        scheduleStatuses={scheduleStatuses}
        stages={applicationStages}
      />
    </section>
  );
}
