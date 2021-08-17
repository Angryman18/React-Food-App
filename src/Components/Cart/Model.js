import React from 'react';
import style from './Cart.module.css';
import ReactDOM from 'react-dom';


const Model = (props) => {


    const Backdrops = (props) => {
        return (<div onClick={props.onClick} className={style.backdrop}></div>);
    }

    const Overlay = (props) => {
        return (
        <div className={style.content}>
            {props.children}
        </div>
        );
    }

    const portalElement = document.getElementById('overlays');

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrops onClick={props.onClickBackdrops} />, portalElement)}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, portalElement)}
        </React.Fragment>
    );
}


export default Model;