// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { ShinyTextAnimationProps } from "@/type/component";
import { JSX } from "react";
import ShinyText from "./ui/shinyText";

// Creating and eporting ShinyTextAnimation component as default
export default function ShinyTextAnimation({
  text,
  className,
}: ShinyTextAnimationProps): JSX.Element {
  // Returning JSX
  return <ShinyText text={text} className={className} />;
}
