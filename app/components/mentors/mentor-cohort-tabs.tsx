export type MentorCohort = "current" | "all";

type MentorCohortTabsProps = {
  activeCohort: MentorCohort;
  onSelectCohort: (cohort: MentorCohort) => void;
  programYear: number;
};

export function MentorCohortTabs({
  activeCohort,
  onSelectCohort,
  programYear,
}: MentorCohortTabsProps): React.JSX.Element {
  const cohorts: { id: MentorCohort; label: string }[] = [
    { id: "current", label: "This year's mentors" },
    { id: "all", label: "All mentors" },
  ];

  return (
    <div
      aria-label={`Mentor cohort, program year ${programYear}`}
      className="inline-flex overflow-hidden rounded-md border border-[#922D2E] bg-white"
      role="group"
    >
      {cohorts.map((cohort, index) => {
        const isActive = cohort.id === activeCohort;

        return (
          <button
            aria-pressed={isActive}
            className={`px-2 py-1.5 text-[8px] font-bold whitespace-nowrap transition-colors sm:text-[9px] ${index > 0 ? "border-l border-[#BCBEC0]" : ""} ${isActive ? "bg-[#F6DADA] text-[#922D2E]" : "text-black/45 hover:text-black/70"}`}
            key={cohort.id}
            onClick={() => onSelectCohort(cohort.id)}
            type="button"
          >
            {cohort.label}
          </button>
        );
      })}
    </div>
  );
}
