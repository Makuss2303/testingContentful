import { createClient } from "contentful"

export default async function getDataContentful(value: string) {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '' ,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY || '',
  })
  const res = await client.getEntries({ content_type: value })
  return res.items || []
}
