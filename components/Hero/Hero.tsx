import { PrimaryBtn } from 'components/Buttons/Buttons'
import SidebarPosts from 'components/SidebarPosts/SidebarPosts'
import { Heading2 } from 'components/Typography/Headings/Headings'
import Paragraph from 'components/Typography/Paragraph/Paragraph'
import Image from 'next/image'
import HeroImg from 'public/hero.jpg'
import styles from './Hero.module.css'

interface HeroTypes {
  posts: {
    __typename?: 'FeaturedPost' | undefined
    posts: Array<{
      __typename?: 'Post' | undefined
      id: string
      excerpt: string
      slug: string
      title: string
      category?: {
        __typename?: 'Category' | undefined
        name: string
      } | null
    }>
  }
}

const Hero = ({ posts: { posts } }: HeroTypes) => {
  return (
    <section className={styles.container}>
      <article className={styles.article}>
        <span className={styles.imgContainer}>
          <Image className="rounded-2xl" src={HeroImg} alt={posts[0].title} />
        </span>
        <Heading2>{posts[0].title}</Heading2>
        <Paragraph className="sm:self-center">{posts[0].excerpt}</Paragraph>
        <PrimaryBtn href={`/${posts[0].category?.name}/${posts[0].slug}`}>Read more</PrimaryBtn>
      </article>
      <SidebarPosts posts={posts.slice(1)} />
    </section>
  )
}

export default Hero
