SELECT comments.content
, users.name
, comments.created_at
, comments.updated_at
FROM comments
INNER JOIN users ON comments.user_id = users.id
WHERE comments.post_id = $1;
