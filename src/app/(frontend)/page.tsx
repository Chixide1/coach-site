import { About } from "@/components/about";
import Intro from "@/components/intro";
import Services from "@/components/services";

export default async function Homepage(){
  return (
  <main>
    <Intro/>
    <About/>
  </main>
  )
}