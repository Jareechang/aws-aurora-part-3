export interface IPostDao {
  // Get all posts
  getAll: (limit?: number) => Promise<IPost[]>;

  // Get page by slug
  getBySlug: (slug: string) => Promise<IPost | null>;

  // Get all the available slugs
  getAllSlugs: (limit: number) => Promise<string[]>;
}

export interface IPost {
  id: number;
  title: string;
  content: string;
  image_url: string;
  slug: string;
  user_id: number;
  // Social media type
  social_type: string;
  // Handle for the social media
  social_handle: string;
  // date string
  created_at: string;
  // date string
  updated_at: string;
};
