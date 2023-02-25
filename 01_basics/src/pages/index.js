import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

console.log("Hello from home page body")

export default function Home() {
  const name = "01_basics"

  console.log("Hello from home page function")
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Basic Next.js example&nbsp;
          <code className={styles.code}>{name}</code>
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
        <Link href="/static_json">page2</Link>
      </div>
    </main>
  )
}
