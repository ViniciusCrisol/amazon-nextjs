import api from '../services/api';

import Layout from '../components/layout';
import Products from '../components/Products';

export async function getStaticProps() {
  const response = await api.get('');

  return {
    props: {
      products: response.data,
    },
  };
}

function Home({ products }) {
  return (
    <Layout>
      <Products products={products} />
    </Layout>
  );
}

export default Home;
