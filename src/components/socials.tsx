import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from '../payload.config'
import Link from "next/link";

export async function Socials(){
  const socials = await getPayloadHMR({config})
    .then(async payload => await payload.findByID({
      collection: 'pages',
      id: 1
    }))
    .then(pages => pages.links)

  return(
    <div className="flex gap-4  mt-4">
      {socials?.map(social => (
        <Link href={social.link.url ? social.link.url:''} target={social.link.newTab ? '_blank':'_self'}
        className={`fa-brands fa-${social.link.name} text-2xl text-secondary transtion duration-700 hover:scale-110`}/>
      ))}
    </div>
  )
}