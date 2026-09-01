import type { Metadata } from "next";

import { PageShell } from "../components/layout/page-shell";
import { MentorsList } from "../components/mentors/mentors-list";

const title = "Mentors";
const description =
  "รู้จักพี่ ๆ Mentor ของ ChAMP Engineering จากหลากหลายสายอาชีพ ทั้ง Tech, Manufacturing, Engineering, Commercial, Start Up, F&B และ Financial กรองตามสายงานที่สนใจได้";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/mentors",
  },
  openGraph: {
    title,
    description,
    url: "/mentors",
  },
  twitter: {
    title,
    description,
  },
};

export default function MentorsPage(): React.JSX.Element {
  return (
    <PageShell>
      <MentorsList id="mentors-list" />
    </PageShell>
  );
}
