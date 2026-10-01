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
  officersLineup: "/images/guards-lineup.jpg.jpeg",
  controlRoom: "/images/control-room-anka.jpg.jpeg",
  k9: "/images/canine-patrol.jpg.jpg",
  cctv: "/images/px-cctv.webp",
  classroom: "/images/px-training.webp",
  vip: "/images/px-vip.webp",
  event: "/images/px-event.webp",
  access: "/images/electric-fence.jpg.jpg",
  fleet: "/images/anka-vehicle.jpg.jpeg",
  supervision: "/images/detail-premium.webp",
  residential: "/images/px-gate.webp",
  alarm: "/images/px-response.webp",
  officerDetail: "/images/detail-premium.webp",
  uniformDetail: "/__l5e/assets-v1/0f9cae99-placeholder/anka-uniform-detail.webp",

  svcGuarding: "/images/guards-formation.jpg.jpeg",
  svcEvent: "/images/px-event.webp",
  svcAccess: "/images/electric-fence.jpg.jpg",
  svcFleet: "/images/anka-vehicle.jpg.jpeg",
  svcRescue: "/images/px-response.webp",
  svcResponse: "/images/fire-alarm-panel.jpg.jpg",
} as const;
