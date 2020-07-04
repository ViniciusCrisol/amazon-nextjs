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
          <AiOutlineHeart size={30} color='var(--secondary)' />
          <AiOutlineShoppingCart size={30} color='var(--secondary)' />
        </section>
      </Content>
    </Container>
  );
}

export default Header;
