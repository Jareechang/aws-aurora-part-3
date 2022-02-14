import db from '../../services/database';
import * as queries from './queries';
import {
  ICommentsDao,
  IComment,
} from './types';

class Comments implements ICommentsDao {
  constructor() {}
  /*
   *
   * Get all comments by blog id
   *
   * @param id - the id of the blog post
   *
   * **/
  public async getAllByBlogId(
    id: number
  ): Promise<IComment[]> {
    let result: IComment[] = [];
    try {
      const queryResults = await db.query<IComment>(
        queries.getAllByBlogId,
        [id]
      );
      result = queryResults.rows ?? [];
    } catch (error) {
      console.error(
        'Comments.getAllByBlogId failed ',
        error
      );
    }
    return result;
  }
}

export default new Comments();
