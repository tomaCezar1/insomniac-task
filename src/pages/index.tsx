import type { NextPage } from 'next';
import Head from 'next/head';

import { Main } from 'styles/common';
import Header from 'components/Header';
import Message from 'components/Message';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Insomniac</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main>
        <Message />
      </Main>
    </>
  );
};

export default Home;
