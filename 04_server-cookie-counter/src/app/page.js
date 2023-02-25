import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { fileURLToPath } from 'url';
import { basename,dirname } from 'node:path';


const __filename = fileURLToPath(import.meta.url);
const proj = basename(dirname(dirname(dirname(__filename))))

console.log(`Hello from home page body in proj ${proj}`)

export default function Home() {

  console.log("Hello from home page function")

  let counter = 0
  const nextCookies = cookies()
  if(nextCookies.has("counter")){
    const cookie = nextCookies.get("counter")
    counter = cookie.number() + 1
    console.log(`  cookie exist +1 now set to (${counter})`)
  }else{
    console.log("  cookie does not exist starting from 0")
  }
  //set() does not exist yet

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
    </main>
  )
}
