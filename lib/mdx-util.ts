// cannnot use babel-plugin-impoprt-glob-array and webpack alias together
//import-glob-arrayでposts/配下のmdxファイルを一括インポート
import {
  frontMatter as fms,
  _importMeta as metadatas,
} from "../posts/**/**/**.mdx";

const MDX_FILE_ROOT = "/posts/";

export interface IPost {
  resourceId: string;
  frontMatter: FrontMatter;
}

const sortDescPost = (a: IPost, b: IPost): number => {
  const dateA = a.frontMatter.date;
  const dateB = b.frontMatter.date;
  if (dateA > dateB) {
    return -1;
  }
  if (dateA < dateB) {
    return 1;
  }
  return 0;
};

const getPosts = async (page?: number): Promise<IPost[]> => {
  const posts: IPost[] = [];

  fms.forEach((fm, index) => {
    const absolutePath = metadatas[index].absolutePath;
    const relativePath = absolutePath.split(MDX_FILE_ROOT).slice(-1)[0];
    posts.push({
      resourceId: `${relativePath.split(".").slice(0, -1).join(".")}`,
      frontMatter: fm,
    });
  });
  if (page) {
    // 5 posts per page
    const start = 10 * (page - 1);
    const end = start + 10;
    return posts.sort(sortDescPost).slice(start, end);
  }
  return posts.sort(sortDescPost);
};

const getPostByResourcePath = async (resourceId: string): Promise<IPost> => {
  const posts = await getPosts();
  const filtered = posts.filter((post) => {
    return post.resourceId === resourceId;
  });
  return filtered[0];
};

export default { getPosts, getPostByResourcePath };
