/**
 * Premium photography set. Frames are art directed so no faces are visible:
 * back views, silhouettes, hands and equipment detail only.
 *
 * These now point to real files committed in /public/images so they work on
 * any host (Vercel, etc.), not just Lovable's own preview/hosting.
 */
export const img = {
  logo: "/images/anka-logo.png",

  heroMain: "/images/hero-premium.webp",
  heroGate: "/images/px-gate.webp",
  patrol: "/images/about-premium.webp",
  trainingDrill: "/images/detail-premium.webp",
  officersLineup: "/images/about-premium.webp",
  controlRoom: "/images/control-premium.webp",
  k9: "/images/px-k9.webp",
  cctv: "/images/px-cctv.webp",
  classroom: "/images/px-training.webp",
  vip: "/images/px-vip.webp",
  event: "/images/px-event.webp",
  access: "/images/px-access.webp",
  fleet: "/images/px-yard.webp",
  supervision: "/images/detail-premium.webp",
  residential: "/images/px-gate.webp",
  alarm: "/images/px-response.webp",
  officerDetail: "/images/detail-premium.webp",

  svcGuarding: "/images/px-patrol.webp",
  svcEvent: "/images/px-event.webp",
  svcAccess: "/images/px-access.webp",
  svcFleet: "/images/px-yard.webp",
  svcRescue: "/images/px-response.webp",
  svcResponse: "/images/px-response.webp",
} as const;
