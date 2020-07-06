import Link from 'next/link';

import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiFillAmazonCircle,
} from 'react-icons/ai';

import { Container } from './styles';

import { useCart } from '../../Hooks/CartContext';
import { useFavorites } from '../../Hooks/FavoritesContext';

function Header() {
  const { cart } = useCart();
  const { favorites } = useFavorites();

  return (
    <Container>
      <div>
        <Link href='/'>
          <a>
            <AiFillAmazonCircle size={40} color='var(--primary)' />
          </a>
        </Link>
        <section>
          <Link href='/favorites'>
            <a>
              <span>{favorites.length}</span>
              <AiOutlineHeart size={30} color='var(--dark-gray)' />
            </a>
          </Link>
          <Link href='/cart'>
            <a>
              <span>{cart.length}</span>
              <AiOutlineShoppingCart size={30} color='var(--dark-gray)' />
            </a>
          </Link>
        </section>
      </div>
    </Container>
  );
}

export default Header;
