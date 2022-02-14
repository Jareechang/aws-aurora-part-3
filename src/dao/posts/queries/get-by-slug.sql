SELECT posts.id AS id
  , posts.title
  , posts.content
  , posts.image_url
  , posts.created_at
  , posts.updated_at
  , slug
  , email
  , social_accounts.social_type
  , social_accounts.username AS social_handle
FROM posts
INNER JOIN users ON users.id = posts.user_id
INNER JOIN social_accounts ON social_accounts.id = users.social_id
WHERE slug = $1;
