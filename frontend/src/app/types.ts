export interface AppOptions {

}

/**
 * models
 */

export interface Author {
  '#'?: number;
  name: string;
  slug: string;
  email?: string;
  avatar?: number;
  bio?: string;
}

export interface Category {
  '#'?: number;
  title: string;
  slug: string;
  description?: string;
  count?: number;
  only?: string;
}

export interface Tag {
  '#'?: number;
  title: string;
  slug: string;
}

export interface Page {
  '#'?: number;
  title: string;
  slug: string;
  cover?: string;
  content?: string;
}

export interface Post {
  '#'?: number;
  title: string;
  slug: string;
  date?: string;
  author?: {[slug: string]: string};
  description?: string;
  thumbnail?: string;
  image?: string;
  content?: string;
  categories?: {[slug: string]: string};
  tags?: {[slug: string]: string};
}
