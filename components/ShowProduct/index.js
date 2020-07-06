import Router from 'next/router';
import { IoMdArrowBack } from 'react-icons/io';
import { AiOutlineHeart } from 'react-icons/ai';

import { Container } from './styles';

import { useCart } from '../../Hooks/CartContext';
import { useFavorites } from '../../Hooks/FavoritesContext';

function ShowProduct({ product }) {
  const { addToCart, cart } = useCart();
  const { addToFavorites, favorites } = useFavorites();

  console.log(cart);
  console.log(favorites);

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  function handleAddCart() {
    const productExists = cart.find(
      (cartProduct) => cartProduct.id === product.id
    );

    if (!productExists) {
      addToCart({ product });
    }
  }

  function handleAddFavorites() {
    const productExists = favorites.find(
      (cartProduct) => cartProduct.id === product.id
    );

    if (!productExists) {
      addToFavorites({ product });
    }
  }

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
            <button onClick={handleAddFavorites}>
              <AiOutlineHeart size={26} />
            </button>
            <button onClick={handleAddCart}>Add to cart</button>
          </div>
        </section>
      </main>
    </Container>
  );
}

export default ShowProduct;
