import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Koo</title>
      </Head>
      <section className={styles.headingMd}>
        <p>[Koo introduction]</p>
        <p>(This is a wepsite)</p>
      </section>
      <section className={`${styles.headingMd} ${styles.padding1px}`}>
        <h2 className={styles.headingLg}>Blog</h2>
        <ul className={styles.list}></ul>
      </section>
    </div>
  );
};

export default Home;
