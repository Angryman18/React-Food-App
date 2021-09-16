import Thumbnail from "./Thumbnail";
import style from "../css/Item.module.css";
import React from "react";
import { BiTimeFive, BiCheckCircle } from "react-icons/bi";

const ItemDetail = (props) => {
  return (
    <React.Fragment>
      <Thumbnail />
      <div className={style.itemDesc}>
        <div className={style.category}>{props.title}</div>
        <div className={style.price}>
          <span id={style.sellprice}>
            <span id={style.timeicon}>
              <BiTimeFive />
            </span>{" "}
            <span id={style.salepricetext}>Sale Price -</span>
          </span>
          <span id={style.price}> ${props.price} </span>
          <span id={style.actualprice}>${props.actualprice}</span>
          <br />
          <span id={style.save}>
            <span id={style.tickicon}>
              <BiCheckCircle />
            </span>{" "}
            You Saved {props.save}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ItemDetail;
