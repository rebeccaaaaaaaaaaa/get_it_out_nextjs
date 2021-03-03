import styles from '../styles/pages/dashboard.module.css'
import Link from 'next/link'

export default function dashboard() {
  return (
    <>
      <div className={styles.containerDashboard}>
        <h1> Inicial</h1>
        <h2>
            <Link href="/">
            <a>Back to home</a>
            </Link>
        </h2>
      </div>
      
    </>
  )
}