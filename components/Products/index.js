import Product from '../Product';

import { Container } from './styles';

function Products({ products }) {
  return (
    <Container>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </Container>
  );
}

export default Products;
