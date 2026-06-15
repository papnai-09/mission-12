import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/Button";
import { InputField } from "@/components/ui/InputField";

export default function Home() {
  return (
    <main className="app-shell">
      <section className="app-panel">
        <div className="app-panel__copy">
          <p className="eyebrow">Mission 12 Design System</p>
          <h1>Reusable components engineered outside the app runtime.</h1>
          <p>
            Button, input, and product card components are authored once and previewed through Storybook
            with controls, state variants, and light/dark rendering.
          </p>
        </div>
        <div className="app-panel__controls">
          <InputField label="Component search" placeholder="Search library" helperText="This is the same component exported to Storybook." />
          <div className="app-panel__actions">
            <Button>Open Storybook</Button>
            <Button variant="secondary">View docs</Button>
          </div>
        </div>
      </section>
      <ProductCard
        name="Studio Headphones"
        category="Audio"
        price="$129"
        imageUrl="/window.svg"
        rating={4.8}
        highlighted
      />
    </main>
  );
}
