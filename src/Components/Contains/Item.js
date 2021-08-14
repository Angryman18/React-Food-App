import React from 'react';
import style from './css/Item.module.css';
import {BiTimeFive, BiCheckCircle} from 'react-icons/bi';

const Item = (props) => {

    return (
        <React.Fragment>
            <div className={style.item}>
                <div className={style.thumbnail}>
                    <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" alt="background" width="100px" height="100px" />
                </div>
                <div className={style.itemDesc}>
                    <div className={style.category}>{props.title}</div>
                    <div className={style.price}>
                    <span id={style.sellprice}>
                        <span id={style.timeicon}><BiTimeFive /></span> <span id={style.salepricetext}>Sale Price -</span></span>
                    <span id={style.price}> ${props.price} </span>
                    <span id={style.actualprice}>${props.actualprice}</span><br/>
                    <span id={style.save}>
                    <span id={style.tickicon}><BiCheckCircle /></span> You Save {props.save} with this Purchase</span>
                    </div>
                </div>
                <form onSubmit={props.Submission} className={style.itemQun}>
                    <div>
                        <span id={style.qty}>Qty: </span>
                        <span id={style.qtyinput}><input onChange={props.onChange} type="number" min="1" value={props.value} /></span>
                    </div>
                    <div className={style.button}><button name={props.button} type="submit" id={style.btnAdd}>Buy</button></div>
                </form>
                
            </div>
        </React.Fragment>
    )
}


export default Item;