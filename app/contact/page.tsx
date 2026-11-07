import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const info = [
  { icon: Mail, label: "Email", value: "lbien@gbox.ncf.edu.ph" },
  { icon: Phone, label: "Phone", value: "09551921263" },
  { icon: MapPin, label: "Location", value: "Triangulo, Naga City, Philippines" },
];

export default function Contact() {
  return (
    <main className="mx-auto w-full max-w-4xl space-y-6 px-6 py-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Contact Me</h1>
        <p className="text-sm text-muted-foreground">
          Have a question or just want to say hi? Feel free to reach out below.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr_2fr]">
        <div className="space-y-4">
          {info.map((item) => (
            <Card key={item.label}>
              <CardContent className="flex items-center gap-3">
                <item.icon className="h-4 w-4" />
                <div>
                  <p className="text-[10px] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="text-xs font-medium">{item.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Send a Message</CardTitle>
            <CardDescription className="text-xs">
              Fill out the form below and I&apos;ll get back to you soon.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1">
                <label className="text-xs font-medium">Name</label>
                <Input placeholder="Your name" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium">Email</label>
                <Input type="email" placeholder="your@email.com" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium">Subject</label>
              <Input placeholder="Hello / Feedback / Opportunity" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium">Message</label>
              <Textarea placeholder="Your message here..." />
            </div>
            <Button type="button" size="sm">
              <Send className="mr-2 h-3 w-3" />
              Send Message
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}