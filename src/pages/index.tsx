import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Philosophya</title>
        <meta name="description" content="Receba uma frase de um filósofo" />
        <link rel="icon" href="/favicon-dark.svg"  media="(prefers-color-scheme:dark)"/>
        <link rel="icon" href="/favicon-light.svg" media="(prefers-color-scheme:light)"/>
      </Head>

      <main className={styles.main}>
        
      </main>
    </div>
  )
}

export default Home
