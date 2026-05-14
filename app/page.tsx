import Hero from "@/components/Hero";
import ByTheNumbers from "@/components/ByTheNumbers";
import TrustedBy from "@/components/TrustedBy";
import Disciplines from "@/components/Disciplines";
import About from "@/components/About";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div className="flex flex-col gap-30 mb-50">
        <Hero/>
        <ByTheNumbers/>
        <TrustedBy/>
        <Disciplines/>
        <About/>
        <Works/>
    </div>
  );
}
