import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from '../payload.config'
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { Page } from "@/payload-types";

type SocialsBlock = {
  links?:
  {
    link: {
      name: string;
      type?: ('reference' | 'custom') | null;
      newTab?: boolean | null;
      reference?: {
        relationTo: 'pages';
        value: number | Page;
      } | null;
      url?: string | null;
      label: string;
    };
    id?: string | null;
  }[]
  | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'socials';
}

type SocialsProps = {
  direction?: 'vertical' | 'horizontal'
  color?: 'blue' | 'white'
  className?: string
}

const variants = {
  'blue': 'text-secondary',
  'white': 'text-white',
  'vertical': 'md:flex-col',
  'horizontal': 'md:flex-row'
}

export async function Socials({ direction = 'vertical', color = 'blue', className }: SocialsProps) {
  const home = await getPayloadHMR({ config }).then(
    async payload => await payload.findByID({
      collection: 'pages',
      id: 1
    })
  )

  const socials = home.content?.find(section => section.blockName === 'Socials') as SocialsBlock

    function getLogo(logo: string){
      switch (logo) {
        case 'linkedin':
          return <Linkedin className="w-[1em] h-[1em]" />
        case 'instagram':
          return <Instagram className="w-[1em] h-[1em]" />
        case 'facebook':
          return <Facebook className="w-[1em] h-[1em]" />
        case 'email':
          return <Mail className="w-[1em] h-[1em]" />
      }
    }

  return (
    <div className={`flex ${variants[direction]} gap-4 w-fit items-center ` + className}>
      {socials.links?.map(social => (
        <Link href={social.link.url || ''} target={social.link.newTab ? '_blank' : '_self'}
          key={social.id} className={`text-lg transtion duration-700 hover:text-accent ${variants[color]} p-1`}>
          {getLogo(social.link.name)}
        </Link>
      ))}
    </div>
  )
}