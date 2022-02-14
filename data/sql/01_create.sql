-- Clear table if it already exists
DROP TABLE IF EXISTS social_accounts;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS comments;

-- Tables
CREATE TABLE social_accounts(
    id serial PRIMARY KEY
    , username VARCHAR(255)
    , social_type VARCHAR(255)
    , created_at timestamptz DEFAULT current_timestamp
    , updated_at timestamptz DEFAULT current_timestamp
);

CREATE TABLE users(
    id serial PRIMARY KEY
    , name VARCHAR(255)
    , email VARCHAR(255)
    , password VARCHAR(255)
    , user_type VARCHAR(255)
    , social_id INTEGER REFERENCES social_accounts(id)
    , created_at timestamptz DEFAULT current_timestamp
    , updated_at timestamptz DEFAULT current_timestamp
);

CREATE TABLE posts(
    id serial PRIMARY KEY
    , title VARCHAR(255)
    , content TEXT
    , image_url VARCHAR(255)
    , slug VARCHAR(255)
    , user_id INTEGER REFERENCES users(id)
    , created_at timestamptz DEFAULT current_timestamp
    , updated_at timestamptz DEFAULT current_timestamp
);

CREATE TABLE comments(
    id serial PRIMARY KEY
    , content VARCHAR(255)
    , user_id INTEGER REFERENCES users(id)
    , post_id INTEGER REFERENCES posts(id)
    , created_at timestamptz DEFAULT current_timestamp
    , updated_at timestamptz DEFAULT current_timestamp
);

-- Updated at trigger - refresh the timestamp during an update
CREATE OR REPLACE FUNCTION updated_at_trigger()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers
CREATE TRIGGER update_social_accounts_timestamp BEFORE UPDATE ON social_accounts FOR EACH ROW EXECUTE PROCEDURE updated_at_trigger();
CREATE TRIGGER update_users_timestamp BEFORE UPDATE ON users FOR EACH ROW EXECUTE PROCEDURE updated_at_trigger();
CREATE TRIGGER update_posts_timestamp BEFORE UPDATE ON posts FOR EACH ROW EXECUTE PROCEDURE updated_at_trigger();
CREATE TRIGGER update_comments_timestamp BEFORE UPDATE ON comments FOR EACH ROW EXECUTE PROCEDURE updated_at_trigger();
