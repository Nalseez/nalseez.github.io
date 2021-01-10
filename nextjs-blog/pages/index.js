import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home(){
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
    </Layout>
  )
}