import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import dynamic from "next/dynamic";
import mdxUtil from "@/lib/mdx-util";
import TPostLayout from "@/components/templates/TPostLayout";

interface Props {
  resourceId: string;
  frontMatter: FrontMatter;
}

const Post: React.FC<Props> = (props: Props) => {
  const { resourceId, frontMatter } = props;
  const MDX = dynamic(() => import(`@/posts/${resourceId}.mdx`));
  return (
    <TPostLayout frontMatter={frontMatter} path={`/blog/${resourceId}`}>
      <MDX />
    </TPostLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await mdxUtil.getPosts();
  const paths = posts.map((post) => {
    return {
      params: { id: post.resourceId.split("/") },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const resourceId = (params.id as string[]).join("/");
  const post = await mdxUtil.getPostByResourcePath(resourceId);
  return {
    props: {
      resourceId,
      frontMatter: post.frontMatter,
    },
  };
};

export default Post;
