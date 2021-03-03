import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.bgBlue}>
          <div className={styles.container}>
            <Head>
              <title> Get It Out - Desabafos Online</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
            <Image
              src="/logogio.jpg"
              alt="Logo GIO"
              width={500}
              height={300}
            />

            <Link href="/dashboard">
              <a alt="Ir para o inicio da aplicação" title="Ir para o inicio da aplicação" className={styles.btnStart}> Começar  </a>
            </Link>

            <p className={styles.copy}> Project by <strong> <a href="https://www.linkedin.com/in/rebecca-ignacio/" target="_blank"> Rebecca Ignácio </a> </strong> </p> 

            </main>
          </div>
    </div>
  )
}
