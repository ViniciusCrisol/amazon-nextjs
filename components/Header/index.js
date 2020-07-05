import Link from 'next/link';

import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiFillAmazonCircle,
} from 'react-icons/ai';

import { Container } from './styles';

import { useCart } from '../../Hooks/CartContext';

function Header() {
  const { products } = useCart();

  console.log(products);

  return (
    <Container>
      <div>
        <AiFillAmazonCircle size={40} color='var(--primary)' />
        <section>
          <a>
            <span>0</span>
            <AiOutlineHeart size={30} color='var(--dark-gray)' />
          </a>
          <a>
            <span>{products.length}</span>
            <AiOutlineShoppingCart size={30} color='var(--dark-gray)' />
          </a>
        </section>
      </div>
    </Container>
  );
}

export default Header;
