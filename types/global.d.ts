import React from "react";

declare module "react" {
  interface CSSProperties {
    "--spinner-width"?: string;
    "--spinner-height"?: string;
  }
}
