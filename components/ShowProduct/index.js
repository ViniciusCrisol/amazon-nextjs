import Router from 'next/router';
import { IoMdArrowBack } from 'react-icons/io';

import { Container } from './styles';

function ShowProduct({ product }) {
  return (
    <Container>
      <a onClick={() => Router.back()}>
        <IoMdArrowBack />
        Go Back
      </a>
    </Container>
  );
}

export default ShowProduct;
