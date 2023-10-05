// Widgets
import { HeaderLayout } from "widgets/header";

// Shared
import { Layout } from "shared/ui";
import { Filters } from "features/filters";

export function App() {
  return <Layout headerSlot={<HeaderLayout />} contentSlot={<Filters />} />;
}
