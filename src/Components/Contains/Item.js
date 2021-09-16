import React from "react";
import style from "./css/Item.module.css";
import ItemDetail from "./ItemComponents/ItemDetail";
import Input from "./ItemComponents/Input";
import { FoodContext } from "../store/cart-context";

const Item = (props) => {
  const itemAmount = React.useRef();

  const Context = React.useContext(FoodContext);

  const Submission = (e) => {
    e.preventDefault();

    const enteredAmount = parseInt(itemAmount.current.value);
    // const totalAmount =
    //   Context.totalAmount + +itemAmount.current.value * props.price;

    if (enteredAmount === null || enteredAmount === "" || enteredAmount < 1) {
      return;
    }
    const itemObj = {
      id: props.id,
      item: props.title,
      price: props.price,
      amount: enteredAmount,
    };

    Context.addItems(itemObj);

    // props.enteredAmount(enteredAmount)
  };

  return (
    <React.Fragment>
      <div className={style.item}>
        <ItemDetail
          id={props.id}
          title={props.title}
          price={props.price}
          actualprice={props.actualprice}
          save={props.save}
        />

        <Input Submission={Submission} ref={itemAmount} />
      </div>
    </React.Fragment>
  );
};

export default Item;
