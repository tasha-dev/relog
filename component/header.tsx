// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { JSX } from "react";
import { cn } from "@/lib/util";
import { HeaderProps } from "@/type/component";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/image/logo.png";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { Code, SunMoon, Terminal } from "lucide-react";
import { useTheme } from "next-themes";
import useScrolled from "@/hook/useScrolled";

// Creating and exporting Header component as default
export default function Header({ className }: HeaderProps): JSX.Element {
  // Defining hooks
  const { setTheme } = useTheme();
  const scrolled = useScrolled();

  // Returning JSX
  return (
    <header
      data-scrolled={scrolled}
      className={cn(
        "fixed top-0 left-0 w-full z-50 border-b transition-all duration-500",
        "data-[scrolled=true]:backdrop-blur-md data-[scrolled=true]:bg-foreground/5 data-[scrolled=true]:border-b-foreground/10",
        "data-[scrolled=false]:backdrop-blur-none data-[scrolled=false]:border-b-transparent data-[scrolled=false]:bg-transparent",
        className,
      )}
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4 p-4">
        <Link href="/" className="shrink-0">
          <Image
            alt="Logo"
            width={100}
            height={100}
            src={LogoImage.src}
            className="size-10 !m-0"
          />
        </Link>
        <div className="flex items-center justify-between gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button asChild size={"icon-lg"}>
                <Link href="/app">
                  <Terminal />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Start Generating Release Notes</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button asChild size={"icon-lg"}>
                <Link href="https://tasha.vercel.app">
                  <Code />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Mahdi Tasha</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size={"icon-lg"}
                onClick={() =>
                  setTheme((prev) => (prev === "dark" ? "light" : "dark"))
                }
              >
                <SunMoon />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Toggle theme</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </header>
  );
}
