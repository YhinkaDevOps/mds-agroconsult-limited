import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Latest from "@/components/Latest";
import Services from "@/components/Services";
import ServicesTwo from "@/components/ServicesTwo";

export default function Home() {
  return (
    <div className="overflow-x-auto">
      <Hero />
      <Services />
      <ServicesTwo />
      <Gallery />
      <Latest />
      <Contact />
    </div>
  );
}
