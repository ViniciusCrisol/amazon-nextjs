import Header from '../Header';

import { Container } from '../../styles/layout';

function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}

export default Layout;
