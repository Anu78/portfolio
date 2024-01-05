import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={`${styles.main}`}>
      <div className={styles.innermain}>
        <h1 className={styles.mainbold}>welcome!</h1>
        <p className={styles.littletext}>i'm anu. this is my portfolio website. it showcases a lot of my unfinished projects, and i'm always working on something new! check out the blog to read about it.</p>
        <div className={styles.linkgroup}>
          <Link className={styles.link} target='_blank' rel='noreferrer' href="https://anu78.github.io">the fun cv</Link>
          <Link className={styles.link} href="/boring-cv">the simple cv</Link>
          <Link className={styles.link} href="/blog">blog</Link>
          <Link className={styles.link} href="/sudoku">play sudoku</Link>
          <div className={`${styles.link}`}><span className={styles.comingsoon}>geoguessr ai</span> coming soon</div>
        </div>
        <div className={styles.subtitle}>
          p.s. I'm not very good at web design.
        </div>
      </div>
    </main>
  )
}
