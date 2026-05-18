export const site = {
  name: "Olympic Builders",
  tagline: "Park City's Premier General Contractor",
  phone: "385-252-8213",
  phoneTel: "3852528213",
  email: "olympicbuildersutah@gmail.com",
  owner: "Lee Zenger",
  serviceAreas: ["Park City"],
  serviceAreaDescription:
    "Park City and surrounding Summit County — including Deer Valley, Old Town, and the Canyons.",
  since: 2000,
  heroSubtext:
    "From custom mountain homes to luxury remodels, Olympic Builders delivers the craftsmanship Park City homeowners expect—and the personal accountability only a local, owner-led team can provide.",
  about: {
    title: "About Olympic Builders",
    subtitle: "The general contractor Park City trusts",
    body: "For more than two decades, Olympic Builders has been the name Park City homeowners call when quality cannot be compromised. Led by Lee Zenger, our locally owned team builds and renovates mountain homes across Park City—from Deer Valley and the Canyons to Old Town and beyond. We understand alpine construction, local codes, and the standards this community demands. When you want a builder who treats your home like their own, you want Olympic Builders.",
    experienceLine: "Park City's trusted builder since 2000",
  },
  quote: {
    text: "In Park City, your home is more than an investment—it's where you live your best life. My promise is to bring honesty, expert craftsmanship, and respect for your vision to every project we take on.",
    author: "Lee Zenger",
  },
  services: [
    {
      id: "new-construction",
      title: "New Construction",
      description:
        "We build custom homes and commercial spaces designed for Park City's altitude, weather, and architectural character. From groundbreaking to final walkthrough, Lee and our team manage every detail with precision.",
      icon: "HomeWork" as const,
    },
    {
      id: "bathrooms",
      title: "Custom Bathrooms",
      description:
        "Elevate your mountain home with spa-quality baths built to Park City's exacting standards—heated floors, steam showers, and stone and tile work crafted to perform through every season.",
      icon: "Bathtub" as const,
    },
    {
      id: "kitchens",
      title: "Custom Kitchens",
      description:
        "The kitchen is the heart of a Park City home. We design and build chef-ready kitchens with premium cabinetry, stonework, and layouts tailored to how you live and entertain at elevation.",
      icon: "Kitchen" as const,
    },
    {
      id: "remodeling",
      title: "Home Remodeling",
      description:
        "Whether you're updating a ski condo, expanding a primary residence, or refreshing a legacy property, we deliver full-home remodels that increase comfort, value, and curb appeal—on timeline and with clear communication.",
      icon: "Handyman" as const,
    },
  ],
  whyUs: [
    {
      title: "Park City Specialists",
      description:
        "We focus exclusively on Park City—so you get a contractor who knows this market, these inspectors, and the unique challenges of mountain building inside and out.",
    },
    {
      title: "Uncompromising Quality",
      description:
        "We source materials and trades that meet the expectations of Park City's most discerning homeowners—finishes that look exceptional on day one and perform for decades.",
    },
    {
      title: "Owner-Led Accountability",
      description:
        "Lee Zenger is personally involved in your project—not handed off to a faceless crew. That is why Park City clients refer Olympic Builders again and again.",
    },
  ],
  projects: [
    {
      id: "project-1",
      title: "New Construction",
      caption: "Custom mountain home — Deer Valley",
      image: "/images/project-1.jpg",
    },
    {
      id: "project-2",
      title: "Custom Kitchen",
      caption: "Chef's kitchen renovation — Park City",
      image: "/images/project-2.jpg",
    },
    {
      id: "project-3",
      title: "Custom Bathroom",
      caption: "Luxury bath remodel — Old Town",
      image: "/images/project-3.jpg",
    },
    {
      id: "project-4",
      title: "Home Remodel",
      caption: "Whole-home update — Park City",
      image: "/images/project-4.jpg",
    },
    {
      id: "project-5",
      title: "Commercial Build",
      caption: "Commercial build — Park City",
      image: "/images/project-5.jpg",
    },
    {
      id: "project-6",
      title: "Interior Remodel",
      caption: "Interior transformation — Summit County",
      image: "/images/project-6.jpg",
    },
  ],
  sections: {
    services: {
      title: "Services We Offer",
      subtitle: "Expert general contracting for Park City homes and businesses",
    },
    projects: {
      title: "Past Projects",
      subtitle:
        "Representative work across Park City and Summit County. Replace these photos with your completed projects when ready.",
    },
    whyUs: {
      title: "Why Choose Us",
      subtitle: "The contractor Park City homeowners recommend",
    },
    contact: {
      title: "Get In Touch",
      subtitle:
        "Ready to start your Park City project? Call or email Lee Zenger to discuss your project.",
    },
  },
  images: {
    hero: "/images/hero.jpg",
    logo: "/images/olympic-builder-logo.PNG",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
