// Codes by mahdi tasha
// Importing part
import { StepProps } from "@/type/component";
import { JSX } from "react";
import ShinyTextAnimation from "@/component/shinyTextAnimation";
import { MoveDown } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/component/ui/card";

// Creating and exporting Step component as default
export default function Step({
  data: { description, title },
  index,
  hasDownArrow = false,
  className,
}: StepProps): JSX.Element {
  // Returning JSX
  return (
    <div className={className}>
      <Card key={index} className="pt-0 overflow-hidden mb-4">
        <div className="h-[150px] bg-foreground/10 flex items-center justify-center">
          <ShinyTextAnimation
            text={`Item No. ${(index + 1).toString().padStart(2, "0")}`}
            className="text-lg"
          />
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
      {hasDownArrow && <MoveDown className="block size-15 mx-auto" />}
    </div>
  );
}
