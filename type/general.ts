// Codes by mahdi tasha
// Creating and exporting general types
export interface DataType {
  content: string;
  title: string;
}

export type GenerationType =
  | {
      status: "idle";
    }
  | {
      status: "error";
      error: string;
    }
  | {
      status: "loading-repo";
    }
  | {
      status: "loading-ai";
    }
  | {
      status: "success";
      data: DataType;
    };
