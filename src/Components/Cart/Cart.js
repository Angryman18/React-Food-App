import React from 'react';
import style from './Cart.module.css';
import Model from './Model';


const Cart = (props) => {


    return (
        <React.Fragment>
            <Model onClickBackdrops={props.onClickBackdrops}>
                <div onClick={props.onClick} className={style.close}>&times;</div>
                <div className={style.cartMain}>
                    <div className={style.cartContent}>
                        <span id={style.title}>Baking Rice</span>
                        <span id={style.qty}>x54</span>
                        <span id={style.amount}>$45.65</span>
                    </div>

                    <div className={style.cartContent}>
                        <span id={style.title}>Baking Rice</span>
                        <span id={style.qty}>x54</span>
                        <span id={style.amount}>$45.65</span>
                    </div>

                    <div className={style.cartContent}>
                        <span id={style.title}>Baking Rice</span>
                        <span id={style.qty}>x54</span>
                        <span id={style.amount}>$45.65</span>
                    </div>
                    
                </div>
                
            </Model>
            
        </React.Fragment>
    );

}

export default Cart;