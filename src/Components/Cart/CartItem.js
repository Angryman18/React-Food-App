import React from "react";
import style from "./Cart.module.css";

const CartItem = (props) => {
  return (
    <div className={style.cartContent}>
      <div className={style.item}>
        <span id={style.title}>{props.title}</span>
        <div className={style.cartContent__middle}>
          <button onClick={props.onRemove} id={style.button}>
            -
          </button>
          <span id={style.qty}>{props.qty} Qty</span>
          <button onClick={props.onAdd} id={style.button}>+</button>
        </div>

        <span id={style.amount}>${props.amount}</span>
      </div>
    </div>
  );
};

export default CartItem;
