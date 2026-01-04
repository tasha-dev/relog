// Codes by mahdi tasha
// Importing part
import { GenerationType } from "./general";

// Creating and exporting types used in functions of  lib folder
export interface GenerateNoteParamType {
  onStatusChange?: (generationStatus: GenerationType) => void;
  data: {
    title: string;
    repoUrl: string;
  };
}
