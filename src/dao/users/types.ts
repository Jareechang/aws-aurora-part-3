export interface IUsersDao {
  // Get single user
  get: (id: number) => Promise<IUser | null>;

  // Get all user(s)
  getAll: (limit: number) => Promise<IUser[]>;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  password?: string;
  user_type: string;
  social_id: number;
  // date string
  created_at: string;
  // date string
  updated_at: string;
};
