import u1 from "@/assets/universe-1.jpg";
import u2 from "@/assets/universe-2.jpg";
import u3 from "@/assets/universe-3.jpg";
import u4 from "@/assets/universe-4.jpg";
import u5 from "@/assets/universe-5.jpg";

export type Metric = { label: string; value: number };

export type Universe = {
  id: string;
  name: string;
  role: string;
  tagline: string;
  match: number;
  salary: string;
  salaryNum: number;
  lifestyle: number;
  happiness: number;
  growth: number;
  balance: number;
  impact: number;
  image: string;
  accent: string;
  story: string;
  dayInLife: { time: string; moment: string }[];
  timeline: { year: string; title: string; detail: string }[];
  skills: { name: string; level: number }[];
  futureSelfBio: string;
  sampleChat: { role: "future" | "you"; text: string }[];
};

export const universes: Universe[] = [
  {
    id: "neon-architect",
    name: "The Neon Architect",
    role: "Principal Product Designer · Generative UX",
    tagline: "You design the interfaces humanity will live inside.",
    match: 94,
    salary: "$248k",
    salaryNum: 248,
    lifestyle: 88,
    happiness: 91,
    growth: 86,
    balance: 78,
    impact: 84,
    image: u1,
    accent: "from-fuchsia-500/40 to-violet-500/20",
    story:
      "In this universe, you lead a small studio shaping the visual language of AI-native products. Your work feels less like a job and more like worldbuilding.",
    dayInLife: [
      { time: "07:30", moment: "Slow coffee. Sketch a new motion system on the iPad balcony." },
      { time: "10:00", moment: "Critique with your design team — three new product surfaces." },
      { time: "13:30", moment: "Co-create a generative interface with a senior ML engineer." },
      { time: "17:00", moment: "Walk home through the city, voice-noting tomorrow's idea." },
      { time: "21:00", moment: "Read essays on craft. Sleep early. You earned it." },
    ],
    timeline: [
      { year: "Year 1", title: "Senior Designer", detail: "You ship a small but beloved product. People notice your taste." },
      { year: "Year 5", title: "Design Lead", detail: "You build a team of 6 and define a design language for AI tools." },
      { year: "Year 10", title: "Studio Founder", detail: "Your small studio becomes the go-to partner for ambitious founders." },
      { year: "Year 15", title: "Cultural Voice", detail: "You teach, write, and shape how a generation thinks about interfaces." },
    ],
    skills: [
      { name: "Generative UX", level: 92 },
      { name: "Motion Design", level: 88 },
      { name: "Storytelling", level: 90 },
      { name: "Systems Thinking", level: 84 },
      { name: "Prompt Engineering", level: 80 },
    ],
    futureSelfBio:
      "I'm you, ten years from now. Calmer. More confident. Still a little afraid of shipping — but I do it anyway.",
    sampleChat: [
      { role: "you", text: "Was it worth leaving the safe job?" },
      { role: "future", text: "Every single time. The first year was scary. Year three made me cry from joy." },
      { role: "you", text: "What would you tell me to start now?" },
      { role: "future", text: "Build one tiny thing every weekend. Share it. The taste compounds." },
    ],
  },
  {
    id: "quantum-scholar",
    name: "The Quantum Scholar",
    role: "AI Research Scientist · Computational Biology",
    tagline: "You decode the universe one model at a time.",
    match: 89,
    salary: "$312k",
    salaryNum: 312,
    lifestyle: 74,
    happiness: 86,
    growth: 94,
    balance: 70,
    impact: 96,
    image: u2,
    accent: "from-cyan-400/40 to-sky-500/20",
    story:
      "In this universe, you trade comfort for curiosity. You publish work that moves frontiers — slowly, then suddenly all at once.",
    dayInLife: [
      { time: "06:30", moment: "Run by the river. Whiteboards in your head." },
      { time: "09:00", moment: "Lab standup. You disagree gently with three brilliant people." },
      { time: "12:00", moment: "Lunch with a PhD student. They leave inspired. So do you." },
      { time: "16:00", moment: "Train a model overnight. Pray. Iterate." },
      { time: "22:00", moment: "Read a paper in bed. Mark it up like a love letter." },
    ],
    timeline: [
      { year: "Year 1", title: "Research Scientist II", detail: "First paper accepted. You frame it on the wall." },
      { year: "Year 5", title: "Senior Scientist", detail: "Lead a team of 4 on a mission that matters." },
      { year: "Year 10", title: "Lab Director", detail: "Your lab is cited everywhere. Quietly proud." },
      { year: "Year 15", title: "Field Defining Researcher", detail: "Students name a method after you." },
    ],
    skills: [
      { name: "ML Research", level: 95 },
      { name: "Math Foundations", level: 90 },
      { name: "Scientific Writing", level: 86 },
      { name: "Mentorship", level: 78 },
      { name: "Experimental Design", level: 88 },
    ],
    futureSelfBio: "Curiosity got us here. It will keep us going.",
    sampleChat: [
      { role: "you", text: "Is it lonely?" },
      { role: "future", text: "Sometimes. But the questions are better company than I expected." },
    ],
  },
  {
    id: "skyline-founder",
    name: "The Skyline Founder",
    role: "Co-founder & CEO · AI Infrastructure",
    tagline: "You build the rails the next decade runs on.",
    match: 86,
    salary: "$420k+",
    salaryNum: 420,
    lifestyle: 70,
    happiness: 82,
    growth: 98,
    balance: 58,
    impact: 92,
    image: u3,
    accent: "from-purple-500/40 to-indigo-500/20",
    story:
      "In this universe you take the leap. The first 18 months are brutal. The next ten years redefine what you thought you were capable of.",
    dayInLife: [
      { time: "06:00", moment: "Gym. The only quiet hour you control." },
      { time: "09:00", moment: "Founders' standup. Customers, hiring, fires — in that order." },
      { time: "14:00", moment: "Investor sync. You used to be nervous. Not anymore." },
      { time: "19:00", moment: "Dinner with the team. You laugh more than you expected." },
      { time: "23:30", moment: "Inbox zero. One last walk under the city's lights." },
    ],
    timeline: [
      { year: "Year 1", title: "Garage Mode", detail: "Two co-founders, three customers, zero sleep." },
      { year: "Year 5", title: "Series B", detail: "60 people, real revenue, real responsibility." },
      { year: "Year 10", title: "Category Leader", detail: "You define the category you once searched for." },
      { year: "Year 15", title: "Investor & Mentor", detail: "You write checks for the people you used to be." },
    ],
    skills: [
      { name: "Product Vision", level: 94 },
      { name: "Hiring & Leadership", level: 88 },
      { name: "Storytelling", level: 90 },
      { name: "Systems & Ops", level: 80 },
      { name: "Resilience", level: 96 },
    ],
    futureSelfBio: "It almost broke me. It also made me. Both are true.",
    sampleChat: [
      { role: "you", text: "How do you know if I'm built for this?" },
      { role: "future", text: "You aren't yet. Neither was I. You build the version of yourself that is." },
    ],
  },
  {
    id: "orbital-explorer",
    name: "The Orbital Explorer",
    role: "Mission Systems Engineer · Space Habitats",
    tagline: "You help humanity become a multi-planet species.",
    match: 81,
    salary: "$196k",
    salaryNum: 196,
    lifestyle: 78,
    happiness: 92,
    growth: 88,
    balance: 74,
    impact: 98,
    image: u4,
    accent: "from-sky-400/40 to-blue-500/20",
    story:
      "In this universe you trade the office for mission control. Every launch is a heartbeat. Every success belongs to humanity.",
    dayInLife: [
      { time: "07:00", moment: "Briefing. Today's payload, today's risk." },
      { time: "11:00", moment: "Sim runs. Catch a failure mode before it catches you." },
      { time: "15:00", moment: "Crew sync with the orbital team. They wave through a window in space." },
      { time: "19:30", moment: "Dinner with engineers who feel like family." },
      { time: "22:00", moment: "Stargazing from the parking lot. Still in awe." },
    ],
    timeline: [
      { year: "Year 1", title: "Systems Engineer", detail: "First launch. You cry a little. Everyone does." },
      { year: "Year 5", title: "Mission Lead", detail: "You own a critical subsystem on a flagship program." },
      { year: "Year 10", title: "Program Director", detail: "Your decisions ride on rockets." },
      { year: "Year 15", title: "Visionary", detail: "Younger engineers call your work foundational." },
    ],
    skills: [
      { name: "Systems Engineering", level: 92 },
      { name: "Aerospace", level: 86 },
      { name: "Risk Modeling", level: 88 },
      { name: "Leadership", level: 80 },
      { name: "Calm Under Fire", level: 94 },
    ],
    futureSelfBio: "We picked the hard thing. The view is worth it.",
    sampleChat: [
      { role: "you", text: "Did the math get easier?" },
      { role: "future", text: "No. But you got better. Same outcome, different path." },
    ],
  },
  {
    id: "lumen-storyteller",
    name: "The Lumen Storyteller",
    role: "Independent Filmmaker · Immersive Worlds",
    tagline: "You make stories that change how people feel about being alive.",
    match: 78,
    salary: "$132k",
    salaryNum: 132,
    lifestyle: 92,
    happiness: 95,
    growth: 76,
    balance: 86,
    impact: 88,
    image: u5,
    accent: "from-violet-400/40 to-fuchsia-500/20",
    story:
      "In this universe, you make less money and more meaning. Your work travels further than you ever do, and it returns home with strangers' tears.",
    dayInLife: [
      { time: "08:30", moment: "Slow morning. Journal. Tea. A short film idea." },
      { time: "11:00", moment: "Edit suite. Cut a scene that finally clicks." },
      { time: "15:00", moment: "Coffee with a writer you admire. They become a collaborator." },
      { time: "19:00", moment: "Screening night. Whispered laughter from the back row." },
      { time: "23:00", moment: "Walk home. The city looks like a movie." },
    ],
    timeline: [
      { year: "Year 1", title: "First Short", detail: "Premieres at a small festival. You feel changed." },
      { year: "Year 5", title: "Award Circuit", detail: "Your second feature wins something that matters to you." },
      { year: "Year 10", title: "Studio of One", detail: "You run a tiny studio that punches far above its weight." },
      { year: "Year 15", title: "Voice of a Generation", detail: "Your work is taught. You teach it back differently." },
    ],
    skills: [
      { name: "Visual Storytelling", level: 96 },
      { name: "Directing", level: 88 },
      { name: "Writing", level: 90 },
      { name: "Producing", level: 78 },
      { name: "Generative Tools", level: 84 },
    ],
    futureSelfBio: "I traded certainty for meaning. I would do it again tomorrow.",
    sampleChat: [
      { role: "you", text: "Was the money okay?" },
      { role: "future", text: "Enough. Always enough. The richness was elsewhere." },
    ],
  },
];

export const getUniverse = (id: string) => universes.find((u) => u.id === id);
