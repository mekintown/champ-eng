"use client";

import { useMemo, useState } from "react";
import { FaCircleInfo } from "react-icons/fa6";

import { IndustryFilter } from "./industry-filter";
import { MentorCard } from "./mentor-card";
import { MentorCohortTabs, type MentorCohort } from "./mentor-cohort-tabs";
import {
  currentProgramYear,
  filterMentors,
  mentors,
  sortMentorsByLatestYear,
  type MentorIndustry,
} from "./mentors-data";

type MentorsListProps = {
  id: string;
};

export function MentorsList({ id }: MentorsListProps): React.JSX.Element {
  const [cohort, setCohort] = useState<MentorCohort>("current");
  const [selectedIndustries, setSelectedIndustries] = useState<
    MentorIndustry[]
  >([]);

  const visibleMentors = useMemo(() => {
    const matching = filterMentors(mentors, {
      industries: selectedIndustries,
      programYear: cohort === "current" ? currentProgramYear : null,
    });

    // The all-years view spans ChAMP 1-9, so lead with the most recent mentors.
    // The current-year view is already a single cohort and keeps roster order.
    return cohort === "all" ? sortMentorsByLatestYear(matching) : matching;
  }, [cohort, selectedIndustries]);

  function toggleIndustry(industry: MentorIndustry): void {
    setSelectedIndustries((currentIndustries) =>
      currentIndustries.includes(industry)
        ? currentIndustries.filter(
            (selectedIndustry) => selectedIndustry !== industry,
          )
        : [...currentIndustries, industry],
    );
  }

  return (
    <section
      className="bg-[radial-gradient(circle_at_100%_0,rgb(146_45_46_/_8%),transparent_27%),#fff] px-7 pt-[58px] pb-14"
      id={id}
    >
      <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-4">
        <div>
          <p className="mb-2 text-[11px] font-extrabold tracking-[0.11em] text-[#922D2E] uppercase">
            ChAMP Engineering
          </p>
          <h1 className="text-[24px] leading-[1.04] font-bold tracking-[0.035em] sm:text-[30px]">
            Mentors List
          </h1>
        </div>
        <div className="flex flex-col items-start gap-2 sm:items-end">
          <MentorCohortTabs
            activeCohort={cohort}
            onSelectCohort={setCohort}
            programYear={currentProgramYear}
          />
          <IndustryFilter
            onToggleIndustry={toggleIndustry}
            selectedIndustries={selectedIndustries}
          />
        </div>
      </div>

      {cohort === "all" ? (
        <p className="mt-5 flex items-start gap-2 rounded-lg border border-[#BCBEC0]/70 bg-[#FBF6F6] px-3 py-2 text-[12px] leading-[1.6] text-black/65">
          <FaCircleInfo
            aria-hidden="true"
            className="mt-[3px] shrink-0 text-[#9D0512]"
          />
          ข้อมูลของ Ex-mentor อาจไม่อัปเดตเป็นปัจจุบัน
        </p>
      ) : null}

      {visibleMentors.length > 0 ? (
        <ul className="mt-7 grid grid-cols-2 gap-x-4 gap-y-5 min-[480px]:grid-cols-[repeat(auto-fill,minmax(150px,1fr))] sm:gap-x-5 sm:gap-y-6">
          {visibleMentors.map((mentor) => (
            <li className="flex" key={mentor.id}>
              <MentorCard mentor={mentor} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-7 rounded-[14px] border border-[#BCBEC0] bg-white p-6 text-center text-xs font-semibold text-black/60">
          No mentors match this filter yet. Try another industry.
        </p>
      )}
    </section>
  );
}
