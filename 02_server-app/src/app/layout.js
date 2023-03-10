import './globals.css'
import styles from './page.module.css'
import Link from 'next/link'
import { fileURLToPath } from 'url';
import { basename,dirname } from 'node:path';


const __filename = fileURLToPath(import.meta.url);
const proj = basename(dirname(dirname(dirname(__filename))))

export const metadata = {
  title: 'Server App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className={styles.nav}>
          <div className={styles.center}>
            <Link href="/" prefetch={false} >home</Link>
          </div>
          <div className={styles.center}>
            <Link href="/page2" prefetch={false} >page2</Link>
          </div>
        </nav>
        <div className={styles.description}>
        <p>
          <a href={`https://github.com/MicroWebStacks/nextjs-examples/tree/main/${proj}`} target="_blank">Project {proj} github repo</a>
       </p>
      </div>
        {children}
        </body>
    </html>
  )
}
