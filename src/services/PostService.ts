import Posts from '@app/dao/posts/Posts'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

interface IPostData {
  id?: string;
  title: string;
  content?: string;
  // timestamp string
  createdAt?: string;
  contentHtml?: string;
}

interface IPostService {

  getAll: () => Promise<IPostData[]>;

  getBySlug: (slug: string) => Promise<IPostData>;

  getAllSlugs: () => Promise<string[]>;
}

class PostService implements IPostService {
  constructor() {}

  /**
   * Get all blog post data and apply matter transformation
   *
   * **/
  public async getAll(): Promise<IPostData[]> {
    const data = await Posts.getAll()
    const parsedData = data.map(({ slug, created_at, title, ...rest }: any) => {
      const matterResult = matter(rest?.content)
      return {
        id: slug,
        title,
        createdAt: created_at?.toString(),
        ...matterResult.data,
      }
    });
    return parsedData
  }

  /**
   * Get a single post by slug
   *
   * */
  public async getBySlug(slug: string): Promise<IPostData> {
    const page = await Posts.getBySlug(slug)
    const fileContents: string = page?.content ?? ''

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // Combine the data with the id and contentHtml
    return {
      contentHtml,
      createdAt: page?.created_at,
      title: page?.title ?? '',
      ...matterResult.data,
    }
  }

  /**
   * Get all available slugs
   *
   * **/
  public async getAllSlugs(): Promise<string[]> {
    return Posts.getAllSlugs()
  }
}

export default new PostService()
