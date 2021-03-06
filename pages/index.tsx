import React from "react";
import { GetStaticProps } from "next";
import mdxUtil from "@/lib/mdx-util";
import OPostList, { IPostItem } from "@/components/organisms/OPostList"
import TIndexLayout from '@/components/templates/TIndexLayout'

interface Props {
  posts: {
    resourceId: string;
    date: string;
    title: string;
  }[];
}

const PostList: React.FC<Props> = (props: Props) => {
  const { posts } = props;
  return (
    <TIndexLayout>
      <OPostList posts={posts} />
    </TIndexLayout>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await mdxUtil.getPosts();
  return {
    props: {
      posts: posts.map((post): IPostItem => {
        return {
          resourceId: post.resourceId,
          date: post.frontMatter.date,
          title: post.frontMatter.title,
        };
      }),
    },
  };
};

export default PostList;
