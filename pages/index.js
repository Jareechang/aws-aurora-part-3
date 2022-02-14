import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '@app/components/layout'
import Date from '@app/components/date'
import { Button } from '@app/components/button'
import { css, cx } from '@emotion/css'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import * as utilStyles from '@app/styles/utils.css'
import PostService from '@app/services/PostService';

export default function Home({ allPostsData }) {
  console.log('all post data: ', allPostsData);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Typography variant="body1">[Your Self Introduction]</Typography>
        <Typography
          variant="body1">
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </Typography>
      </section>
      <Box
        py={3}
        display="flex"
        justifyContent="center">
        <Button
          type="error"
          variant="contained"
          color="primary">
          I’m a button
        </Button>
      </Box>
      <section className={cx(utilStyles.headingMd, utilStyles.padding1px)}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, created_at, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={created_at} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getServerSideProps() {
  const allPostsData = await PostService.getAll()
  return {
    props: {
      allPostsData
    }
  }
}
