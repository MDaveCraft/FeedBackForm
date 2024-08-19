import { Form } from "@/components/Form";
import { Separator } from "@/components/ui/separator";
import { messages } from "@/data/index";

export default function Home() {
  return (
    <div className="hidden space-y-6 p-10 pb-16 md:block">
      <div className="space-y-0.5">
        <h1 className="text-4xl font-bold tracking-tight">{messages.Title}</h1>
        <p className="text-muted-foreground">
          { messages.Subtitle }
        </p>
      </div>
      <Separator className="my-6" />
      <Form />
    </div>
  );
}
