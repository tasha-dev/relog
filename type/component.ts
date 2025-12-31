// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";
import { DataType, GenerationType } from "./general";

// Creating and exporting type of props for components
export interface RootLayoutProps {
  children: ReactNode;
}

export interface LetterGlitchBgProps {
  className?: string;
}

export interface HeaderProps {
  className?: string;
}

export interface ShinyTextAnimationProps {
  className?: string;
  text: string;
}

export interface StepProps {
  className?: string;
  hasDownArrow?: boolean;
  index: number;
  data: {
    title: string;
    description: string;
  };
}

export interface GenerateFormProps {
  className?: string;
  onStatusChange?: (generationStatus: GenerationType) => void;
}

export interface MarkdownEditorProps {
  generation: GenerationType;
  className?: string;
}

export interface MarkdownRenderProps {
  generation: GenerationType;
}
