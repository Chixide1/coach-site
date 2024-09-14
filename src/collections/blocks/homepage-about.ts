import type { Block } from 'payload'

export const HomePageAbout: Block = {
    slug: 'homepage-about',
    fields: [
        {
            name: 'brief-intro',
            label: 'Brief Introduction',
            type: 'textarea'
        },
        {
            name: 'title',
            label: 'Title',
            type: 'text',
        },
        {
            name: 'col-1',
            label: 'Column 1',
            type: 'textarea'
        },
        {
            name: 'col-2',
            label: 'Column 2',
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