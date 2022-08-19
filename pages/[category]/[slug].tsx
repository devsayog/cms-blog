import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ParsedUrlQuery } from 'querystring'
import { Category_With_PostDocument, Post_Description_QueryDocument } from 'generated/generated'
import { client } from 'lib/graphqlClient'
import SidebarPosts from 'components/SidebarPosts/SidebarPosts'
import Paragraph from 'components/Typography/Paragraph/Paragraph'
import Newsletter from 'components/Newsletter/Newsletter'
import { Heading3 } from 'components/Typography/Headings/Headings'
import styles from 'styles/slug.module.css'

const Slug = ({ post, similarPosts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!post) return <Paragraph>The page you are looking is not found</Paragraph>

  return (
    <section>
      <div className={styles.wrapper}>
        <article className={styles.articleWrapper}>
          <header>
            <article className="text-gray-300 mb-5">
              <div className={styles.avatarContainer}>
                <div className={styles.avatar}>
                  <Image
                    src={post.author?.profilePicture.url!}
                    alt={post.author?.name}
                    className="rounded-full"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <Heading3>{post.author?.name}</Heading3>
                  <Paragraph>Posted on {new Date(post.createdAt).toDateString()}</Paragraph>
                </div>
              </div>
              <div className="flex items-center">
                <Link href={`/${post.category?.name}`}>
                  <a className={styles.tag}>{post.category?.name}</a>
                </Link>
                <Paragraph className="ml-auto">
                  Updated on : {new Date(post.updatedAt).toDateString()}
                </Paragraph>
              </div>
            </article>
            <div className={styles.imgH1}>
              <span className={styles.imgWrapper}>
                <Image
                  src={post.image.url}
                  layout="responsive"
                  width={1000}
                  height={500}
                  alt={post.title}
                />
              </span>
              <h1 className={styles.h1}>{post.title}</h1>
            </div>
          </header>
          <article
            className={styles.article}
            dangerouslySetInnerHTML={{ __html: post.blog.html! }}
          ></article>
        </article>
        <SidebarPosts heading={true} className={`${styles.sideBar}`} posts={similarPosts!} />
      </div>
      <Newsletter />
    </section>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: Category_With_PostDocument,
  })
  const paths = data.categories
    .map((cat) => {
      let category = cat.name
      return cat.posts.map((p) => {
        return {
          params: { category, slug: p.slug },
        }
      })
    })
    .flatMap((i) => i)
  return {
    paths,
    fallback: false,
  }
}
interface IParams extends ParsedUrlQuery {
  slug: string
  category: string
}

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const { slug, category } = ctx.params as IParams

  const { data } = await client.query({
    query: Post_Description_QueryDocument,
    variables: {
      slug,
      category,
    },
  })
  return {
    props: {
      post: data.post,
      similarPosts: data.category?.posts,
    },
  }
}

export default Slug
