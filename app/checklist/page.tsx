import type { Metadata } from "next";

import { ApplicationChecklist } from "../components/checklist/application-checklist";
import { PageShell } from "../components/layout/page-shell";

const title = "เช็กลิสต์เตรียมสมัคร";
const description =
  "เช็กลิสต์เตรียมตัวสมัคร ChAMP Engineering ทีละขั้น ตั้งแต่กรอก Application Form ไปจนถึงวันสัมภาษณ์ พร้อมกำหนดการ การแต่งกาย และสิ่งที่ต้องเตรียม";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/checklist",
  },
  openGraph: {
    title,
    description,
    url: "/checklist",
  },
  twitter: {
    title,
    description,
  },
};

export default function ChecklistPage(): React.JSX.Element {
  return (
    <PageShell>
      <ApplicationChecklist id="application-checklist" />
    </PageShell>
  );
}
