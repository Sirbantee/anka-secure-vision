import { img } from "./images";

export const company = {
  name: "ANKA Security Services Limited",
  short: "ANKA",
  founded: "2015",
  tagline: "Securing what matters",
  address: {
    line1: "Plot 2106 Kayaga Close",
    line2: "Ndungu Zone, Kisaasi",
    box: "P.O. Box 165026",
    city: "Kampala, Uganda",
  },
  phone: "+256 762 273 165",
  whatsapp: "+256 760 811 513",
  altPhone: "+254 708 908 974",
  email: "info@ankasecurity.com",
  website: "ankasecurity.com",
  locations: ["Kampala", "Hoima"],
} as const;

export const telHref = (n: string) => `tel:${n.replace(/\s/g, "")}`;
export const waHref = (n: string) => `https://wa.me/${n.replace(/[^\d]/g, "")}`;

export type Service = {
  slug: string;
  index: string;
  name: string;
  short: string;
  summary: string;
  image: string;
  imageAlt: string;
  group: "Manned Guarding" | "Security Technology" | "Response & Training";
  provides: string[];
  operations: string[];
  technology: string[];
  training: string[];
  environments: string[];
};

export const services: Service[] = [
  {
    slug: "guarding",
    index: "01",
    name: "Armed & Unarmed Guarding",
    short: "Guarding",
    summary:
      "Trained and vetted officers deployed to residential, commercial and industrial sites, armed or unarmed according to the risk profile of the premises.",
    image: img.residential,
    imageAlt:
      "ANKA security officer opening the pedestrian gate of a walled residential compound in Kampala",
    group: "Manned Guarding",
    provides: [
      "Static guarding at gates, receptions, perimeters and internal posts",
      "Armed officers where the risk assessment and licensing support it",
      "Foot patrols on set and randomised patrol routes",
      "Occurrence books, shift handovers and written incident reports",
      "Access screening of visitors, staff, vehicles and deliveries",
    ],
    operations: [
      "Deployment numbers and shift patterns are set from the premises assessment, not from a standard package.",
      "Officers work to post orders written for the specific site and reviewed with the client.",
      "Absence or rotation is covered by immediate replacement so a post is never left thin.",
    ],
    technology: [
      "Control-room cover for escalation around the clock",
      "CCTV and alarm systems tied into the guarding plan where installed",
      "Access-control and visitor management at manned entry points",
    ],
    training: [
      "Three-week ANKA Basic Guarding Course",
      "Fourth customised week on the client's own premises",
      "Gun handling and safety for armed deployments",
    ],
    environments: [
      "Residential estates and private homes",
      "Offices and commercial premises",
      "Warehouses and industrial sites",
    ],
  },
  {
    slug: "k9-security",
    index: "02",
    name: "Canine Protection",
    short: "Canine",
    summary:
      "K9 patrols and detection dogs for high-risk premises and events, worked by handlers trained to keep the dog under control at all times.",
    image: img.k9,
    imageAlt: "ANKA canine handler walking a German Shepherd along an industrial perimeter fence",
    group: "Manned Guarding",
    provides: [
      "Handler-and-dog patrol teams on perimeter and yard routes",
      "Detection support for high-risk premises and events",
      "Night deterrence on large or poorly lit sites",
      "Crowd-edge presence where a visible deterrent is required",
    ],
    operations: [
      "Dog teams are deployed alongside static officers, not as a substitute for them.",
      "Patrol routes and rest cycles are planned so the team stays effective through the shift.",
      "Handlers record patrol activity in the site occurrence book like any other post.",
    ],
    technology: [
      "Patrol timing verified against CCTV coverage where cameras are installed",
      "Radio and control-room contact on every patrol",
    ],
    training: [
      "Handler discipline and restraint modules",
      "Site-specific orientation before a dog team is deployed",
    ],
    environments: [
      "Industrial yards and warehousing",
      "Construction and infrastructure sites",
      "Large events and open venues",
    ],
  },
  {
    slug: "vip-protection",
    index: "03",
    name: "VIP & Personal Escort",
    short: "VIP Protection",
    summary:
      "Close protection for executives and principals, and secure escort for the movement of goods and valuables.",
    image: img.vip,
    imageAlt: "Close protection officer holding open the rear door of a vehicle outside an office building",
    group: "Manned Guarding",
    provides: [
      "Close protection officers for executives and principals",
      "Secure escort for the movement of goods and valuables",
      "Route planning and advance checks on venues and stops",
      "Discreet presence at meetings, functions and public appearances",
    ],
    operations: [
      "Movement plans are agreed in advance and adjusted on the day as conditions require.",
      "Escort teams stay in contact with the control room throughout a movement.",
      "Officers are selected for judgement and presentation as much as for capability.",
    ],
    technology: [
      "Vehicle tracking and geo-fencing on escort movements",
      "Control-room monitoring of movement progress",
      "Recovery support if a vehicle is lost or immobilised",
    ],
    training: [
      "Protection of information and discretion modules",
      "Arrests, restraint and use-of-force discipline",
      "Fast-track orientation for experienced officers joining a detail",
    ],
    environments: [
      "Executive and diplomatic movement",
      "Cash and valuables in transit",
      "Corporate visits and site inspections",
    ],
  },
  {
    slug: "event-security",
    index: "04",
    name: "Event Security",
    short: "Events",
    summary:
      "End-to-end planning and deployment for weddings, sports fixtures, conferences and funerals.",
    image: img.event,
    imageAlt: "ANKA officers managing a guest queue at a barrier during an outdoor event at dusk",
    group: "Manned Guarding",
    provides: [
      "Pre-event survey of the venue, entries, exits and crowd flow",
      "Accreditation, ticket and guest screening at entry points",
      "Crowd management along barriers and inside venues",
      "Stage, backstage and VIP area control",
      "Coordinated close-down and dispersal at the end of the event",
    ],
    operations: [
      "Officer numbers are set from expected attendance, venue layout and event type.",
      "A named supervisor runs the deployment and is reachable throughout the event.",
      "Incidents are escalated to the control room and recorded for the client afterwards.",
    ],
    technology: [
      "Temporary CCTV and monitoring where the venue allows",
      "Radio nets across entry, crowd and VIP teams",
    ],
    training: [
      "Customer care and public relations modules",
      "Observation and crowd-behaviour reading",
      "Customised briefing on the specific event and venue",
    ],
    environments: [
      "Weddings and private functions",
      "Sports fixtures and public gatherings",
      "Conferences and corporate events",
      "Funerals and memorial gatherings",
    ],
  },
  {
    slug: "cctv",
    index: "05",
    name: "CCTV Installation & Monitoring",
    short: "CCTV",
    summary:
      "Design, installation and round-the-clock control-room monitoring of surveillance systems.",
    image: img.cctv,
    imageAlt: "Technician mounting a dome CCTV camera to the eave of a commercial building",
    group: "Security Technology",
    provides: [
      "Camera position design based on the premises and its blind spots",
      "Installation, cabling, recording and remote-access setup",
      "24/7 control-room monitoring of live feeds",
      "Retrieval of recorded footage for incident review",
      "Maintenance and fault attendance on installed systems",
    ],
    operations: [
      "Cameras are placed to support the guarding plan, so officers and footage cover the same risks.",
      "Control-room operators escalate what they see to supervisors and response teams.",
      "Monitoring runs continuously, including outside client working hours.",
    ],
    technology: [
      "Fixed and dome cameras, recorders and remote viewing",
      "Control-room video walls and operator stations",
      "Integration with intruder and fire alarm systems",
    ],
    training: [
      "Control-room observation and reporting discipline",
      "Written report and occurrence-book standards",
    ],
    environments: [
      "Corporate premises and retail",
      "Residential estates",
      "Warehousing, logistics and industrial sites",
    ],
  },
  {
    slug: "alarms",
    index: "06",
    name: "Intruder & Fire Alarms",
    short: "Alarms",
    summary:
      "Intelligent alarm systems backed by rapid armed response, so a signal produces officers on site.",
    image: img.alarm,
    imageAlt: "ANKA rapid response vehicle at a compound gate at night in the rain",
    group: "Security Technology",
    provides: [
      "Intruder alarm design, installation and commissioning",
      "Fire alarm and detection installation",
      "Panic and duress signalling for staff and residents",
      "Control-room alarm receiving and verification",
      "Armed response dispatch on a confirmed activation",
    ],
    operations: [
      "Every activation is verified and logged before and after response attends.",
      "Response times and outcomes are reported back to the client.",
      "Repeat or false activations are investigated rather than absorbed.",
    ],
    technology: [
      "Intruder detection, fire detection and panic signalling",
      "Alarm receiving at the ANKA control room",
      "Linkage with CCTV to verify activations visually",
    ],
    training: [
      "First-responder modules for fire, medical and security alarms",
      "Crime scene preservation and incident reporting",
    ],
    environments: [
      "Homes and residential estates",
      "Offices, banks and retail",
      "Warehouses and plant",
    ],
  },
  {
    slug: "access-control",
    index: "07",
    name: "Electric Fence & Access Control",
    short: "Access Control",
    summary:
      "Perimeter electrification, biometrics, turnstiles and visitor management for controlled premises.",
    image: img.access,
    imageAlt: "Hand on a fingerprint reader beside a stainless steel turnstile at a corporate reception",
    group: "Security Technology",
    provides: [
      "Electric fence supply, installation and energiser maintenance",
      "Biometric and card-based door and gate control",
      "Turnstiles, boom barriers and pedestrian lanes",
      "Visitor registration and pass management",
      "Access rights review for staff and contractors",
    ],
    operations: [
      "Access points are designed around how people and vehicles actually move through the site.",
      "Officers on the entry post work to written screening procedures for that premises.",
      "Perimeter faults are treated as security incidents, not maintenance tickets.",
    ],
    technology: [
      "Perimeter electrification and tamper detection",
      "Biometric readers, turnstiles and barrier control",
      "Visitor management records available to the client",
    ],
    training: [
      "Vetting, observation and screening modules",
      "Customer care at reception and gate posts",
    ],
    environments: [
      "Corporate headquarters and campuses",
      "Gated residential developments",
      "Factories, depots and secure yards",
    ],
  },
  {
    slug: "vehicle-tracking",
    index: "08",
    name: "Vehicle Tracking & Fleet",
    short: "Fleet",
    summary:
      "Real-time fleet visibility, geo-fencing and recovery support for vehicles and cargo on the move.",
    image: img.fleet,
    imageAlt: "Supervisor walking between parked cargo trucks in a fenced logistics yard at dawn",
    group: "Security Technology",
    provides: [
      "Tracking unit supply, fitting and commissioning",
      "Live position and movement visibility for fleet managers",
      "Geo-fencing with alerts on route and boundary deviation",
      "Recovery support when a vehicle is stolen or immobilised",
      "Movement reporting for audit and insurance purposes",
    ],
    operations: [
      "Alerts land in the control room where an operator acts on them, not only in an inbox.",
      "Recovery is coordinated with response teams and the relevant authorities.",
      "Reporting is agreed with the client so it matches how the fleet is run.",
    ],
    technology: [
      "Vehicle tracking units and geo-fence rules",
      "Control-room fleet visibility and alerting",
      "Recovery coordination and support",
    ],
    training: [
      "Control-room monitoring and escalation discipline",
      "Escort officer briefing for high-value movements",
    ],
    environments: [
      "Transport and logistics fleets",
      "Humanitarian and NGO vehicle fleets",
      "Company pool and executive vehicles",
    ],
  },
  {
    slug: "officer-training",
    index: "09",
    name: "Customised Officer Training",
    short: "Training",
    summary:
      "Bespoke modules built for specific operating environments, including aviation, hospitality, oil and gas, and NGOs.",
    image: img.classroom,
    imageAlt: "Trainee security officers in a classroom taking notes while an instructor explains at a whiteboard",
    group: "Response & Training",
    provides: [
      "Programmes designed around a client's operation and standards",
      "The customised fourth week for officers assigned to a premises",
      "Printed, bespoke training manuals where required",
      "Continuous training to address new situations and deficiencies",
      "Fast-track orientation for experienced officers",
    ],
    operations: [
      "Training content is developed from the client's protocols, people and premises.",
      "Deficiencies found during supervision are fed back into re-instruction.",
      "Programmes can run on the client's site or at ANKA's own training venue.",
    ],
    technology: [
      "Orientation on the CCTV, alarm and access systems the officer will actually use",
      "Control-room procedures for reporting and escalation",
    ],
    training: [
      "Three-week Basic Guarding Course as the foundation",
      "Customised week built on the client's operation",
      "Ongoing refreshers through the deployment",
    ],
    environments: [
      "Aviation",
      "Hospitality",
      "Oil and gas",
      "Humanitarian organisations and NGOs",
    ],
  },
  {
    slug: "alarm-response",
    index: "10",
    name: "Fire & Alarm Response",
    short: "Response",
    summary:
      "Trained first responders for fire, medical and security alarm activations, dispatched from the control room.",
    image: img.controlRoom,
    imageAlt: "ANKA control room operator seated in front of a wall of CCTV monitors",
    group: "Response & Training",
    provides: [
      "First response to fire, medical and security activations",
      "Control-room verification before and during response",
      "On-site stabilisation until specialist services arrive",
      "Scene preservation and written incident reporting",
      "Post-incident review with the client",
    ],
    operations: [
      "Response is dispatched from a control room that is staffed continuously.",
      "Management is available around the clock for escalation on any incident.",
      "Every response produces a record the client can review.",
    ],
    technology: [
      "Alarm receiving and verification at the control room",
      "CCTV confirmation of activations where cameras exist",
      "Vehicle tracking on response units",
    ],
    training: [
      "First-responder modules for fire, medical and security alarms",
      "Crime scene handling and written reports",
    ],
    environments: [
      "Monitored residential and commercial premises",
      "Industrial plant and stores",
      "Sites with fire detection installed",
    ],
  },
  {
    slug: "road-rescue",
    index: "11",
    name: "Road Rescue",
    short: "Road Rescue",
    summary:
      "Roadside assistance and emergency recovery for vehicles and their occupants.",
    image: img.heroGate,
    imageAlt: "Security officer standing at a lit vehicle entrance at dusk",
    group: "Response & Training",
    provides: [
      "Roadside assistance for stranded vehicles",
      "Emergency recovery and towing coordination",
      "Occupant safety at the roadside while assistance is arranged",
      "Coordination with escort and tracking teams on cargo movements",
    ],
    operations: [
      "Requests are logged and dispatched through the control room.",
      "Recovery works alongside tracking so a vehicle's position is known before a unit moves.",
      "Incidents are reported to the client with the outcome.",
    ],
    technology: [
      "Vehicle tracking to locate the vehicle",
      "Control-room dispatch and progress monitoring",
    ],
    training: [
      "First-responder and medical basics",
      "Roadside scene and traffic awareness",
    ],
    environments: [
      "Company and NGO fleets",
      "Long-distance cargo movement",
      "Executive vehicle users",
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

export const serviceGroups = [
  "Manned Guarding",
  "Security Technology",
  "Response & Training",
] as const;

export const basicCourseModules = [
  "Security threats",
  "Protection of information",
  "Arrests and restraint",
  "Discipline",
  "Vetting",
  "Observation",
  "Occurrence books",
  "Written reports",
  "Crime scenes",
  "Criminal offences",
  "Officer roles and duties",
  "Customer care",
  "Public relations",
  "Patrolling techniques",
  "Gun handling and safety",
];

export const customisedWeekFocus = [
  "The operation",
  "The people",
  "The protocols",
  "The standards",
  "Specific premises requirements",
];

export const trainingApproach = [
  {
    label: "On-site",
    body: "Officers are oriented to the specific buildings, layouts and risk profile of the client's premises.",
  },
  {
    label: "Off-site",
    body: "Officers complete the core ANKA training programme away from the deployment.",
  },
  {
    label: "Printed manual",
    body: "ANKA can develop bespoke training manuals for officers assigned to a client's premises.",
  },
  {
    label: "Ongoing",
    body: "Continuous training addresses new situations as they arise and corrects deficiencies.",
  },
  {
    label: "Fast track",
    body: "Experienced officers receive concentrated orientation so they can assume responsibilities quickly.",
  },
];

export const supervisionModel = [
  {
    stage: "Check",
    items: [
      "Random supervisor checks on deployed posts",
      "Checks carried out by top management, not only supervisors",
      "Surprise drop-in inspections outside predictable hours",
    ],
  },
  {
    stage: "Evaluate",
    items: [
      "Officer performance evaluated against the post's standards",
      "Open management availability to the client at any point",
      "24/7 escalation route for anything the client raises",
    ],
  },
  {
    stage: "Correct",
    items: [
      "Immediate correction of service problems on site",
      "Re-instruction where a training deficiency is identified",
      "Probation where performance needs to be watched",
      "Immediate replacement where issues repeat",
    ],
  },
];

export const officerStandards = [
  { label: "Age", value: "24 – 45 years" },
  { label: "Education", value: "O-Level and above" },
  { label: "Conduct", value: "Valid Certificate of Good Conduct" },
  { label: "Language", value: "Fluent English & Kiswahili" },
  { label: "Presence", value: "Well-groomed and presentable" },
  {
    label: "Vetting",
    value: "Background checks on family, residence, employment and referees",
  },
];

export const technologyCapabilities = [
  {
    title: "Surveillance",
    items: ["CCTV installation", "CCTV monitoring", "Control-room operations"],
  },
  {
    title: "Detection & Response",
    items: ["Intruder alarms", "Fire alarms", "Armed response"],
  },
  {
    title: "Perimeter & Entry",
    items: ["Electric fencing", "Biometrics", "Turnstiles", "Visitor management"],
  },
  {
    title: "Movement",
    items: ["Vehicle tracking", "Geo-fencing", "Fleet visibility", "Recovery support"],
  },
];

export const industries = [
  {
    name: "Hospitality",
    body: "Guest-facing premises where security has to be visible enough to reassure and discreet enough not to intrude.",
  },
  {
    name: "Humanitarian organisations",
    body: "Compounds, staff movement and vehicle fleets, often across more than one location.",
  },
  {
    name: "Automotive",
    body: "Showrooms, yards and stock where access control and surveillance carry as much weight as guarding.",
  },
  {
    name: "Infrastructure",
    body: "Sites with long perimeters, plant on the ground and contractors moving through daily.",
  },
  {
    name: "Aviation",
    body: "Environments with their own protocols, where officers train to the operator's standards.",
  },
  {
    name: "Oil & Gas",
    body: "Controlled sites where procedure, documentation and discipline are non-negotiable.",
  },
  {
    name: "NGOs",
    body: "Programme offices and field operations that need security shaped around how they work.",
  },
];

export const guardingInclusions = [
  {
    title: "Uniform & equipment",
    items: ["Full ANKA uniform", "ID badge", "Boots", "Personal protective equipment"],
  },
  {
    title: "Training",
    items: ["Three-week Basic Guarding Course", "One-week customised on-site training"],
  },
  {
    title: "Supervision",
    items: ["Daily supervisor visits", "24/7 control-room cover"],
  },
  {
    title: "Replacement",
    items: ["Immediate replacement on absence or rotation"],
  },
  {
    title: "Insurance & statutory",
    items: ["NSSF", "PAYE", "WCF", "Public liability cover"],
  },
];

export const operatingModel = [
  {
    step: "01",
    title: "Understand",
    body: "We assess the premises and its risk profile before proposing anything.",
  },
  {
    step: "02",
    title: "Train",
    body: "Officers are prepared through the ANKA training system before deployment.",
  },
  {
    step: "03",
    title: "Customise",
    body: "Training and deployment are adapted to the client's operation.",
  },
  {
    step: "04",
    title: "Deploy",
    body: "The right personnel are placed in the right numbers on the right posts.",
  },
  {
    step: "05",
    title: "Supervise",
    body: "Performance is monitored continuously by supervisors and management.",
  },
  {
    step: "06",
    title: "Respond",
    body: "Incidents and deficiencies are escalated and addressed quickly.",
  },
  {
    step: "07",
    title: "Improve",
    body: "Weaknesses are corrected through training, supervision and replacement where necessary.",
  },
];

export const navigation = [
  { label: "Home", to: "/", icon: "home" },
  { label: "About", to: "/about", icon: "shield" },
  { label: "Services", to: "/services", icon: "layers" },
  { label: "Training", to: "/training", icon: "graduation" },
  { label: "Technology", to: "/technology", icon: "cctv" },
  { label: "Industries", to: "/industries", icon: "building" },
  { label: "Careers", to: "/careers", icon: "users" },
  { label: "Contact", to: "/contact", icon: "phone" },
] as const;

/**
 * Client wordmarks for the home-page marquee. Add `logo: "<url>"` to a client
 * once artwork is supplied and the image replaces the wordmark automatically.
 */
export const clients: { name: string; logo?: string }[] = [
  { name: "Kampala Serena" },
  { name: "UN OCHA" },
  { name: "Toyota Uganda" },
  { name: "Hoima Refinery Park" },
  { name: "Stanbic Estates" },
  { name: "Entebbe Cargo" },
  { name: "Mercy Corps" },
  { name: "Lake Albert Logistics" },
];

