import React from "react";
import style from "../css/Item.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <form onSubmit={props.Submission} className={style.itemQun}>
      <div>
        <span id={style.qty}>Qty: </span>
        <span id={style.qtyinput}>
          <input ref={ref} type="number" min="1" defaultValue="1" step="1" />
        </span>
      </div>
      <div className={style.button}>
        <button type="submit" id={style.btnAdd}>
          Buy
        </button>
      </div>
    </form>
  );
});

export default Input;
