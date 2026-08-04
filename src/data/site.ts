export const site = {
  name: "Houston LEAD",
  legalName: "L.E.A.D. Houston",
  acronym: "Lead Exchange And Development",
  tagline: "Empower Growth.",
  subtitle: "Business Networking | Peer Advisory | Growth Development",
  description:
    "Houston LEAD is the premier community for business leaders ready to connect, collaborate, and grow across Greater Houston.",
  email: "info@houstonlead.com",
  videoUrl:
    "https://video.wixstatic.com/video/826f72_0c045376c6c847d5856ab0ae3a293f76/720p/mp4/file.mp4",
  logo: "/logo.png",
  address: {
    street: "Greater Houston Area",
    city: "Houston, TX",
  },
  hours: {
    label: "Chapter meetings",
    time: "Weekday mornings & lunches across Houston",
  },
  mapsUrl: "https://maps.google.com/?q=Houston+TX",
  founded: 2013,
  experienceYears: 20,
  webSupportUrl: "mailto:info@houstonlead.com?subject=Website%20Support",
};

export type SocialLink = {
  name: string;
  href: string;
  platform: "linkedin" | "facebook" | "instagram" | "youtube" | "meetup" | "eventbrite";
  description?: string;
};

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/houston-lead/",
    platform: "linkedin",
    description: "Company updates and professional networking",
  },
  {
    name: "Facebook Group",
    href: "https://www.facebook.com/groups/390143701023687",
    platform: "facebook",
    description: "Houston LEAD Group — open to the public",
  },
  {
    name: "Facebook Page",
    href: "https://www.facebook.com/HoustonLEAD",
    platform: "facebook",
    description: "Official Houston LEAD page",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/houston.lead/",
    platform: "instagram",
    description: "@houston.lead",
  },
];

export const socialCommunities = [
  { name: "Houston LEAD West", href: "https://www.facebook.com/groups/houstonleadwest/" },
  { name: "Houston LEAD North", href: "https://www.facebook.com/groups/houstonleadnorth/" },
  { name: "Houston Women LEADers", href: "https://www.facebook.com/groups/leadhoustonwomenbusinessconnect/" },
  { name: "Houston Networking Community", href: "https://www.facebook.com/groups/houstonnetworkingcommunity/" },
  { name: "Houston Entrepreneurs", href: "https://www.facebook.com/groups/277979762279354" },
  { name: "Conroe Chapter", href: "https://www.facebook.com/ConroeChapter/" },
  { name: "The Woodlands Lunch & Earn", href: "https://www.facebook.com/TheWoodlandsLunchAndEarn/" },
  { name: "LEAD Online Network", href: "https://www.facebook.com/groups/1706178343381230" },
];

export const presidentMessage = {
  author: "R. D. Yoder",
  title: "Co-Founder and President",
  intro: "From the desk of R. D. Yoder —",
  body: [
    "LEAD was founded on a servant leadership model focused on peer advisory, quality referrals, and business growth. Our chapters support one another through ongoing relationships, structured meetings, education, and encouragement.",
    "If you're looking to grow your business or entrepreneurial venture, we invite you to visit a LEAD chapter near you. LEAD is Houston's answer for business networking, peer advisory, and more—with chapters throughout Greater Houston.",
  ],
  questions: [
    "Are you receiving and giving quality referrals?",
    "Are you seeing a strong return on your networking investment?",
    "Do you have trusted peers helping you grow your business?",
  ],
  closing:
    "Our proven LEAD Networking System™ includes structured and quality referrals, weekly meetings, peer support, member tools, social networking opportunities, and a growth plan designed to maximize results. Make this your best year yet—come grow with LEAD.",
};

export const welcomeCopy = {
  heading: "Welcome to Houston LEAD!",
  paragraphs: [
    "Houston LEAD offers more than networking—we provide a strategic environment for business growth, professional development, and peer collaboration.",
    "Our chapters go beyond events to create meaningful, results-driven connections through structured referrals, peer advisory, and practical growth tools.",
    "We call this “Empower Growth”.",
    "Members gain a built-in referral team, sales support network, and trusted peer advisors—working together with purpose and accountability.",
    "Backed by over 20 years of experience, Houston LEAD is committed to helping you reach the next level.",
  ],
  cta: "It's time. Let's grow together!",
};

export const quickLinks = [
  {
    title: "Find A Professional",
    description:
      "Find trusted professionals for your home, finances, or business. Search by category and location.",
    to: "/professionals",
    icon: "◎",
  },
  {
    title: "Find A Chapter",
    description:
      "Chapters across Greater Houston—find one near you and start building powerful connections.",
    to: "/chapters",
    icon: "◈",
  },
  {
    title: "Upcoming Events",
    description: "Check out our calendar of events and learn more about Houston LEAD.",
    to: "/events",
    icon: "◆",
  },
  {
    title: "How To Apply",
    description: "Discover LEAD benefits and apply for membership.",
    to: "/apply",
    icon: "↗",
  },
  {
    title: "Membership",
    description: "Review benefits, tiers, and everything included with Houston LEAD membership.",
    to: "/membership",
    icon: "◉",
  },
  {
    title: "Sponsorships",
    description: "Partner with us—sponsorship options to fit any business budget.",
    to: "/sponsorships",
    icon: "✦",
  },
];

export const faqs = [
  {
    question: "What does LEAD stand for?",
    answer:
      "LEAD stands for Lead Exchange And Development. We focus on business networking, peer advisory, and growth development across Greater Houston.",
  },
  {
    question: "What is Houston LEAD?",
    answer:
      "Houston LEAD is a business networking and professional development organization. Members connect through structured referrals, peer advisory groups, and chapter meetings across Greater Houston.",
  },
  {
    question: "How do chapter meetings work?",
    answer:
      "Each chapter meets weekly at a set time and location—breakfast, lunch, or afternoon sessions. Members share referrals, discuss business challenges, and build trusted relationships with accountability.",
  },
  {
    question: "Can I visit a chapter before joining?",
    answer:
      "Yes. Most chapters welcome guests. Contact info@houstonlead.com or reach out through our contact form and we'll connect you with a chapter near you.",
  },
  {
    question: "What membership levels are available?",
    answer:
      "We offer Basic ($275), Gold ($395), Platinum ($550), and Diamond ($999) annual memberships. Each tier includes core networking benefits with increasing visibility and marketing support.",
  },
  {
    question: "How do I start a new chapter?",
    answer:
      "If you're interested in starting a chapter in your area, email info@houstonlead.com. We'll walk you through the process and connect you with our leadership team.",
  },
];

export const testimonials = [
  {
    quote:
      "Houston LEAD gave me more than contacts—it gave me a referral team. My business grew because people actually know what I do and send qualified leads.",
    author: "Member",
    company: "Financial Services",
    rating: 5,
  },
  {
    quote:
      "The peer advisory aspect is what sets LEAD apart. When I hit a business challenge, I have trusted advisors who've been there.",
    author: "Member",
    company: "Real Estate Professional",
    rating: 5,
  },
  {
    quote:
      "Twenty years of networking experience shows. The structure keeps meetings focused and results-driven—not just another coffee chat.",
    author: "Member",
    company: "Marketing Consultant",
    rating: 5,
  },
];

export const principles = [
  {
    title: "Structured referrals",
    description:
      "Every meeting is designed for meaningful introductions and qualified referrals—not casual card exchanges.",
  },
  {
    title: "Peer advisory",
    description:
      "Trusted members who help guide your business, sales challenges, and growth decisions with real accountability.",
  },
  {
    title: "Results-driven connections",
    description:
      "Chapters go beyond events to create purposeful relationships that elevate your business to the next level.",
  },
  {
    title: "Empower Growth",
    description:
      "Our philosophy: built-in referral teams, sales support networks, and marketing partners working together with purpose.",
  },
  {
    title: "Greater Houston reach",
    description:
      "22+ chapters across the metro area. Your network extends far beyond a single meeting room.",
  },
  {
    title: "20+ years of experience",
    description:
      "Backed by decades of networking and business development expertise, committed to helping you reach the next level.",
  },
];

export const processSteps = [
  {
    title: "Find your chapter",
    description: "Browse chapters by location, day, and time. Find one near your office or target market.",
  },
  {
    title: "Visit as a guest",
    description: "Experience a meeting firsthand. Meet members, understand the culture, and see if LEAD fits your goals.",
  },
  {
    title: "Apply for membership",
    description: "Choose your membership tier and submit your application. One annual fee—no hidden costs.",
  },
  {
    title: "Build your network",
    description: "Get your profile listed, join member groups, and start giving and receiving referrals from day one.",
  },
  {
    title: "Grow together",
    description: "Attend mixers, workshops, and events. Visit other chapters. Let your referral team work for you.",
  },
];

export const capabilities = [
  "Structured Referrals",
  "Peer Advisory",
  "Chapter Networking",
  "Business Development",
  "Lead Generation",
  "Professional Growth",
  "Marketing Partners",
  "Evening Mixers",
  "Leadership Workshops",
  "Community Outreach",
  "Sponsorship Opportunities",
  "Empower Growth",
];

export const communityStats = [
  { label: "Chapters", value: "22+" },
  { label: "Years experience", value: "20+" },
  { label: "Social reach", value: "50K+" },
  { label: "Email subscribers", value: "4K+" },
];

export const chapterAreas = [
  "The Woodlands",
  "Katy",
  "Memorial",
  "Galleria",
  "Energy Corridor",
  "Clear Lake",
  "Pearland",
  "Cypress",
  "Tomball",
  "Conroe",
  "Richmond",
  "Fort Bend",
];
