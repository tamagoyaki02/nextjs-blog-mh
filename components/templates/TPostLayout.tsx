import React from 'react'
import MHead from '@/components/molecules/MHead'
import OPostHeader from '@/components/organisms/OPostHeader'
import { MDXProvider } from '@mdx-js/react'
import APostHeading from "@/components/atoms/APostHeading";
import AParagraph from "@/components/atoms/AParagraph";
import AList from "@/components/atoms/AList";
import ALink from "@/components/atoms/ALink";
import AImage from "@/components/atoms/AImage";
import ABlockquote from "@/components/atoms/ABlockquote";
import AInlineCode from "@/components/atoms/AInlineCode";
import MCodeBlock from "@/components/molecules/MCodeBlock";
import siteconfig from '@/siteconfig.json'

interface Props {
  frontMatter: FrontMatter;
  path: string;
  children: React.ReactNode;
}

const TPostLayout: React.FC<Props> = (props: Props) => {
  const { frontMatter, path, children } = props;
  const state = {
    h1: APostHeading.H1,
    h2: APostHeading.H2,
    h3: APostHeading.H3,
    h4: APostHeading.H4,
    h5: APostHeading.H5,
    p: AParagraph,
    blockquote: ABlockquote,
    ul: AList.Ul,
    li: AList.Li,
    a: ALink,
    img: AImage,
    inlineCode: AInlineCode,
    code: MCodeBlock,
  };

  return (
    <div className="blog-post-content px-8">
      <MHead
        title={`${frontMatter.title} | ${siteconfig.name}`}
        description={frontMatter.description}
        pageUrl={`${siteconfig.url}${path}`}
        coverImageUrl={`${siteconfig.url}${frontMatter.cover}`}
        pageType="article"
      />
      <div className="bg-custom-night1 p-8 rounded-xl">
        <OPostHeader frontMatter={frontMatter} />
        <MDXProvider components={state}>{children}</MDXProvider>
      </div>
    </div >
  )
}

export default TPostLayout;
