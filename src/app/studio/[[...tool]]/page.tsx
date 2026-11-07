import { redirect } from "next/navigation";

/**
 * Embedded Studio login is unreliable in Next.js 16 (session hash / cookie
 * issues after OAuth). The Studio is hosted by Sanity instead, which uses
 * first-party auth on sanity.io.
 *
 * Redeploy with: npm run studio:deploy
 */
const STUDIO_URL =
  "https://www.sanity.io/@obmlncxkv/studio/p3ox4dkalg3obqclfc4elkby";

export default function StudioPage() {
  redirect(STUDIO_URL);
}
