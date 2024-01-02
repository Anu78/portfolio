import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome!</h1>
      <p>this is the landing page. </p>

      <div>
        <Link href="/fun-cv/intro">Check out the fun CV</Link>
        <Link href="/boring-cv">Or, a more boring cv?</Link>
        <Link href="/blog">A blog, perhaps?</Link>
      </div>
    </main>
  )
}
