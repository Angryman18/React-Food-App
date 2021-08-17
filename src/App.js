import './App.css';
import Header from './Components/Header/Header';
import Middle from './Components/Middle/Backgrond';
import Contains from './Components/Contains/Contains';
import React from 'react';
import Cart from './Components/Cart/Cart';



const App = () => {

  // const theQty = React.useRef(0)
  const [theItem, setTheItem] = React.useState({})
  const [item, setItem] = React.useState({})
  const [total, setTotal] = React.useState(0)
  const [reset, setReset] = React.useState({})
  
  // Cart State
  const [cartOpen, setCartOpen] = React.useState(false)

  const Addition = (e, title) => {
   setTheItem({[title] : parseInt(e.target.value)})
  }

  const Submission = (e, title) => {
    e.preventDefault()

    const itemName = title
   
    if (itemName == Object.keys(theItem)[0]){
      if (item[itemName] !== undefined && item[itemName] > 0) {
        const itemqty = parseInt(item[itemName])
        const currItemQty = theItem[itemName]
        setItem(preState => {
          return {...preState, [itemName] : itemqty+currItemQty}
        })
        
      } 
      else {
        setItem(preState => {
          return {...preState, [itemName] : theItem[itemName]}
        })
        
      }
    }   

  }

  React.useEffect(() => {
    const arr = Object.values(item);
    let i = 0;
    arr.forEach(item => {
      i += parseInt(item)
    })
    setTotal(i)
  }, [item])

  React.useEffect(() => {
    setReset(preState => {
      return {...preState, ...theItem}
    })
  }, [theItem])

  
  return (
    <div className="App">
      <Header onClick={() => setCartOpen(true)} number={total} />
      {cartOpen ? <Cart onClickBackdrops={() => setCartOpen(false)} onClick={() => setCartOpen(false)} /> : ''}
      <Middle />
      <Contains Submission={Submission} onChange={Addition} />
    </div>
  );
}

export default App;
