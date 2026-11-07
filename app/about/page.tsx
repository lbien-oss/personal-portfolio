import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "HTML & CSS",
  "JavaScript",
  "React & Next.js",
  "Tailwind CSS",
  "Git & GitHub",
  "Shadcn UI",
];

const learning = [
  "TypeScript",
  "Node.js & Express",
  "MySQL / Oracle",
  "REST APIs",
];

export default function About() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-6 px-6 py-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
        <p className="text-sm text-muted-foreground">
          Student, beginner developer, and always learning.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">My Story</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-xs leading-relaxed text-muted-foreground">
          <p>
            Hi, I’m Lyane Khaye Bien, a BSIT student from the Philippines. I’m
            just getting started in web development and I’m trying to learn a
            little more every day. I’m still at the beginner stage, but I
            really enjoy the process of building something and seeing it work.
          </p>
          <p>
            I started learning to code when we had a programming subject in
            school. Since then, I’ve been trying out tools like HTML, CSS,
            JavaScript, React, and Next.js, mostly by making small practice
            projects. I make a lot of mistakes along the way, but that’s how
            I’m learning.
          </p>
          <p>
            This portfolio is a place where I can keep track of what I’ve built
            and how much I’ve improved. I’m open to feedback, and I’m hoping to
            find opportunities like internships where I can learn from other
            developers.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Skills & Technologies</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-[10px]">
              {skill}
            </Badge>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Currently Learning</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {learning.map((item) => (
            <Badge key={item} variant="outline" className="text-[10px]">
              {item}
            </Badge>
          ))}
        </CardContent>
      </Card>
    </main>
  );
}