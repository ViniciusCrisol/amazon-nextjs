import Link from 'next/link';

import { Container } from './styles';

function Product({ product }) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <Link href='/product/[id]' as={`/product/${product.id}`}>
      <Container>
        <img src={product.image} alt={product.name} />
        <main>
          <h1>{product.name}</h1>
          <span>{formatter.format(product.price)}</span>
          <a>More datails</a>
        </main>
      </Container>
    </Link>
  );
}

export default Product;
