import { Card, CardContent } from "@/components/ui/card";
import { Award, GraduationCap } from "lucide-react";

const education = [
  {
    title: "BS in Information Technology",
    school: "Naga College Foundation",
    years: "2025 - Present",
    description:
      "Studying programming, databases, and web development while building small practice projects.",
    highlights: [
      "Started learning to code in a programming subject",
      "Building small projects with React and Next.js",
    ],
  },
  {
    title: "Senior High School",
    school: "ACLC Naga",
    years: "2023 - 2025",
    description: "Completed the TVL track, ICT strand.",
    highlights: [
      "Learned the basics of computer systems and troubleshooting",
      "Got my first taste of programming and web design",
      "Completed work immersion in an ICT-related setting",
    ],
  },
  {
    title: "Junior High School",
    school: "Cararayan National High School",
    years: "2019 - 2023",
    description:
      "Built a foundation in computer literacy, math, and problem solving.",
    highlights: [
      "Learned basic computer skills in ICT / TLE class",
      "First time using computers for school projects",
    ],
  },
];

export default function Education() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-6 px-6 py-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Education</h1>
        <p className="text-sm text-muted-foreground">
          My academic journey so far.
        </p>
      </div>

      {education.map((item) => (
        <Card key={item.title}>
          <CardContent className="space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.school}</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">{item.years}</span>
            </div>

            <p className="text-xs text-muted-foreground">{item.description}</p>

            {item.highlights.length > 0 && (
              <div>
                <p className="flex items-center gap-1 text-xs font-semibold">
                  <Award className="h-3 w-3" />
                  Key Highlights
                </p>
                <ul className="mt-1 list-disc space-y-1 pl-6 text-xs text-muted-foreground">
                  {item.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </main>
  );
}