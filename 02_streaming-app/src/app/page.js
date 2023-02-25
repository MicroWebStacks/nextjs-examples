import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

console.log("Hello from page body")

export default function Home() {
  const proj = "02_streaming-app"

  console.log("Hello from home page function")
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
        <Link href="/page2" prefetch={false} >page2</Link>
      </div>
    </main>
  )
}
