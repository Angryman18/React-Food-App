import React from "react";
import style from "./css/Header.module.css";
import { FaShoppingBag } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FoodContext } from "../store/cart-context";

const Header = (props) => {
  const [cartAdd, setCartAdd] = React.useState(false);

  const Context = React.useContext(FoodContext);

  const totalQty = Context.item.reduce((a, b) => {
    return a + +b.amount;
  }, 0);

  let myclass = `${style.cart}  ${cartAdd ? style.animation : ""}`;
  React.useEffect(() => {

    if (Context.item.length === 0) {
      return;
    }
    setCartAdd(true);

    const timer = setTimeout(() => {
      setCartAdd(false);
    }, 300);

    return () => {
      clearTimeout(timer)
    }

  }, [totalQty, Context.item.length]);

  // console.log("running")
  

  return (
    <IconContext.Provider value={{ color: "white", size: "20px" }}>
      <div className={style.header}>
        <div className={style.brand}>Foodie Hub</div>

        <div onClick={props.OnClick} className={myclass}>
          <span id="default">Your Item</span>
          <FaShoppingBag />
          <span className={style.number}>{totalQty}</span>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default React.memo(Header);
