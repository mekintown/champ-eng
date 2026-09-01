/**
 * Single source of truth for site-wide SEO values. Kept here so the layout,
 * sitemap, robots and OG image never drift apart.
 */
export const siteUrl = "https://champeng.site";

export const siteName = "ChAMP Engineering";

export const siteTagline = "Prepare for ChAMP Eng the right way";

export const siteDescription =
  "ChAMP Engineering โครงการแนะแนวสำหรับนิสิตวิศวฯ จุฬาฯ ที่เชื่อมโยงผู้คน ประสบการณ์ และโอกาส พร้อมเช็กลิสต์เตรียมตัวสมัครเป็น Mentee ทีละขั้น";

/** Routes that should appear in the sitemap, in navigation order. */
export const sitePaths = ["/", "/checklist", "/mentors"] as const;
