import { AiOutlineDelete } from 'react-icons/ai';

import Empty from '../Empty';
import { Container, ProductTable } from './styles';
import { useFavorites } from '../../Hooks/FavoritesContext';

function ShowFavorites() {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <Container>
      {favorites.length > 0 ? (
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>PRODUCT/PRICE</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {favorites.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={product.name} />
                </td>
                <td>
                  <strong>{product.name}</strong>
                  <span>${product.price}</span>
                </td>
                <td>
                  <button
                    onClick={() => removeFromFavorites({ id: product.id })}
                  >
                    <AiOutlineDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>
      ) : (
        <Empty />
      )}
    </Container>
  );
}

export default ShowFavorites;
