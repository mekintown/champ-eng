import Image from "next/image";

import {
  defaultMentorPictureFocus,
  mentorPictureFocus,
} from "./mentor-picture-focus";
import type { Mentor } from "./mentors-data";

/** ChAMP CI brand gradient (Figma "CI Element" → brand). */
const cardBackground =
  "bg-[linear-gradient(180deg,#9D0512_0%,#9D0512_44%,#65090C_72%,#0E0000_100%)]";

type MentorCardProps = {
  mentor: Mentor;
};

export function MentorCard({ mentor }: MentorCardProps): React.JSX.Element {
  const hasCompanyLogo = Boolean(mentor.companyLogoUrl);
  const focus = mentorPictureFocus[mentor.id] ?? defaultMentorPictureFocus;
  const zoom = focus.zoom ?? 1;
  /** ChAMP 1-5 mentors came from a spreadsheet with no photo or major/Intania. */
  const hasPicture = Boolean(mentor.mentorPictureUrl);
  const hasCredentials = Boolean(mentor.department ?? mentor.classYear);
  const companyNameClass = hasCompanyLogo
    ? "text-left text-[10px]"
    : hasPicture
      ? "text-center text-[11.5px]"
      : "text-center text-[12.5px]";

  return (
    <article
      className={`flex w-full flex-col overflow-hidden rounded-lg ${cardBackground} p-1 shadow-[0_6px_16px_rgb(0_0_0_/_18%)] transition-transform hover:-translate-y-0.5`}
    >
      {mentor.mentorPictureUrl ? (
        <div className="relative aspect-square w-full overflow-hidden rounded bg-[#D9D9D9]">
          <Image
            alt={`${mentor.nickname} — ${mentor.fullName}`}
            className="object-cover"
            fill
            sizes="(max-width: 640px) 50vw, 360px"
            src={mentor.mentorPictureUrl}
            style={
              zoom > 1
                ? {
                    objectPosition: focus.position,
                    transform: `scale(${zoom})`,
                    transformOrigin: focus.origin ?? focus.position,
                  }
                : { objectPosition: focus.position }
            }
          />
        </div>
      ) : null}

      <div
        className={`flex flex-1 flex-col items-center gap-1 text-center text-white ${hasPicture ? "px-1 pt-2 pb-1" : "justify-center gap-1.5 px-2 py-5"}`}
      >
        <p
          className={`leading-[1.15] font-bold ${hasPicture ? "text-[15px]" : "text-[19px]"}`}
        >
          {mentor.nickname}
        </p>
        <p
          className={`leading-[1.2] ${hasPicture ? "text-[11px]" : "text-[12px]"}`}
        >
          {mentor.fullName}
        </p>

        {hasCredentials ? (
          <p className="flex flex-wrap items-center justify-center gap-1.5 text-[12px] leading-none font-bold">
            {mentor.department ? (
              <span className="rounded-lg bg-[#F6DC81] px-2 py-0.5 text-[#65090C]">
                {mentor.department}
              </span>
            ) : null}
            {mentor.classYear ? <span>Intania {mentor.classYear}</span> : null}
          </p>
        ) : null}

        <p
          className={`mt-0.5 w-full rounded-lg border border-[#F6DC81] px-1.5 py-1 leading-[1.2] font-bold text-[#F6DC81] ${hasPicture ? "text-[10px]" : "text-[11px]"}`}
        >
          {mentor.position}
        </p>

        <div
          className={`flex w-full items-center gap-1.5 pt-2 ${hasPicture ? "mt-auto" : ""} ${hasCompanyLogo ? "" : "justify-center"}`}
        >
          {mentor.companyLogoUrl ? (
            <span className="relative h-7 w-[42%] shrink-0 overflow-hidden rounded bg-white">
              <Image
                alt={`${mentor.companyName} logo`}
                className="object-contain p-1"
                fill
                sizes="80px"
                src={mentor.companyLogoUrl}
              />
            </span>
          ) : null}
          <p
            className={`leading-[1.3] font-semibold ${companyNameClass}`}
          >
            {mentor.companyName}
          </p>
        </div>
      </div>
    </article>
  );
}
