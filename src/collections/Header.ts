import type { GlobalConfig, Where } from 'payload'

const filter: Where = {
    title: {
      not_equals: 'Home'
    }
}

export const Header: GlobalConfig = {
    slug: 'header',
    fields: [
        {
            name: 'logo',
            label: 'Logo',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'nav',
            label: 'Navigation Links',
            type: 'relationship',
            relationTo: 'pages',
            hasMany: true,
            filterOptions: filter
        },
    ]
}