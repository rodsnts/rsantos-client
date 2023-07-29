import { postsQuery } from '@/queries/posts'
import { getClient } from '@/lib/client'

import PostCard from '@/components/PostCards/PostCards'
import Loader from '@/components/Loader/Loader'

export default async function Home() {
  const { data } = await getClient().query({ query: postsQuery })

  if (!data) {
    return <Loader />
  }

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        marginTop: '14px',
        alignItems: 'start',
      }}
    >
      <PostCard data={data.posts.data} />
    </div>
  )
}
