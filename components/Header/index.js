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
          <AiFillAmazonCircle size={40} color='var(--primary)' />
        </Link>
        <section>
          <a>
            <span>{favorites.length}</span>
            <AiOutlineHeart size={30} color='var(--dark-gray)' />
          </a>
          <a>
            <span>{cart.length}</span>
            <AiOutlineShoppingCart size={30} color='var(--dark-gray)' />
          </a>
        </section>
      </div>
    </Container>
  );
}

export default Header;
