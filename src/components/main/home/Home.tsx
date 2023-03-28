import Hero from "./hero/Hero";
import { About } from "./about/About";
import { ShowProjects } from "./slider/ShowProjects";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />

      <ShowProjects />
    </>
  );
};
