// Codes by mahdi tasha
// Forcing next.js to render used components of this hook render by client side
"use client";

// Importing part
import { useEffect, useState } from "react";

// Creating and exporting useScrolled custom hook as default
export default function useScrolled(): boolean {
  // Defining inner states
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Using useEffect to set event listener to dom
  useEffect(() => {
    // Defining event handler function
    const eventHandler = () => setScrolled(window.scrollY !== 0);

    // Adding event listener
    window.addEventListener("scroll", eventHandler);

    // removing event listener
    return () => window.removeEventListener("scroll", eventHandler);
  }, []);

  // Returning part
  return scrolled;
}
