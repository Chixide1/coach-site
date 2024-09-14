import type { Block } from 'payload'

export const HomePageIntro: Block = {
    slug: 'homepage-intro',
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
        },
        {
            name: 'content',
            label: 'Content',
            type: 'textarea'
        },
        {
            name: 'picture',
            label: 'Picture',
            type: 'upload',
            relationTo: 'media'
        },
    ],
}