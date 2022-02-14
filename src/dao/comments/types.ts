export interface ICommentsDao {
  // Get all user(s)
  getAllByBlogId: (id: number) => Promise<IComment[]>;
}

export interface IComment {
  id: string;
  content: string;
  // Commented user’s name
  name: string;
  // date string
  created_at: string;
  // date string
  updated_at: string;
};
