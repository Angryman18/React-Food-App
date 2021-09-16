import React from "react";
import style from "./Cart.module.css";
import ReactDOM from "react-dom";
import { FoodContext } from "../store/cart-context";
import Checkout from "./Checkout/Checkout";
import useFetch from "../../Hooks/useFetch";



const Model = (props) => {
  const Context = React.useContext(FoodContext);
  const [isCheckout, setIsCheckout] = React.useState(false);
  const [error, setError] = React.useState(false);

  const { fetchData, loading, status } = useFetch();

  // const totalItem = Context.item.reduce((a, b) => {
  //   return a + +b.amount;
  // }, 0);

  const CheckOut = () => {
    if (Context.item.length > 0) {
      setIsCheckout(true);
      setError(false);
    } else {
      setIsCheckout(false);
      setError(true);
    }
  };

  const submitData = (config) => {
    fetchData(config);
    Context.resetCart();
  };

  React.useEffect(() => {
    if (!Context.item.length > 0) {
      setIsCheckout(false);
    }
  }, [Context.item.length]);

  // Backdrops
  const Backdrops = (props) => {
    return <div onClick={props.onClick} className={style.backdrop}></div>;
  };

  const footerSection = (
    <>
      <span id={style.footer__text}>Billed Amount</span>
      <span id={style.footer_amount}>
        ${+Context.totalAmount.toFixed(2)}
      </span>{" "}
    </>
  );

  const totalQty = Context.item.reduce((a,b) => {
    return a + +b.amount
  },0)
  const hideButton = (
    <div className={style.hideButton}>
      <span onClick={() => setIsCheckout(false)}>⬆ Total {totalQty} Items </span>
    </div>
  );


  

  const Overlay = (props) => {
    return (
      <div className={style.content}>
        {error && <p className={style.error__cart}>No Item Found.</p>}
        {!isCheckout ? (
          <div className={style.contentInner}>{props.children}</div>
        ) : (
          hideButton
        )}

        <div className={style.footer}>
          {!status && footerSection}
          {!isCheckout && !status && (
            <>
              {/* <button onClick={props.close} id={style.close}>
                Close
              </button> */}
              <button onClick={CheckOut} className={style.close}>
                Check Out
              </button>
            </>
          )}
        </div>
        {isCheckout && Context.item.length > 0 && !loading && !status && (
          <Checkout submitData={submitData} cancel={props.close} />
        )}

        {loading && <p className={style.orderPlace}>Loading</p>}
        {!loading && status && (
          <p className={style.orderPlace}>
            ✔ You Have Successfully Place the Order
          </p>
        )}
      </div>
    );
  };

  const portalElement = document.getElementById("overlays");

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrops onClick={props.onClickBackdrops} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <Overlay close={props.onClickClose}>{props.children}</Overlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Model;
