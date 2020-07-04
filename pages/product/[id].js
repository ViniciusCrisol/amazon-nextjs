import api from '../../services/api';
import Layout from '../../components/layout';
import Product from '../../components/ShowProduct';

export async function getStaticProps({ params }) {
  const response = await api.get(`/${params.id}`);

  return {
    props: {
      product: response.data,
    },
  };
}

export async function getStaticPaths() {
  const pageNumber = [];

  for (let i = 1; i <= 9; i++) pageNumber.push(`${i}`);

  return {
    paths: pageNumber.map((number) => ({
      params: {
        id: number,
      },
    })),
    fallback: false,
  };
}

function Post({ product }) {
  return (
    <Layout>
      <Product product={product} />
    </Layout>
  );
}

export default Post;
