import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Hi! I'm Nalseez!
        I am a Software Engineer, Technology Enthusiast, and proponent for the Oxford Comma.
          You can find me on <a href='https://www.linkedin.com/in/nalseez/'>LinkedIn</a>.
        </p>
      </section>


      <section className={'${utilStyles.heading.Md} ${utilStyles.padding1px}'}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>

      </section>

      {/* <Link href="./posts/blog">
        <a>Blog</a>
      </Link> */}

      {/* <Link href="./posts/resume">
        <a>Resume</a>
      </Link> */}

      {/* Contact information */}
    </Layout>
  )
}