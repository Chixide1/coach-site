import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from '../payload.config'

export async function Socials(){
  const socials = await getPayloadHMR({config})
    .then(async payload => await payload.findByID({
      collection: 'pages',
      id: 1
    }))
    .then(pages => pages.links)
  
  console.log(socials)

  return(
    <></>
  )
}