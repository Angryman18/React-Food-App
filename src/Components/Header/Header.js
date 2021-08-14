import React from 'react';
import style from './css/Header.module.css';
import {FaShoppingBag} from 'react-icons/fa';
import {IconContext} from 'react-icons';




const Header = (props) => {
    return (
        <IconContext.Provider value={{ color: "white", size: "20px"}}>
            <div className={style.header}>
                <div className={style.brand}>Foodie Hub</div>
                <div className={style.cart}><span id="default">Your Item</span><FaShoppingBag /><span className={style.number}>{props.number}</span></div>
            </div>
        </IconContext.Provider>
    )
}

export default Header;