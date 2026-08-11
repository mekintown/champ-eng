import Image from "next/image";

import champLogo from "@/public/champ-logo.png";

import { Reveal } from "../reveal";
import { SectionTitle } from "../section-title";
import { menteeQualities } from "./home-content";

export function CultureSection(): React.JSX.Element {
  return (
    <Reveal>
      <section
        className="relative bg-[linear-gradient(90deg,transparent_0_16px,rgb(146_45_46_/_5%)_16px_17px,transparent_17px),#fff] px-7 py-[58px] before:absolute before:top-[38px] before:left-7 before:h-[5px] before:w-[42px] before:rounded-full before:bg-[#922D2E]"
        id="culture"
      >
        <div className="pt-[15px]">
          <SectionTitle title="ถ้าคุณเป็นคนที่..." />
        </div>
        <ul className="grid grid-cols-2 gap-2.5">
          {menteeQualities.map((quality, index) => (
            <li
              className={`flex min-h-[50px] items-center justify-center rounded-[14px] border border-[#BCBEC0] bg-white p-2.5 text-center text-[11px] leading-tight font-semibold text-black transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-[#922D2E] hover:shadow-[0_8px_18px_rgb(0_0_0_/_8%)] ${index > 5 ? "col-span-2" : ""}`}
              key={quality}
            >
              {quality}
            </li>
          ))}
        </ul>
        <p className="mt-8 grid justify-items-center gap-3 border-t border-[#BCBEC0]/60 pt-[30px] text-center">
          <Image
            alt="ChAMP Engineering"
            className="h-auto w-[164px]"
            sizes="164px"
            src={champLogo}
          />
          <em className="text-[22px] font-bold tracking-[0.035em] not-italic">
            Might be for you
          </em>
        </p>
      </section>
    </Reveal>
  );
}
