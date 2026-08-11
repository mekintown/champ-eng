import type { PropsWithChildren } from "react";

import { SiteHeader } from "./site-header";
import { SocialFooter } from "./social-footer";

export function PageShell({ children }: PropsWithChildren): React.JSX.Element {
  return (
    <main className="min-h-screen w-full bg-[#F7F7F7]">
      <div className="mx-auto w-full max-w-5xl overflow-hidden bg-white [background-image:radial-gradient(circle_at_8%_24%,rgb(146_45_46_/_5%),transparent_20%),radial-gradient(circle_at_95%_64%,rgb(188_190_192_/_16%),transparent_24%)]">
        <SiteHeader />
        {children}
        <SocialFooter />
      </div>
    </main>
  );
}
