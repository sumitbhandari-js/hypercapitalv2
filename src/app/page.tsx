import Image from "next/image";
import { Slider } from "../views/home/slider";
import { About } from "../views/home/about";
import { Expertise } from "../views/home/expertise";
import { Service } from "../views/home/service";
import { WhychooseUs } from "../views/home/whychooseus";
import { ServiceMarquee } from "../views/home/serviceMarquee";
import { FinancialSolutions } from "../views/home/FinancialSolutions";
import { MicroInvestment } from "../views/home/MicroInvestment";
import { InterestsCommodities } from "../views/home/InterestsCommodities";
import { CollaborativePartnerships } from "../views/home/CollaborativePartnerships";

export default function Home() {
  return (
    <>
      <Slider />
      <About />
      <Expertise />
      <Service />
      <ServiceMarquee />
      <WhychooseUs />
      <FinancialSolutions />
      <MicroInvestment />
      <InterestsCommodities />
      <CollaborativePartnerships />
    </>
  );
}
