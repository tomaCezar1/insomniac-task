import type { NextPage } from 'next';
import Head from 'next/head';

import styles from 'styles/Home.module.css';
import Navbar from 'components/Navbar';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Insomniac</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className={styles.main}></main>
    </div>
  );
};

export default Home;
