// Widgets
import { PaintingsLayout } from "@/widgets/paintings";

// Features
import { Filters } from "@/features/filters";

export function MainPage() {
  return (
    <>
      <Filters />
      <PaintingsLayout />
    </>
  );
}
