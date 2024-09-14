import type { Block } from 'payload'
import { link } from '../fields/link'
import { linkGroup } from '../fields/linkGroup'

export const HomePageServices: Block = {
    slug: 'homepage-services',
    labels: { singular: 'Homepage Services', plural: 'Homepage Services'},
    fields: [
        {
            name: 'services',
            label: 'Services',
            type: 'array',
            fields: [
                {
                    name: 'picture',
                    label: 'Picture',
                    type: 'upload',
                    relationTo: 'media'
                },
                {
                    name: 'title',
                    label: 'Title',
                    type: 'text'
                },
                {
                    name: 'content',
                    label: 'Content',
                    type: 'textarea'
                },
                linkGroup()
            ]
        }
    ],
}