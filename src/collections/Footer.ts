import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
    slug: 'footer',
    fields: [
        {
            name: 'heading',
            label: 'Heading',
            type: 'text',
        },
        {
            name: 'content',
            label: 'Content',
            type: 'textarea'
        },
        {
            name: 'quicklinks',
            label: 'Quick Links',
            type: 'relationship',
            relationTo: 'pages',
            hasMany: true,
        },
        {
            name: 'copyright',
            label: 'Copyright',
            type: 'textarea'
        }
    ]
}