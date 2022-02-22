import Posts from '@app/dao/posts/Posts';

export default async(req, res) => {
  let results = null;
  let error = null;
  try {
    const rows = await Posts.getAll();
    results = rows;
  } catch (err) {
    error = err;
    console.log('Error querying DB: ', err);
  }
  res.status(200).json({ results, error });
}
