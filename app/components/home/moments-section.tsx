import Image from "next/image";

import { Reveal } from "../reveal";
import { SectionTitle } from "../section-title";
import { pastCohortGalleryUrl, pastCohortMoments } from "./home-content";

export function MomentsSection(): React.JSX.Element {
  return (
    <Reveal>
      <section className="px-7 pb-14">
        <SectionTitle title="Moments from past cohorts" />
        <div className="grid gap-6">
          {pastCohortMoments.map((moment) => (
            <article key={moment.id}>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { src: moment.primaryImage, variant: "attendees" },
                  { src: moment.secondaryImage, variant: "activity" },
                ].map(({ src, variant }) => (
                  <a
                    aria-label={`View ${moment.title} photos in the ChAMP Engineering gallery`}
                    className="group relative block aspect-[4/3] overflow-hidden rounded-[16px] bg-black"
                    href={pastCohortGalleryUrl}
                    key={src}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Image
                      alt={`${moment.title} ${variant}`}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      fill
                      sizes="(max-width: 1024px) 50vw, 480px"
                      src={src}
                    />
                  </a>
                ))}
              </div>
              <div className="mt-2.5 flex items-center gap-2">
                <span className="grid size-[23px] shrink-0 place-items-center rounded-full bg-[#922D2E] text-[9px] font-bold text-white">
                  {moment.order}
                </span>
                <p className="text-[13px] leading-[1.25] font-bold">{moment.title}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
