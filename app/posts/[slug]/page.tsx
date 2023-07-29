import { getClient } from '@/lib/client'
import { getPostBySlug } from '@/queries/posts'

import Article from '@/components/Article/Article'

export default async function Page({ params }: { params: { slug: string } }) {
  const { data } = await getClient().query({
    query: getPostBySlug,
    variables: { slug: params.slug },
  })

  if (!data.posts.data) {
    return {
      notFound: true,
    }
  }

  return <Article data={data.posts.data} />
}
