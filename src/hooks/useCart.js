import React from 'react';
import {AppContext} from '../context/AppContext';

function useCart(product) {
  //De AppContext, obtenemos las funciones para añadir y remover producto
  //La lista de productos añadidos de state.cart
  const {state, addToCart, removeFromCart} = React.useContext(AppContext);

  //Estado para los íconos de cart
  const [added, setAdded] = React.useState(false);

  let listenChange = state.cart[state.cart.indexOf(product)];

  React.useEffect(() => {
    if (!state.cart.find((item) => item.id === product.id)) {
      setAdded(false);
    } else {
      setAdded(true);
    }
  }, [listenChange, state.cart, product.id]);

  const handleCart = () => {
    setAdded(!added);
    if (added) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  return {added, handleCart};
}

export {useCart};
