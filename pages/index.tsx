import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { GetStaticProps, NextPage } from 'next';
import { getSortedPostsData } from '../lib/post';
import Link from 'next/link';

const Home = ({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Koo</title>
      </Head>
      <section className={styles.headingMd}>
        <p>[Koo introduction]</p>
        <p>(This is a website)</p>
      </section>
      <section className={`${styles.headingMd} ${styles.padding1px}`}>
        <h2 className={styles.headingLg}>Blog</h2>
        <ul className={styles.list}>
          {allPostsData.map(({ id, title, date }) => (
            <li className={styles.listItem} key={id}>
              <Link href={`/posts/${id}`} legacyBehavior>
                <a>{title}</a>
              </Link>
              <br />
              <small className={styles.lightText}>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
