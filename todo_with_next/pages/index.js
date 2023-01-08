
import Link from 'next/link'
import styles from '../styles/Home.module.css'




export default function Home() {
  return (
    <div>
          <h1>WELCOME to my First Next.js app</h1>
          <div className={styles.main} >
            <Link href={"/todos"}>Todos</Link>
            <Link href={"/users"}>Users</Link>
          </div>
    </div>
  )
}



