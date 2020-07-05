import App from 'next/app';
import Head from 'next/head';

import Global from '../styles/global';
import Provider from '../Hooks';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider>
        <Head>
          <title>Amazon</title>
        </Head>
        <Global />
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;
