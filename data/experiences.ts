export interface Experience {
  id: number;
  title: string;
  year: string;
  company?: string;
  role?: string;
  type: "startup" | "employment" | "project" | "internship";
  tagline: string;
  mission?: string;
  description: string;
  highlights: (string | { quote: string; text?: string } | { title: string; text: string })[];
  stats?: {
    label: string;
    value: string;
  }[];
  technical?: string[];
  companyDescription?: string;
  images?: (string | { src: string; caption?: string })[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "AI Optical Navigation System",
    year: "2025",
    type: "startup",
    tagline: "We managed to fly 16km with 50m precision without GPS",
    mission: "Navigate in GPS denied environment",
    description:
      "One of my greatest achievement was to design and build a system allowing a fixed-wing UAV to navigate without GPS using optical systems in less than a month.",
    highlights: [
      "We managed to fly 16km with 50m precision without GPS",
      "We used a combination of classical odometry algorithms calibrated with AI image recognition tools to cancel the drift of the dead-reckoning system",
      "We simplified the integration to the autopilot by emulating NMEA frame",
    ],
    technical: [],
    images: ["/images/optical-nav-1.png", "/images/optical-nav-2.jpg"],
  },
  {
    id: 2,
    title: "Head of Sales France",
    company: "Shark Aero s.r.o.",
    year: "2025",
    type: "employment",
    tagline: "Selling small fighter jets",
    description:
      "I managed Shark Aero's presence at the Le Bourget Air Show, overseeing all logistics and coordinating the presentation of the military variants.",
    companyDescription:
      "Shark Aero's core business is the production of high-performance composite ultralight aircraft. These aircraft can cruise at around 300 km/h and offer a range exceeding 2,000 km. They are agile and highly maneuverable, giving pilots a sensation close to flying a fighter jet.",
    highlights: [
      "My role involved coordinating demonstration flights throughout France, organizing marketing events, and providing after-sales support to customers.",
      "This position required strong organizational and management skills, as well as a deep technical understanding of the aircraft and its regulatory framework.",
      {
        quote: "Presenting a military aircraft fitted with electronic warfare equipment to South American armed forces at 23 years old",
        text: "was both challenging and high-pressure — but it taught me to prepare thoroughly, remain composed, and communicate with clarity and confidence.",
      },
    ],
    images: [
      { src: "/images/head-of-sales-1.jpg", caption: "Show of Force with the Shark in Slovakia" },
      { src: "/images/head-of-sales-2.jpg", caption: "Presenting to French press the Shark U1" },
    ],
  },
  {
    id: 3,
    title: "One Way Attack UAV",
    company: "Shark Aero s.r.o.",
    year: "2025",
    type: "employment",
    tagline: "Building a kamikaze drone for under €5,000",
    mission:
      "I have been hired for one year to design from scratch a kamikaze flying wing for Ukrainian conflict, leading a team of 7 young engineers from all around the world in a challenging environment.",
    description:
      "We prioritized analytical and empirical methods to design our aircraft, placing a strong emphasis on testing and iteration. For example, the structural layout was revised around ten times, and the landing gear geometry was modified six times in less than 6 months.",
    stats: [
      { label: "Weight", value: "70 kg" },
      { label: "Range", value: "400 km" },
      { label: "Speed", value: "200 km/h" },
    ],
    highlights: [
      {
        quote: '"You have 1 km runway, just test it as soon as possible"',
      },
      {
        title: "Mass production oriented design",
        text: "We addressed the typical production bottleneck of composite UAVs, which often require over weeks to manufacture each airframe. Our design can be produced in under 50 hours of non-specialized labor, using only standard workshop tooling.",
      },
    ],
    images: ["/images/uav.jpg"],
  },
  {
    id: 4,
    title: "Flight Simulator",
    year: "2025",
    type: "project",
    tagline: "So I did it",
    description:
      "One friend needed a realistic flight simulator for his video game.",
    highlights: [
      "A big thank you to Jules Lievre for their crazy talent in map design and shaders. You should check out their video game: <link:https://store.steampowered.com/app/1871460/Beasts_of_Steel/>Beast Of Steel Video Game</link>",
    ],
    images: ["/images/flight-simulator.jpg"],
  },
  {
    id: 5,
    title: "Airbus Helicopters Internship",
    company: "Airbus Helicopters",
    year: "2023",
    role: "Stress Calculation Intern",
    type: "internship",
    tagline: "Size composite parts for helicopters rotors",
    description:
      "During a 5 months internship I learned how to size composite parts for helicopter rotors. Structural components gradually lose strength due to wear and crack propagation. To guarantee safety while minimizing weight, modern composite rotor parts are sized using S-N fatigue curves. My assignment was to design a lightweight composite blade pitch fitting for the D-Lab Hybrid helicopter.",
    highlights: [
      {
        title: "Using Altair and SAMCEF software",
        text: "The sizing process began with a pre-sizing phase, incorporating the aircraft's load spectrum and expressing these loads in the fitting's local reference frame. I then optimized the composite layup to balance manufacturability, fatigue resistance, and weight reduction, while maintaining full compliance with CS-29 airworthiness requirements. The geometry was developed in CATIA (Generative Shape Design), meshed in Altair HyperWorks, and structurally solved in SAMCEF, with composite stack optimization also performed using Altair tools.",
      },
    ],
    images: [
      { src: "/images/airbus-helicopters-1.jpg", caption: "H160 Helicopters — Photo by Amaury Lechapelain" },
      "/images/airbus-helicopters-2.png",
    ],
  },
];

