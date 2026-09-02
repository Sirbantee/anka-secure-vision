import logo from "@/assets/anka-logo.png.asset.json";

import pxHero from "@/assets/px-hero.webp.asset.json";
import pxPatrol from "@/assets/px-patrol.webp.asset.json";
import pxCctv from "@/assets/px-cctv.webp.asset.json";
import pxControl from "@/assets/px-control.webp.asset.json";
import pxK9 from "@/assets/px-k9.webp.asset.json";
import pxVip from "@/assets/px-vip.webp.asset.json";
import pxDetail from "@/assets/px-detail.webp.asset.json";
import pxGate from "@/assets/px-gate.webp.asset.json";
import pxLineup from "@/assets/px-lineup.webp.asset.json";
import pxAccess from "@/assets/px-access.webp.asset.json";
import pxResponse from "@/assets/px-response.webp.asset.json";
import pxEvent from "@/assets/px-event.webp.asset.json";
import pxYard from "@/assets/px-yard.webp.asset.json";
import pxTraining from "@/assets/px-training.webp.asset.json";

/**
 * Premium photography set. Frames are art directed so no faces are visible:
 * back views, silhouettes, hands and equipment detail only.
 */
export const img = {
  logo: logo.url,

  heroMain: pxHero.url,
  heroGate: pxGate.url,
  patrol: pxPatrol.url,
  trainingDrill: pxLineup.url,
  officersLineup: pxLineup.url,
  controlRoom: pxControl.url,
  k9: pxK9.url,
  cctv: pxCctv.url,
  classroom: pxTraining.url,
  vip: pxVip.url,
  event: pxEvent.url,
  access: pxAccess.url,
  fleet: pxYard.url,
  supervision: pxDetail.url,
  residential: pxGate.url,
  alarm: pxResponse.url,
  officerDetail: pxDetail.url,

  svcGuarding: pxPatrol.url,
  svcEvent: pxEvent.url,
  svcAccess: pxAccess.url,
  svcFleet: pxYard.url,
  svcRescue: pxResponse.url,
  svcResponse: pxResponse.url,
} as const;
