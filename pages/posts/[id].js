import Layout from '@app/components/layout'
//import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '@app/components/date'
import * as utilStyles from '@app/styles/utils.css'
import Typography from '@material-ui/core/Typography';
import PostService from '@app/services/PostService';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <Typography variant="h1" className={utilStyles.headingXl}>
          {postData.title}
        </Typography>
        {postData.createdAt && (
          <div className={utilStyles.lightText}>
            Authored: <Date dateString={postData?.createdAt} />
          </div>
        )}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const postContentData = await PostService.getBySlug(params?.id);

  if (!postContentData) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      postData: {
        ...postContentData,
      }
    }
  }
}
