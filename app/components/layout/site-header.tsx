"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import champLogo from "@/public/champ-logo.png";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/checklist", label: "Checklist" },
];

export function SiteHeader(): React.JSX.Element {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between border-b border-[#BCBEC0]/30 bg-white/90 px-7 py-6">
      <Link className="inline-flex" href="/">
        <Image
          alt="ChAMP Engineering"
          className="h-auto w-[110px]"
          preload
          sizes="110px"
          src={champLogo}
        />
      </Link>
      <nav
        aria-label="Main navigation"
        className="flex gap-1 rounded-full border border-[#BCBEC0]/60 bg-[#BCBEC0]/15 p-1"
      >
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              aria-current={isActive ? "page" : undefined}
              className={`rounded-full px-2.5 py-1.5 text-[10px] font-bold transition-colors ${isActive ? "bg-black text-white shadow-sm" : "text-black/65 hover:bg-white hover:text-black"}`}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
