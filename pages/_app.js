import App from 'next/app';
import Head from 'next/head';

import Global from '../styles/global';

import { CartProvider } from '../Hooks/CartContext';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <CartProvider>
        <Head>
          <title>Amazon</title>
        </Head>
        <Global />
        <Component {...pageProps} />
      </CartProvider>
    );
  }
}

export default MyApp;
