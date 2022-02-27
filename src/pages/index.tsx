import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import Header from 'components/Header';

const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Insomniac</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main></Main>
    </>
  );
};

export default Home;
