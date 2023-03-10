import Image from 'next/image'
import styles from '../page.module.css'

console.log("Hello from page2 body")

export default function Page2() {

  console.log("Hello from page2 function")
  return (
    <main className={styles.main}>
      <div className={styles.center}>Page 2</div>
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
