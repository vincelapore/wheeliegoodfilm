import { SparkleTrail } from "@/components/sparkle-trail";
import { SanityLive } from "@/sanity/lib/live";
import type { ReactNode } from "react";

export const viewport = {
  themeColor: "#9aab8f",
};

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-full bg-sage font-sans text-ink">
      <SparkleTrail />
      {children}
      <SanityLive />
    </div>
  );
}
