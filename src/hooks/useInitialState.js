import React from 'react';
//Estado inicial
const initialState = {
  //Se puede tener distintos tipos de info.
  cart: [],
  toggleOrder: false,
};
//Se crea el estado general de la Aplicación
function useInitialState() {
  const [state, setState] = React.useState(initialState);

  //Función para añadir producto al carrito
  //Modifica el estado, se actualiza el estado añadiendo un nuevo item al array
  const addToCart = (payload) => {
    setState({...state, cart: [...state.cart, payload]});
  };

  //Eliminar producto del carrito, utilizamos el index por si se repite un mismo producto
  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id),
    });
  };

  const handleToggleOrder = () => {
    if (state.cart.length) {
      setState({...state, toggleOrder: !state.toggleOrder});
    }
  };

  //Se retorna el estado y la función addToCart que modifica la info de cart[]
  return {
    state,
    addToCart,
    removeFromCart,
    handleToggleOrder,
  };
}

export {useInitialState};
