import type { CollectionConfig } from 'payload'
import { linkGroup } from './fields/linkGroup'
import { lexicalHTML} from '@payloadcms/richtext-lexical'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'page',
  },
  versions: true,
  fields: [
    {
      name: 'page',
      label: 'Page',
      type: 'text',
      required: true,
      defaultValue: ''
    },
    {
      name: 'sections',
      label: 'Sections',
      type: 'array',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
          defaultValue: ''
        },
        {
          name: 'content',
          label: 'Content',
          type: 'richText',
        },
        lexicalHTML('content', { name: 'content_html' }),
      ],
    },
    linkGroup(),
  ],
}