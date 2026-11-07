import { Card, CardContent } from "@/components/ui/card";
import {
  Camera,
  Gamepad2,
  Headphones,
  MapPin,
  Tv,
  Utensils,
} from "lucide-react";

const hobbies = [
  {
    icon: Camera,
    title: "Taking Photos",
    description:
      "I love taking pictures of places, food, and moments with friends and family.",
  },
  {
    icon: MapPin,
    title: "Going Out & Exploring",
    description:
      "I enjoy going to new places and exploring, especially with people I like being around.",
  },
  {
    icon: Utensils,
    title: "Trying New Food",
    description:
      "I like eating out and finding new places and dishes to try.",
  },
  {
    icon: Tv,
    title: "Watching K-Dramas",
    description:
      "K-dramas are my go-to when I want to relax and unwind.",
  },
  {
    icon: Gamepad2,
    title: "Playing Online Games",
    description:
      "I play online games with friends to have fun and take a break from studying.",
  },
  {
    icon: Headphones,
    title: "Listening to Music",
    description:
      "Music helps me relax, and it's always on while I study or code.",
  },
];

export default function Hobbies() {
  return (
    <main className="mx-auto w-full max-w-4xl space-y-6 px-6 py-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Hobbies & Interests</h1>
        <p className="text-sm text-muted-foreground">
          What I enjoy doing outside of coding.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {hobbies.map((hobby) => (
          <Card key={hobby.title}>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
                  <hobby.icon className="h-4 w-4" />
                </div>
                <p className="text-sm font-semibold">{hobby.title}</p>
              </div>
              <p className="text-xs text-muted-foreground">{hobby.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}