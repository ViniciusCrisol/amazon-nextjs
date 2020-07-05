import Link from 'next/link';
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiFillAmazonCircle,
} from 'react-icons/ai';

import { Container, Content } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <Link href='/'>
          <AiFillAmazonCircle size={40} color='var(--primary)' />
        </Link>
        <section>
          <Link href='/'>
            <a>
              <span>0</span>
              <AiOutlineHeart size={30} color='var(--dark-gray)' />
            </a>
          </Link>
          <Link href='/'>
            <a>
              <span>0</span>
              <AiOutlineShoppingCart size={30} color='var(--dark-gray)' />
            </a>
          </Link>
        </section>
      </Content>
    </Container>
  );
}

export default Header;
