export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Courses", href: "/courses" },
  { label: "Team", href: "/team" },
];

export const services = [
  {
    title: "Website Development",
    description:
      "Crafting modern web experiences with performance, polished design, and dependable architecture.",
  },
  {
    title: "Business Systems",
    description:
      "Building enterprise-grade systems that streamline operations, workflows, and digital transformation.",
  },
  {
    title: "Application Development",
    description:
      "Launching mobile and web applications with intelligent interfaces and long-term scalability.",
  },
];

export const products = [
  {
    title: "IT Asset Management System",
    description:
      "Centralize infrastructure and lifecycle data for smarter IT decision-making across teams.",
  },
];

export const courses: { title: string; badge?: string; difficulty?: string; duration?: string; description?: string }[] = [];

export const projects: { category?: string; title?: string; description?: string; stack?: string[] }[] = [
  {
    category: "Education",
    title: "Easy Java",
    description: "A beginner-friendly Java learning project and companion app for hands-on exercises.",
    stack: [],
  },
];
