import { groq } from 'next-sanity'

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id, title, slug, category, publishedAt, excerpt, mainImage
  }
`

export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id, title, slug, category, publishedAt, excerpt, mainImage, body
  }
`

export const servicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id, title, category, description, price, note
  }
`
