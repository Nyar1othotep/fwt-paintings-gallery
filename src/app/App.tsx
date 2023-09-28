import React from "react";

// Widgets
import { HeaderLayout } from "widgets/header";

// Shared
import { Layout } from "shared/ui";

export function App() {
  return <Layout headerSlot={<HeaderLayout />} contentSlot={null} />;
}
