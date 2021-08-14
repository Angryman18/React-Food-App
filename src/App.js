import './App.css';
import Header from './Components/Header/Header';
import Middle from './Components/Middle/Backgrond';
import Contains from './Components/Contains/Contains';
import React from 'react';




const App = () => {

  // const theQty = React.useRef(0)
  const [item, setItem] = React.useState([{}])
  const [total, setTotal] = React.useState(0)  

  const Addition = (e, title) => {
    const value = item;
    value.map((itm => {
      Object.assign(itm, {[title]: parseInt(e.target.value)})
    }))
    setItem(value)
  }

  const Submission = (e, title) => {
    e.preventDefault()

    let i = 0;
    item.forEach((itm) => {
     const val = Object.values(itm)
      val.forEach(num => {
        i += num
      })
    })
    setTotal(i)

  }

  

  return (
    <div className="App">
      <Header number={total} />
      <Middle />
      <Contains value="0" Submission={Submission} onChange={Addition} />
    </div>
  );
}

export default App;
