import { SecondaryBtn } from 'components/Buttons/Buttons'
import { Heading2, Heading3 } from 'components/Typography/Headings/Headings'
import Paragraph from 'components/Typography/Paragraph/Paragraph'
import styles from './SidebarPosts.module.css'

interface SidebarPostsTypes {
  posts: {
    __typename?: 'Post' | undefined
    id: string
    excerpt: string
    slug: string
    title: string
    category?:
      | {
          __typename?: 'Category' | undefined
          name: string
        }
      | null
      | undefined
  }[]
  heading?: boolean
  className?: string
}

const SidebarPosts = ({ posts, heading, className }: SidebarPostsTypes) => {
  return (
    <aside className={`${styles.container} ${className ? className : ''}`}>
      {heading && <Heading2>You may like</Heading2>}
      {posts.map((p) => (
        <article key={p.id} className={styles.article}>
          <Heading3>{p.title}</Heading3>
          <Paragraph className="flex-1">{p.excerpt}</Paragraph>
          <SecondaryBtn href={`/${p.category?.name}/${p.slug}`}>lern more</SecondaryBtn>
        </article>
      ))}
    </aside>
  )
}

export default SidebarPosts
