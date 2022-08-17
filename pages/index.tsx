import Hero from 'components/Hero/Hero'
import { Homepage_QueryDocument } from 'generated/generated'
import { client } from 'lib/graphqlClient'
import type { InferGetStaticPropsType } from 'next'

const Home = ({ editorPick }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { posts, featuredPosts, editorPicks } = editorPick

  return (
    <>
      <Hero posts={featuredPosts[0]} />
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: Homepage_QueryDocument,
  })
  return {
    props: {
      editorPick: data,
    },
  }
}
export default Home
