import PostsList from 'components/PostsList/PostsList'
import Seo from 'components/Seo'
import { Categories_QueryDocument, Post_By_CategoriesDocument } from 'generated/generated'
import { client } from 'lib/graphqlClient'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { ParsedUrlQuery } from 'querystring'

const Category = ({ data, url }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Seo url={url} title={`${data.name} - LearnCoding`} />
      <PostsList title={data.name} posts={data.posts} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: Categories_QueryDocument,
  })
  const paths = data.categories.map((c) => {
    return {
      params: { category: c.name },
    }
  })
  return {
    paths,
    fallback: false,
  }
}
interface IParams extends ParsedUrlQuery {
  category: string
}
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { category } = ctx.params as IParams
  const url = `${process.env.HOST ?? ''}/${category}`
  const { data } = await client.query({
    query: Post_By_CategoriesDocument,
    variables: { name: category },
  })

  return {
    props: {
      data: data.categories[0],
      url,
    },
  }
}

export default Category
