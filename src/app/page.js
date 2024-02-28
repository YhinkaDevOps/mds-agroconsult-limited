import Hero from "@/components/Hero";
import Latest from "@/components/Latest";
import Products from "@/components/Products";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Products />
      <Latest />
    </div>
  );
}
