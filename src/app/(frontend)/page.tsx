import { About } from "@/components/about";
import Intro from "@/components/intro";
import Services from "@/components/services";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from '../../payload.config'
import {AboutBlock, IntroBlock, ServicesBlock} from '../../lib/block-types'

export default async function Homepage(){
  const payload = await getPayloadHMR({ config })

  const home = await payload.findByID({
    collection: 'pages',
    id: 1,
    depth: 1
  })

  const about = home.content?.find(section => section.blockName === 'About') as AboutBlock
  const services = home.content?.find(section => section.blockName === 'Services') as ServicesBlock
  const intro = home.content?.find(section => section.blockName === 'Intro') as IntroBlock

  return (
  <main>
    <Intro intro={intro} />
    <About about={about}/>
    <Services services={services}/>
  </main>
  )
}