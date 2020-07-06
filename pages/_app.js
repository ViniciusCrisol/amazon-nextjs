import App from 'next/app';
import Head from 'next/head';

import Global from '../styles/global';

import AppProvider from '../Hooks/index';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <AppProvider>
        <Head>
          <title>Amazon</title>
        </Head>
        <Global />
        <Component {...pageProps} />
      </AppProvider>
    );
  }
}

export default MyApp;
