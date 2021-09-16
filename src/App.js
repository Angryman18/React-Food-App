import Header from './Components/Header/Header';
import Middle from './Components/Middle/Backgrond';
import Contains from './Components/Contains/Contains';
import React from 'react';
import Cart from './Components/Cart/Cart';
import ContextProvider from './Components/store/cart-context';



const App = () => {

  const [cartOpen, setCartOpen] = React.useState(false)

  const setCartClose = () => { setCartOpen(false) }
  const makeCartOpen = React.useCallback(() => {
      setCartOpen(preState => true)
  }, [])

  
  return (
    <ContextProvider>
      {cartOpen && <Cart onClickClose={setCartClose} onClickBackdrops={setCartClose} />}
      <Header OnClick={makeCartOpen} />
      <Middle />
      <Contains />
    </ContextProvider>
  );
}

export default App;
