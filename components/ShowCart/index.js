import { AiOutlineDelete } from 'react-icons/ai';

import Empty from '../Empty';
import { Container, ProductTable } from './styles';
import { useCart } from '../../Hooks/CartContext';

function ShowCart() {
  const { cart, value, removeFromCart } = useCart();

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <Container>
      {cart.length > 0 ? (
        <>
          <ProductTable>
            <thead>
              <tr>
                <th />
                <th>PRODUCT/PRICE</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img src={product.image} alt={product.name} />
                  </td>
                  <td>
                    <strong>{product.name}</strong>
                    <span>${product.price}</span>
                  </td>
                  <td>
                    <button onClick={() => removeFromCart({ id: product.id })}>
                      <AiOutlineDelete size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </ProductTable>
          <footer>
            <span>{formatter.format(value)}</span>
            <button type='button'>Check out</button>
          </footer>
        </>
      ) : (
        <Empty />
      )}
    </Container>
  );
}

export default ShowCart;
