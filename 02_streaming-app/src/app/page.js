import Image from 'next/image'
import styles from './page.module.css'

console.log("Hello from page body")

export default function Home() {
  console.log("Hello from page function")
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Basic example&nbsp;
          <code className={styles.code}>Next.js</code>
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
    </main>
  )
}
