import { champSocialLinks } from "../social-links";

export type ChecklistItem = {
  id: string;
  text: string;
  resources?: {
    href: string;
    label: string;
  }[];
};

export type ApplicationStage = {
  id: string;
  label: string;
  dateLabel: string;
  deadline: string;
  title: string;
  description: string;
  checklist: ChecklistItem[];
  showDressCode?: boolean;
};

export const applicationStages: ApplicationStage[] = [
  {
    id: "application-form",
    label: "Application Form",
    dateLabel: "14 Aug – 6 Sep 2026",
    deadline: "2026-09-06",
    title: "สิ่งสำคัญของการทำ Application Form",
    description:
      "ค่อย ๆ คิดแล้วตอบคำถาม แนะนำให้เตรียมคำตอบและไฟล์ต่าง ๆ ก่อนตอบ Google Form เนื่องจากฟอร์มอาจไม่สามารถบันทึกแบบร่างได้",
    checklist: [
      {
        id: "understand-champ",
        text: "ศึกษาว่า ChAMP Eng คืออะไรและเหมาะกับเราไหม",
      },
      {
        id: "explore-goals",
        text: "ลองสำรวจตัวเองแล้วว่ากำลังเจอปัญหาหรือมีเป้าหมายอะไร ที่พี่ Mentor จะช่วยได้",
      },
      {
        id: "check-dates",
        text: "ตรวจสอบว่าวันที่ 3 Oct, 4 Oct และ 10 Oct สะดวกเดินทางมาที่คณะฯ หรือไม่ เนื่องจากเป็นวันคัดเลือกหากผ่านเข้ารอบ",
      },
      {
        id: "follow-social",
        text: "Follow IG: champengcu และ TikTok: champengcu เพื่อรับข่าวสารและกิจกรรมต่าง ๆ",
        resources: [
          {
            href: champSocialLinks.instagram,
            label: "Instagram: @champengcu",
          },
          {
            href: champSocialLinks.tiktok,
            label: "TikTok: @champengcu",
          },
        ],
      },
      {
        id: "join-openchat",
        text: "เข้า Openchat เพื่อติดตามประกาศการรับสมัคร",
        resources: [
          {
            href: "https://line.me/ti/g2/mFOtKspAT2o9ZkAbF9-IAIlT1LuR8qLTUIs_-w?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
            label: "Join the Openchat",
          },
        ],
      },
      {
        id: "update-resume",
        text: "แก้ไข Resume/CV ให้ข้อมูลเป็นปัจจุบันแล้ว",
      },
      {
        id: "prepare-transcript",
        text: "เตรียม Transcript เรียบร้อยแล้ว",
        resources: [
          {
            href: "https://www2.reg.chula.ac.th/",
            label: "CU Registrar",
          },
        ],
      },
      {
        id: "write-essay",
        text: "เขียนคำตอบ Essay questions แบบ STAR แล้วหรือยัง",
      },
      {
        id: "review-mentors",
        text: "ดูรายชื่อ Mentor และศึกษาคร่าว ๆ แล้ว",
      },
      {
        id: "submit-form",
        text: "ส่ง Application form เรียบร้อยแล้ว",
      },
    ],
  },
  {
    id: "shortlisting",
    label: "Shortlisting",
    dateLabel: "3 Oct 2026",
    deadline: "2026-10-03",
    title: "Shortlisting",
    description:
      "กิจกรรมสัมภาษณ์กับทีมงานเพื่อประเมินความสอดคล้องกับโครงการ",
    checklist: [
      {
        id: "check-shortlisting-email",
        text: "เช็ก Email แล้วว่าต้องมากี่โมง และลงทะเบียนที่ไหน (หากไม่เจอให้ลองหาใน spam/junk mail)",
      },
      {
        id: "shortlisting-absence",
        text: "ได้แจ้งเหตุผลกับทีมงานเรียบร้อยแล้ว หากไม่สะดวกเข้าร่วมในวัน Shortlisting",
      },
      {
        id: "choose-mentor",
        text: "มีพี่ Mentor ที่สนใจแล้วหรือยัง",
      },
      {
        id: "pair-ranking",
        text: "กรอกฟอร์ม Pair ranking เรียบร้อยแล้ว",
      },
      {
        id: "shortlisting-dress-code",
        text: "เตรียมเครื่องแต่งกายแบบ Business Casual แล้ว",
      },
    ],
    showDressCode: true,
  },
  {
    id: "candidate-info",
    label: "Candidate Info",
    dateLabel: "4 Oct 2026",
    deadline: "2026-10-04",
    title: "Candidate Info Session",
    description:
      "ทำความรู้จักโครงการ ChAMP Eng เข้าใจขั้นตอนการคัดเลือก กฎระเบียบ และการเตรียมตัวสำหรับ Pairing Day พร้อมทั้งฟังประสบการณ์จริงจากการ Mentoring และเรื่องราวที่น่าสนใจจาก Ex-Mentee เพื่อเตรียมตัวได้อย่างมั่นใจ",
    checklist: [
      {
        id: "check-candidate-email",
        text: "เช็ก Email แล้วว่าต้องมากี่โมง และลงทะเบียนที่ไหน (หากไม่เจอให้ลองหาใน spam/junk mail)",
      },
      {
        id: "candidate-info-absence",
        text: "ได้แจ้งเหตุผลกับทีมงานเรียบร้อยแล้ว หากไม่สะดวกเข้าร่วมในวัน Candidate Info Session",
      },
      {
        id: "candidate-info-dress-code",
        text: "เตรียมเครื่องแต่งกายแบบ Business Casual แล้ว",
      },
    ],
    showDressCode: true,
  },
  {
    id: "pairing-day",
    label: "Pairing Day",
    dateLabel: "10 Oct 2026",
    deadline: "2026-10-10",
    title: "Pairing Day",
    description:
      "กิจกรรมที่ผู้สมัครจะได้ Pitching เพื่อแนะนำตัวเองให้ Mentor รู้จักมากขึ้น และเข้าร่วมช่วง Q&A เพื่อตอบคำถามจาก Mentor ซึ่งเป็นส่วนหนึ่งในการพิจารณาคัดเลือก",
    checklist: [
      {
        id: "room-bidding",
        text: "กรอกฟอร์ม Room bidding เรียบร้อยแล้ว",
      },
      {
        id: "intro-video",
        text: "ส่งคลิปแนะนำตัวเรียบร้อยแล้ว",
      },
      {
        id: "check-pairing-email",
        text: "เช็ก Email แล้วว่าได้ Pairing room อะไร ต้องมากี่โมง และลงทะเบียนที่ไหน (หากไม่เจอให้ลองหาใน spam/junk mail)",
      },
      {
        id: "pairing-absence",
        text: "ได้แจ้งเหตุผลกับทีมงานเรียบร้อยแล้ว หากไม่สะดวกเข้าร่วมในวัน Pairing",
      },
      {
        id: "study-mentor",
        text: "ศึกษาข้อมูลพี่ Mentor ที่เราสนใจแล้ว",
      },
      {
        id: "pairing-dress-code",
        text: "เตรียมเครื่องแต่งกายแบบ Business Casual แล้ว",
      },
    ],
    showDressCode: true,
  },
];

export const applicationBenefits = [
  {
    title: "ได้สะท้อนตัวเอง (Self-reflection)",
    points: [
      "ได้ทบทวนตัวเองผ่านคำถาม ย้อนกลับมามองเรื่องราว ประสบการณ์ และเส้นทางชีวิตของตัวเอง",
      "ได้ค้นหาเป้าหมายชีวิตของตัวเอง ได้สำรวจความสนใจ ความฝัน และสิ่งที่อยากทำในอนาคต",
      "ช่วยให้เข้าใจทิศทางและเป้าหมายของตัวเองมากขึ้น",
    ],
  },
  {
    title: "ฝึกการนำเสนอความคิดของตัวเอง",
    points: [
      "ฝึกเรียบเรียงความคิดและถ่ายทอดตัวตนผ่านการเขียน",
      "สามารถนำทักษะไปประยุกต์ใช้กับการสมัครงาน การนำเสนอผลงาน และโอกาสในอนาคต",
    ],
  },
  {
    title: "เป็นโอกาสในการพัฒนาตัวเอง",
    points: [
      "ได้เรียนรู้มุมมองใหม่ ๆ จากการตั้งคำถามกับตัวเอง",
      "เข้าใจจุดแข็ง จุดที่ต้องพัฒนา และแนวทางเติบโตของตัวเองมากขึ้น",
    ],
  },
];

export const starTips = [
  {
    title: "S - Situation",
    summary: "เลือก Situation ที่เราเคยทำแล้วน่าสนใจ",
    english: "Choose a situation you’ve experienced that is interesting and relevant.",
    detail: "เล่าสถานการณ์ เพื่อให้ผู้ฟังเห็นภาพว่าเราเจอกับอะไร",
    detailEnglish:
      "Describe the scenario to help the listener visualize what you were dealing with.",
  },
  {
    title: "T - Tasks",
    summary: "พูดถึง “งานที่เราเป็นคนทำ”",
    english:
      "Talk about the specific tasks you were responsible for in that situation.",
    detail:
      "ณ สถานการณ์นั้น เราได้โจทย์ ปัญหา หรือ “เป้าหมาย” อะไรในตอนนั้น",
    detailEnglish:
      "Explain the problem, challenge, or goal you were tasked with addressing.",
  },
  {
    title: "A - Action",
    summary: "เล่าถึงรายละเอียดงานที่เราทำ",
    english: "Detail the actions you took to achieve the goal or solve the problem.",
    detail:
      "เล่าถึงรายละเอียดสิ่งที่เราทำแล้วสามารถ “บรรลุเป้าหมาย” หรือช่วยแก้ปัญหาต่าง ๆ ที่เกิดขึ้นได้จริง เน้นสิ่งที่เป็นรูปธรรม มีขั้นตอนที่สามารถวัดผลได้",
    detailEnglish:
      "Focus on tangible, measurable steps you implemented, emphasizing what you did to reach the desired outcome.",
  },
  {
    title: "R - Result",
    summary: "ผลลัพธ์เป็นอย่างไร",
    english: "Describe the results of your actions.",
    detail:
      "ความเปลี่ยนแปลงที่เราสร้างขึ้นสำคัญคือต้องวัดได้ และควรอธิบายผลในระยะยาวที่เกิดขึ้นด้วย",
    detailEnglish:
      "Highlight the measurable impact and any long-term benefits that resulted from your efforts.",
  },
];
