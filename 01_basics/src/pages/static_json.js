import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

console.log("Hello from page2 body")

export default function Home({name}) {
  const proj = "01_basics"
  console.log("Hello from page2 function")
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <a href={`https://github.com/MicroWebStacks/nextjs-examples/tree/main/${proj}`} target="_blank">Project {proj} github repo</a>
       </p>
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

export async function getStaticProps(context) {
  console.log("Hello from page2 getStaticProps 'on build time'")
  const name = "01_basics"
  return {
    props: {name}, // will be passed to the page component as props
  }
}
