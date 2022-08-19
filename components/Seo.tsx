import Head from 'next/head'

type SeoTypes = {
  title?: string
  description?: string
  url: string
  image?: string
}

function Seo({ title, description, url, image }: SeoTypes) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  )
}

Seo.defaultProps = {
  description:
    'LearnCode is a static blog about front-end web development. You can read about different articles posted on this blog.',
  image: `/logo.png`,
  title: 'LearnCoding',
}

export default Seo
