export type Benefit = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: string;
};

export const benefits: Benefit[] = [
  {
    slug: "structured-referrals",
    title: "Structured Referrals",
    shortTitle: "Referrals",
    tagline: "A built-in referral team working with purpose and accountability.",
    description:
      "Share leads, referrals, and introductions with members who understand your business. LEAD's structured format ensures every meeting drives real connections—not just card swaps.",
    icon: "↗",
  },
  {
    slug: "peer-advisory",
    title: "Peer Advisory",
    shortTitle: "Peer Advisory",
    tagline: "Trusted advisors for business, sales, and growth challenges.",
    description:
      "Access a network of experienced professionals who help guide your decisions. When you face a challenge, your LEAD peers have been there.",
    icon: "◎",
  },
  {
    slug: "chapter-network",
    title: "Chapter Network",
    shortTitle: "Chapters",
    tagline: "22+ chapters across Greater Houston—find your home base.",
    description:
      "Your home chapter is where you network and grow weekly. Visit other chapters across the metro area to expand your reach even further.",
    icon: "◈",
  },
  {
    slug: "professional-profile",
    title: "Professional Profile",
    shortTitle: "Profile",
    tagline: "Get listed on the Houston LEAD website and member directory.",
    description:
      "Your business profile helps other members and the public find trusted professionals by category and location.",
    icon: "◉",
  },
  {
    slug: "marketing-partners",
    title: "Marketing Partners",
    shortTitle: "Marketing",
    tagline: "Members who promote your business online and in the community.",
    description:
      "Other members don't just send leads—they market your company via word of mouth, social media, and the business community.",
    icon: "✦",
  },
  {
    slug: "events-mixers",
    title: "Events & Mixers",
    shortTitle: "Events",
    tagline: "Evening mixers, luncheons, workshops, and annual celebrations.",
    description:
      "Beyond weekly chapter meetings, LEAD hosts networking mixers, leadership panels, and community outreach events throughout the year.",
    icon: "◆",
  },
];
