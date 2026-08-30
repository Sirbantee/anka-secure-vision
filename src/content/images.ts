import logo from "@/assets/anka-logo.png.asset.json";
import trainingDrill from "@/assets/anka-training-drill.webp.asset.json";
import officersLineup from "@/assets/anka-officers-lineup.webp.asset.json";
import controlRoom from "@/assets/anka-control-room.webp.asset.json";
import heroGate from "@/assets/hero-gate-dusk.webp.asset.json";
import heroMain from "@/assets/hero-main.webp.asset.json";
import k9 from "@/assets/k9-patrol.webp.asset.json";
import cctv from "@/assets/cctv-install.webp.asset.json";
import classroom from "@/assets/training-classroom.webp.asset.json";
import vip from "@/assets/vip-escort.webp.asset.json";
import event from "@/assets/event-security.webp.asset.json";
import access from "@/assets/access-control.webp.asset.json";
import fleet from "@/assets/fleet-yard.webp.asset.json";
import supervision from "@/assets/supervision-check.webp.asset.json";
import residential from "@/assets/residential-gate.webp.asset.json";
import alarm from "@/assets/alarm-response.webp.asset.json";
import officerDetail from "@/assets/officer-detail.webp.asset.json";

export const img = {
  logo: logo.url,
  trainingDrill: trainingDrill.url,
  officersLineup: officersLineup.url,
  controlRoom: controlRoom.url,
  heroGate: heroGate.url,
  k9: k9.url,
  cctv: cctv.url,
  classroom: classroom.url,
  vip: vip.url,
  event: event.url,
  access: access.url,
  fleet: fleet.url,
  supervision: supervision.url,
  residential: residential.url,
  alarm: alarm.url,
  officerDetail: officerDetail.url,
} as const;
