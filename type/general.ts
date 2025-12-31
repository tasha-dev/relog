// Codes by mahdi tasha
// Creating and exporting general types
export type FetchStatusType =
  | "error"
  | "loading-repo"
  | "loading-ai"
  | "success";

export interface DataType {
  content: string;
  title: string;
}
