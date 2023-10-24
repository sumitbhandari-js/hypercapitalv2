import Image from "next/image";
import { Slider } from "./views/home/slider";
import { About } from "./views/home/about";
import { Expertise } from "./views/home/expertise";
import { Service } from "./views/home/service";

export default function Home() {
  return (
    <>
      <Slider />
      <About />
      <Expertise />
      <Service />
    </>
  );
}
