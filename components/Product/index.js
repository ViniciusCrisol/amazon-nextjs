import { Container } from './styles';

function Product({ product }) {
  return (
    <Container>
      <img src={product.image} alt={product.name} />
      <main>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <a>More datails</a>
      </main>
    </Container>
  );
}

export default Product;
