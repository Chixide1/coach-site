import { Media, Page } from "@/payload-types";

export type AboutBlock = {
  'brief-intro'?: string | null;
  title?: string | null;
  col_1?: string | null;
  col_2?: string | null;
  picture?: (number | null) | Media;
  id?: string | null;
  blockName?: string | null;
  blockType: 'homepage-about';
}

export type IntroBlock = {
  title?: string | null;
  content?: string | null;
  picture?: (number | null) | Media;
  id?: string | null;
  blockName?: string | null;
  blockType: 'homepage-intro';
}

export type ServicesBlock = {
  services?:
  | {
    picture?: Media;
    title?: string | null;
    content?: string | null;
    links?:
    | {
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
  }[]
  | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'homepage-services';
}