import Image from 'next/image'
import { SecondaryBtn } from 'components/Buttons/Buttons'
import { Heading3 } from 'components/Typography/Headings/Headings'
import Paragraph from 'components/Typography/Paragraph/Paragraph'

interface PostTypes {
  post: {
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
  }
}

const Post = ({ post }: PostTypes) => {
  return (
    <article key={post.id} className="space-y-3 p-2 bg-gray-700 grid rounded-md">
      <Image
        className="rounded-md"
        src={post.image.url}
        width={300}
        height={300}
        layout="intrinsic"
        alt={post.title}
      />
      <Heading3>{post.title}</Heading3>
      <Paragraph className="text-gray-400">{post.excerpt}</Paragraph>
      <SecondaryBtn href={`/${post.category?.name}/${post.slug}`}>read more</SecondaryBtn>
    </article>
  )
}

export default Post
