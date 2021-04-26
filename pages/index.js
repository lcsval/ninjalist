import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div >
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita similique quas id cum! Optio quos quaerat reiciendis ad aliquam eum libero harum labore nostrum voluptate mollitia voluptatibus, illo, dolorum fugit.</p>
        <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel id distinctio accusamus ullam voluptas maxime nostrum tempora cum quos, inventore eligendi pariatur explicabo voluptates sint. Earum deleniti ipsam minima nisi.</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
