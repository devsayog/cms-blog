import Post from 'components/Post/Post'
import { Heading2 } from 'components/Typography/Headings/Headings'
import React from 'react'

interface PostsListTypes {
  posts: {
    __typename?: 'Post' | undefined
    id: string
    excerpt: string
    slug: string
    title: string
    image: {
      __typename?: 'Asset' | undefined
      url: string
    }
    category?:
      | {
          __typename?: 'Category' | undefined
          name: string
        }
      | null
      | undefined
  }[]
  title: string
}

const PostsList = ({ posts, title }: PostsListTypes) => {
  return (
    <section className="max-w-sm mx-auto md:max-w-none md:mx-0">
      <Heading2>{title}</Heading2>
      <div className="border border-b-4 mt-1 rounded border-gray-600 w-36" />
      <div className="py-5 grid md:grid-cols-2 gap-6 xl:grid-cols-3 2xl:grid-cols-4">
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </section>
  )
}

export default PostsList
