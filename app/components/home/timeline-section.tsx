import { Reveal } from "../reveal";
import { timelineMilestones } from "./home-content";

const lastIndex = timelineMilestones.length - 1;

export function TimelineSection(): React.JSX.Element {
  return (
    <Reveal>
      <section aria-label="ChAMP timeline" className="px-7 py-10">
        {/* No column gap: the connector halves must meet flush between cells. */}
        <ol className="grid grid-cols-4 grid-rows-[auto_auto_auto]">
          {timelineMilestones.map(
            ({ color, dateLabel, icon: Icon, id, label, step }, index) => (
              <li className="row-span-3 grid grid-rows-subgrid" key={id}>
                <p className="px-1 text-center text-[9px] leading-[1.35] font-extrabold tracking-[0.06em] uppercase sm:px-2 sm:text-[11px]">
                  <span className="block text-[11px] sm:text-[13px]">
                    {step}
                  </span>
                  {label}
                </p>
                <div className="relative flex items-center justify-center py-3.5">
                  {index > 0 ? (
                    <span
                      aria-hidden="true"
                      className="absolute top-1/2 right-1/2 left-0 h-[3px] -translate-y-1/2"
                      style={{ backgroundColor: color }}
                    />
                  ) : null}
                  {index < lastIndex ? (
                    <span
                      aria-hidden="true"
                      className="absolute top-1/2 right-0 left-1/2 h-[3px] -translate-y-1/2"
                      style={{ backgroundColor: color }}
                    />
                  ) : null}
                  <span
                    className="relative grid size-11 place-items-center rounded-full text-base text-white sm:size-16 sm:text-2xl"
                    style={{ backgroundColor: color }}
                  >
                    <Icon aria-hidden="true" />
                  </span>
                </div>
                <p className="px-1 text-center text-[9px] leading-[1.35] font-semibold text-black/70 uppercase sm:px-2 sm:text-[12px]">
                  {dateLabel}
                </p>
              </li>
            ),
          )}
        </ol>
      </section>
    </Reveal>
  );
}
