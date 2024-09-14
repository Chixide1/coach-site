import type { Block } from 'payload'
import { linkGroup } from '../fields/linkGroup'

export const Socials: Block = {
    slug: 'socials',
    labels: {singular: 'Socials', plural: 'Socials'},
    fields: [
        linkGroup(),
    ]
}