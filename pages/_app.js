import App from 'next/app';
import Head from 'next/head';

import Global from '../styles/global';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Amazon</title>
        </Head>
        <Global />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
