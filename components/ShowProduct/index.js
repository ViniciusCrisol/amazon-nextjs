import Router from 'next/router';
import { IoMdArrowBack } from 'react-icons/io';
import { AiOutlineHeart } from 'react-icons/ai';

import { Container } from './styles';

import { useCart } from '../../Hooks/CartContext';
import { useFavorites } from '../../Hooks/FavoritesContext';

function ShowProduct({ product }) {
  const { addToCart } = useCart();
  const { addToFavorites } = useFavorites();

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <Container>
      <a onClick={() => Router.back()}>
        <IoMdArrowBack />
        Go Back
      </a>
      <main>
        <img src={product.image} alt={product.name} />

        <section>
          <h1>{product.name}</h1>
          <span>{formatter.format(product.price)}</span>
          <p dangerouslySetInnerHTML={{ __html: product.description }} />
          <div>
            <button onClick={() => addToFavorites({ product })}>
              <AiOutlineHeart size={26} />
            </button>
            <button onClick={() => addToCart({ product })}>Add to cart</button>
          </div>
        </section>
      </main>
    </Container>
  );
}

export default ShowProduct;
