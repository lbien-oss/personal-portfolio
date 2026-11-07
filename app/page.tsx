import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Car,
  Code,
  Download,
  Globe,
  Heart,
  Laptop,
  Mail,
  MapPin,
  Monitor,
  PenTool,
  Sparkles,
  User,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Code,
    title: "DEVELOPMENT",
    text: "Clean, efficient and scalable code that brings ideas to life.",
  },
  {
    icon: PenTool,
    title: "UI/UX DESIGN",
    text: "Designing intuitive interfaces that users love to experience.",
  },
  {
    icon: Monitor,
    title: "RESPONSIVE DESIGN",
    text: "Seamless experiences across all devices and screen sizes.",
  },
  {
    icon: Heart,
    title: "USER EXPERIENCE",
    text: "Creating meaningful interactions that solve real problems.",
  },
];

const projects = [
  {
    icon: Globe,
    title: "Personal Portfolio",
    sub: "This website, built with Next.js and shadcn/ui.",
    tags: ["Next.js", "Tailwind", "shadcn/ui"],
    status: "In progress",
  },
  {
    icon: Car,
    title: "Vehicle Rental API",
    sub: "A backend project where I practice building an API.",
    tags: ["REST API", "Backend", "Database"],
    status: "School project",
  },
  {
    icon: Code,
    title: "Small Practice Pages",
    sub: "HTML, CSS and JavaScript exercises from class.",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "Learning",
  },
];

const learning = [
  { name: "HTML & CSS", level: 70, label: "Comfortable" },
  { name: "JavaScript", level: 55, label: "Practicing" },
  { name: "React & Next.js", level: 40, label: "Practicing" },
  { name: "Node.js & Databases", level: 25, label: "Just started" },
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/lbien-oss",
    icon: (
      <>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </>
    ),
  },
  {
    name: "Dribbble",
    href: "#",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
        <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
        <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
      </>
    ),
  },
];

export default function Home() {
  return (
    <main className="w-full bg-gradient-to-b from-[#fff1f5] via-[#fff7f9] to-white text-[#2b1b22]">
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-14 md:grid-cols-2">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold tracking-widest">
            HEY, I'M LYANE <Heart className="h-3 w-3 fill-[#e8467c] text-[#e8467c]" />
          </p>

          <h1 className="mt-4 font-serif text-5xl font-medium leading-tight md:text-6xl">
            Designing digital experiences that{" "}
            <span className="italic text-[#e8467c]">inspire.</span>
          </h1>
          <div className="mt-2 h-[3px] w-48 rounded-full bg-[#e8467c]" />

          <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#6b5560]">
            BSIT student who loves building websites and learning something new
            every day.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-[#e8467c] px-6 py-3 text-xs font-semibold tracking-wider text-white shadow-md shadow-pink-200 hover:bg-[#d93a70]"
            >
              VIEW MY WORK <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 rounded-full border border-[#e8467c] px-6 py-3 text-xs font-semibold tracking-wider text-[#e8467c] hover:bg-[#fde8ee]"
            >
              DOWNLOAD CV <Download className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-8 text-[10px] font-semibold tracking-widest">FIND ME ON</p>
          <div className="mt-3 flex gap-3">
          {socials.map((s) => (
  <a
    key={s.name}
    href={s.href}
    aria-label={s.name}
    title={s.name}
    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f6b8cc] bg-white text-[#e8467c] transition hover:bg-[#fde8ee]"
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      {s.icon}
    </svg>
  </a>
))}
          </div>
        </div>

        <div className="relative mx-auto flex h-80 w-80 items-center justify-center md:h-[26rem] md:w-[26rem]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#fbc4d5] to-[#fde8ee]" />
          <Sparkles className="absolute left-2 top-10 h-6 w-6 text-[#e8467c]" />
          <Sparkles className="absolute bottom-16 right-2 h-5 w-5 text-[#f08ab0]" />
          <Laptop className="relative h-40 w-40 text-white drop-shadow-lg" strokeWidth={1.2} />
          <p className="absolute right-0 top-6 font-serif text-xl italic leading-tight text-[#e8467c]">
            Code
            <br />
            Create
            <br />
            Elevate
          </p>
          <div className="absolute bottom-4 left-0 rounded-2xl bg-white px-4 py-3 text-xs italic text-[#e8467c] shadow-lg shadow-pink-100">
            small steps every day ♡
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 rounded-3xl border border-[#fbd5e0] bg-white/80 p-8 shadow-sm md:grid-cols-[1.2fr_repeat(4,1fr)]">
          <div>
            <p className="flex items-center gap-2 text-[10px] font-semibold tracking-widest">
              ABOUT ME <Sparkles className="h-3 w-3 text-[#e8467c]" />
            </p>
            <h2 className="mt-3 font-serif text-2xl leading-snug">
              I turn ideas into{" "}
              <span className="italic text-[#e8467c]">beautiful</span> and{" "}
              <span className="italic text-[#e8467c]">impactful</span> digital
              realities.
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-[#6b5560]">
              I enjoy blending code with creativity to build web experiences
              that are not only functional but also delightful.
            </p>
            <a
              href="/about"
              className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold tracking-widest text-[#e8467c]"
            >
              MORE ABOUT ME <ArrowRight className="h-3 w-3" />
            </a>
          </div>

          {features.map((f) => (
            <div key={f.title} className="text-center md:border-l md:border-[#fbd5e0] md:pl-6">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fde8ee] text-[#e8467c]">
                <f.icon className="h-6 w-6" />
              </div>
              <p className="mt-4 text-[10px] font-semibold tracking-widest">{f.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-[#6b5560]">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-6 flex items-center justify-between">
          <p className="flex items-center gap-2 text-xs font-semibold tracking-widest">
            MY PRACTICE PROJECTS <Sparkles className="h-3 w-3 text-[#e8467c]" />
          </p>
          <Badge variant="secondary" className="text-[10px]">
            Always improving
          </Badge>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.title}>
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fde8ee] text-[#e8467c]">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <Badge variant="outline" className="text-[10px]">
                    {p.status}
                  </Badge>
                </div>
                <CardTitle className="text-base">{p.title}</CardTitle>
                <CardDescription className="text-xs">{p.sub}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-[10px]">
                    {tag}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <BookOpen className="h-4 w-4 text-[#e8467c]" />
                WHAT I'M LEARNING
              </CardTitle>
              <CardDescription className="text-xs">
                Still a beginner, and getting better step by step.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {learning.map((item) => (
                <div key={item.name}>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-[#6b5560]">{item.label}</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-[#fde8ee]">
                    <div
                      className="h-full rounded-full bg-[#e8467c]"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-2xl leading-snug">
                Want to say{" "}
                <span className="italic text-[#e8467c]">hi?</span>
              </CardTitle>
              <CardDescription className="text-xs">
                I'm open to feedback, tips, and internship opportunities where I
                can learn from other developers.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#e8467c]" /> lbien@gbox.ncf.edu.ph
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-[#e8467c]" /> Triangulo, Naga City
                </li>
                <li className="flex items-center gap-3">
                  <User className="h-4 w-4 text-[#e8467c]" /> Open to internships
                </li>
              </ul>

              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full px-6 text-xs font-semibold tracking-wider"
                )}
              >
                LET'S CONNECT <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-[#e8467c] px-6 py-3 text-xs text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2">
          <p>© 2026 Lyane Khaye Bien. All rights reserved.</p>
          <div className="flex gap-6">
            <span>GitHub</span>
            <span>LinkedIn</span>
            <span>Dribbble</span>
            <span>Instagram</span>
          </div>
        </div>
      </footer>
    </main>
  );
}