import Link from 'next/link';

import { Container } from './styles';

function Product({ product }) {
  return (
    <Link href='/product/[id]' as={`/product/${product.id}`}>
      <Container>
        <img src={product.image} alt={product.name} />
        <main>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <a>More datails</a>
        </main>
      </Container>
    </Link>
  );
}

export default Product;