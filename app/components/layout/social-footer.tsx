import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";

import champLogo from "@/public/champ-logo.png";

import { champSocialLinks } from "../social-links";

const socialLinks = [
  {
    label: "Instagram",
    href: champSocialLinks.instagram,
    icon: FaInstagram,
  },
  {
    label: "Facebook",
    href: champSocialLinks.facebook,
    icon: FaFacebook,
  },
  {
    label: "TikTok",
    href: champSocialLinks.tiktok,
    icon: FaTiktok,
  },
  {
    label: "YouTube",
    href: champSocialLinks.youtube,
    icon: FaYoutube,
  },
  {
    label: "LinkedIn",
    href: champSocialLinks.linkedIn,
    icon: FaLinkedin,
  },
];

export function SocialFooter(): React.JSX.Element {
  return (
    <footer className="grid grid-cols-[1fr_auto] items-end gap-4 bg-black px-7 py-8 text-white">
      <div>
        <p className="text-xs font-extrabold">ChAMP Engineering</p>
        <p className="mt-1 max-w-[270px] text-[10px] leading-relaxed text-[#BCBEC0]">
          คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย 254 ถนนพญาไท แขวงวังใหม่
          เขตปทุมวัน กรุงเทพฯ 10330
        </p>
        <a
          className="mt-1 inline-block text-[10px] font-bold text-white underline"
          href="mailto:official.champeng9@gmail.com"
        >
          official.champeng9@gmail.com
        </a>
      </div>
      <nav aria-label="ChAMP social channels" className="col-span-2 flex gap-4">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <a
            aria-label={`ChAMP Engineering on ${label}`}
            className="text-xl text-white transition-colors hover:text-[#922D2E]"
            href={href}
            key={label}
            rel="noreferrer"
            target="_blank"
          >
            <Icon aria-hidden="true" />
          </a>
        ))}
      </nav>
      <Image
        alt="ChAMP Engineering"
        className="h-auto w-[94px] self-end brightness-0 invert"
        sizes="94px"
        src={champLogo}
      />
    </footer>
  );
}
