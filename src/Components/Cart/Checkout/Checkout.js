import React from 'react';
import style from "./Checkout.module.css";
import useInput from "../../../Hooks/useInput";
import { FoodContext } from "../../store/cart-context";

const isValidByLength = (val, num) => val.trim().length === num;

const Checkout = (props) => {

  const Context = React.useContext(FoodContext)

  const { userData, getData, isValid, isTouched, blurHandler } = useInput();

  const { value } = userData; // Destructing the state userData

  const fullnameValid = isValid(value.fullname);
  const addressValid = isValid(value.address);
  const cityValid = isValid(value.city);
  const pincodeValid = isValidByLength(value.pincode, 6);
  const phoneValid = isValidByLength(value.phone, 10);

  const fullnameTouch = isTouched("fullname");
  const addressTouch = isTouched("address");
  const cityTouch = isTouched("city");
  const pincodeTouch = isTouched("pincode");
  const phoneTouch = isTouched("phone");

  const error = (msg) => {
    return <small className={style.error}>{msg}</small>;
  };

  const formValid =
    fullnameValid && addressValid && cityValid && pincodeValid && phoneValid;

  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {
      name: value.fullname,
      address: value.address,
      city: value.city,
      pincode: value.pincode,
      phone: value.phone,
    };
    const config = {
      url: "https://react-test-451d1-default-rtdb.asia-southeast1.firebasedatabase.app/order.json",
      method: "POST",
      body: {userInfo: obj, item: Context.item, itemSum: Context.totalAmount},
      Headers: {
        'Content-Type': 'application/json'
      }
    }
    props.submitData(config)
  };

  return (
    <form onSubmit={submitHandler} className={style.control}>
      <div className={style.content}>
        <label htmlFor="FullName">
          Full Name{" "}
          {fullnameTouch && !fullnameValid && error("Fullname is Not Valid")}
        </label>
        <input
          onBlur={blurHandler}
          name="fullname"
          onChange={getData}
          type="text"
        />
      </div>
      <div className={style.content}>
        <label htmlFor="Address">
          Address{" "}
          {addressTouch && !addressValid && error("Address is Not Valid")}
        </label>
        <input
          onBlur={blurHandler}
          name="address"
          onChange={getData}
          type="text"
        />
      </div>
      <div className={style.content}>
        <label htmlFor="City">
          City {cityTouch && !cityValid && error("City is Not Valid")}
        </label>
        <input
          onBlur={blurHandler}
          name="city"
          onChange={getData}
          type="text"
        />
      </div>
      <div className={style.content}>
        <label htmlFor="PinCode">
          Pin Code{" "}
          {pincodeTouch && !pincodeValid && error("Pincode is Not Valid")}
        </label>
        <input
          onBlur={blurHandler}
          name="pincode"
          onChange={getData}
          type="text"
        />
      </div>
      <div className={style.content}>
        <label htmlFor="Phone_No">
          Phone No {phoneTouch && !phoneValid && error("Phone No is Not Valid")}
        </label>
        <input
          onBlur={blurHandler}
          name="phone"
          onChange={getData}
          type="text"
        />
      </div>
      <div className={style.content__button}>
        <button id={style.cancel} onClick={props.cancel} type="cancel">
          Cancel
        </button>
        <button disabled={!formValid} id={style.confirm} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Checkout;
