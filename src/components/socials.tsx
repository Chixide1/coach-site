import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from '../payload.config'
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export async function Socials(){
  const socials = await getPayloadHMR({config})
    .then(async payload => await payload.findByID({
      collection: 'pages',
      id: 1
    }))
    .then(pages => pages.links)

  function getLogo(logo: string){

    switch(logo){
      case 'linkedin':
        return <Linkedin className="w-[1em] h-[1em]"/>
      case 'instagram':
        return <Instagram className="w-[1em] h-[1em]"/>
      case 'facebook':
        return <Facebook className="w-[1em] h-[1em]"/>
      case 'email':
        return <Mail className="w-[1em] h-[1em]"/>
    }
  }

  return(
    <div className="flex gap-4 w-fit justify-center mx-auto mt-auto">
      {socials?.map(social => (
        <Link href={social.link.url ? social.link.url:''} target={social.link.newTab ? '_blank':'_self'}
        key={social.id} className={`text-4xl transtion duration-700 hover:text-secondary text-primary p-1`}>
          {getLogo(social.link.name)}
        </Link>
      ))}
    </div>
  )
}