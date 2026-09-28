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
  officersLineup: "/images/guards-lineup.jpg",
  controlRoom: "/images/control-room-anka.jpg",
  k9: "/images/canine-patrol.jpg",
  cctv: "/images/px-cctv.webp",
  classroom: "/images/px-training.webp",
  vip: "/images/px-vip.webp",
  event: "/images/px-event.webp",
  access: "/images/electric-fence.jpg",
  fleet: "/images/anka-vehicle.jpg",
  supervision: "/images/detail-premium.webp",
  residential: "/images/px-gate.webp",
  alarm: "/images/px-response.webp",
  officerDetail: "/images/detail-premium.webp",

  svcGuarding: "/images/guards-formation.jpg",
  svcEvent: "/images/px-event.webp",
  svcAccess: "/images/electric-fence.jpg",
  svcFleet: "/images/anka-vehicle.jpg",
  svcRescue: "/images/px-response.webp",
  svcResponse: "/images/fire-alarm-panel.jpg",
} as const;
