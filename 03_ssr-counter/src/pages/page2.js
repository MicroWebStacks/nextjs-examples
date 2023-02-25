import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { get_count, increment } from '../shared';

console.log("Hello from page2 body")

export default function Home({counter}) {
  const proj = "03_ssr-counter"
  console.log("Hello from page2 function")
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <a href={`https://github.com/wassfila/nextjs-examples/tree/main/${proj}`} target="_blank">Project {proj} github repo</a>
       </p>
      </div>
      <div className={styles.description}>
        <p>counter = {counter}</p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>
      <div className={styles.center}>
        <Link href="/">home</Link>
      </div>
    </main>
  )
}

export async function getServerSideProps(context) {
  increment()
  const counter = get_count()
  console.log("Hello from getServerSideProps()")
 

  return {
    props: {counter}, // will be passed to the page component as props
  }
}

