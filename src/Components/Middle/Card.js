import React from "react";
import style from "./css/Card.module.css";

const Card = (props) => {
  return (
    <div className={style.main}>
      <div className={style.Card}>
        <h2>Welcome to Foodie Hub</h2>
        <p>
          All Kind of Tasty Fast Food, Biriyani, Malwa, Jalebi, Indian Cuisine,
          Sweets and Bengali Recepies are Available at Reasonable Price
        </p>
      </div>
    </div>
  );
};

export default Card;
