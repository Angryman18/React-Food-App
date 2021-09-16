import React from "react";
import Model from "./Model";
import { FoodContext } from "../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const Context = React.useContext(FoodContext);

  const amount = (a, b) => {
    return (+a * +b).toFixed(2);
  };

  const removeitem = (item) => {
    Context.removeItem(item);
  };

  const addItems = (item) => {
    Context.addSingleItem(item)
  }


  const cartItems = Context.item.map((itm) => (
    <CartItem
      key={itm.id}
      id={itm.id}
      title={itm.item}
      qty={itm.amount}
      price={itm.price}
      onRemove={removeitem.bind(null, itm)}
      onAdd={addItems.bind(null, itm)}
      amount={amount(itm.price, itm.amount)}
    />
  ));

   return (
    <Model onClickClose={props.onClickClose} onClickBackdrops={props.onClickBackdrops}>
      {cartItems}
    </Model>
  );
};

export default Cart;
