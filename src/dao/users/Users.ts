import db from '../../services/database';
import * as queries from './queries';
import {
  IUsersDao,
  IUser,
} from './types';

class Users implements IUsersDao {
  constructor() {}

  /*
   * Get user
   *
   * @param id - user id
   *
   * **/
  public async get(
    id: number
  ): Promise<IUser | null> {
    let result: IUser | null = null;
    try {
      const {
        rows
      } = await db.query<IUser>(
        queries.get,
        [id]
      );
      result = rows[0];
    } catch (error) {
      console.error('Users.get failed ', error);
    }
    return result;
  }

  /*
   *
   * Get all the users
   *
   * @param limit - the limit of entry (default = 10)
   *
   * **/
  public async getAll(
    limit: number = 10,
  ): Promise<IUser[]> {
    let result: IUser[] = [];
    try {
      const queryResults = await db.query<IUser>(
        queries.getAll,
        [limit]
      );
      result = queryResults.rows ?? [];
    } catch (error) {
      console.error('Users.getAll failed ', error);
    }
    return result;
  }
}

export default new Users();
