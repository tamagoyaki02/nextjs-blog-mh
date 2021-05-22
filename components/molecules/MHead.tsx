import React from 'react'
import Head from 'next/head'
import siteconfig from '@/siteconfig.json'

interface Props {
  title: string;
  description: string;
  pageUrl: string;
  pageType: "article" | "website" | "profile";
  coverImageUrl: string;
}

const MHead: React.FC<Props> = (props: Props) => {
  const { title, description, pageUrl, pageType, coverImageUrl } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={pageType} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={coverImageUrl} />
      <meta property="og:site_name" content={siteconfig.name} />
      <meta property="og:locale" content="ja_JP" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={siteconfig.author.twitter.id} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={coverImageUrl} />
    </Head>
  )
}

export default MHead;
