export type MembershipTier = {
  slug: string;
  name: string;
  price: number;
  description: string;
  highlights: string[];
  featured?: boolean;
};

export const membershipBenefits = [
  "Home base chapter for weekly networking",
  "Professional Houston LEAD name tag",
  "Profile and listing on Houston LEAD website",
  "Access to members-only Facebook and LinkedIn groups",
  "Peer advisory group access",
  "Structured referral sharing with members",
  "Visit other LEAD chapters across Greater Houston",
  "Marketing partner opportunities",
  "Networking events: mixers, luncheons, and more",
  "Discounted rates on advertising and sponsorship",
  "No additional fees—yearly one-time membership",
];

export const membershipTiers: MembershipTier[] = [
  {
    slug: "basic",
    name: "Basic",
    price: 275,
    description: "Everything you need to start building your referral network.",
    highlights: ["All core member benefits", "Chapter home base", "Member directory listing"],
  },
  {
    slug: "gold",
    name: "Gold",
    price: 395,
    description: "Enhanced visibility with a featured Gold member profile.",
    highlights: [
      "All Basic benefits",
      "Special profile on Gold member page",
      "Listed in monthly LEAD newsletter with link",
    ],
    featured: true,
  },
  {
    slug: "platinum",
    name: "Platinum",
    price: 550,
    description: "Premium placement and newsletter recognition.",
    highlights: [
      "All Gold benefits",
      "Special profile on Platinum member page",
      "Featured in monthly newsletter with link",
    ],
  },
  {
    slug: "diamond",
    name: "Diamond",
    price: 999,
    description: "Maximum exposure across all LEAD platforms.",
    highlights: [
      "All Platinum benefits",
      "Logo and hotlink on website homepage",
      "Featured company overview in newsletter",
      "2× free email marketing to distro lists per year",
    ],
  },
];

export const sponsorshipTypes = [
  {
    title: "Exclusive Partner",
    description: "Be the only sponsor in your industry category with maximum visibility.",
  },
  {
    title: "Continuous Partner",
    description: "Year-round brand presence across platforms, events, and communications.",
  },
  {
    title: "Event Sponsorship",
    description: "Single-event packages for mixers, luncheons, workshops, and celebrations.",
  },
];

export const sponsorshipAudience = [
  { label: "Social media followers", value: "50,000+" },
  { label: "Email subscribers", value: "4,000+" },
  { label: "Event attendees", value: "Members & guests" },
];
