import type { CollectionConfig } from 'payload'
import { HomePageIntro } from './blocks/homepage-intro'
import { HomePageAbout } from './blocks/homepage-about'
import { HomePageServices } from './blocks/homepage-services'
import { Socials } from './blocks/socials'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title'
  },
  versions: true,
  fields: [
    {
        name: 'title',
        label: 'Title',
        type: 'text',
        required: true
    },
    {
        name: 'content',
        labels: {singular: 'Content', plural: 'Sections'},
        type: 'blocks',
        blocks: [HomePageIntro, HomePageAbout, HomePageServices, Socials],
    },
  ],
}
