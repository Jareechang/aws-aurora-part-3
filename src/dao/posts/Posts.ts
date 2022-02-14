import db from '@app/services/database';
import * as queries from './queries';
import {
  IPostDao,
  IPost,
} from './types';

/*
 * Even though this is a Post Data access, it does
 * include join data from other tables (ie social_accounts)
 *
 * **/
class Posts implements IPostDao {
  constructor() {}

  public async getAll(
    limit: number = 10,
  ): Promise<IPost[]> {
    let result: IPost[] = [];
    try {
      const queryResults = await db.query<IPost>(
        queries.getAll,
        [limit]
      );
      result = queryResults?.rows;
    } catch (error) {
      console.error('Posts.getAll failed ', error);
    }
    return result;
  }

  public async getBySlug(
    slug: string
  ): Promise<IPost | null> {
    let result: IPost | null = null;
    try {
      const queryResults = await db.query<IPost>(
        queries.getBySlug,
        [slug]
      );
      result = queryResults?.rows[0];
    } catch (error) {
      console.error('Posts.getBySlug failed ', error);
    }
    return result;
  }

  public async getAllSlugs(
    limit: number = 10
  ): Promise<string[]> {
    let result: string[] = [];
    try {
      const queryResults = await db.query<{ slug: string }>(
        queries.getAllSlugs,
        [limit]
      );
      result = queryResults?.rows?.map((item: { slug: string }) => item.slug);
    } catch (error) {
      console.error('Posts.getAllSlugs failed ', error);
    }
    return result;
  }
}

export default new Posts();
