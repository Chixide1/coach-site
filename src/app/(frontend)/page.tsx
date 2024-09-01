import { About } from "@/components/about";
import Intro from "@/components/intro";
import Services from "@/components/services";
import Title from "@/components/title";

export default async function Home(){

  return (
  <main>
    <Intro/>
    <Title/>
    <About/>
  </main>
  )
}