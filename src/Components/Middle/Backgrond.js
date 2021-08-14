import React from 'react';
import style from './css/Background.module.css';
import Card from './Card';

const Middle = (props) => {
    return (
        <div className={style.background}>
            <div>
                <Card />
                <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" width="100%" height="100%" alt="background"/>
                
            </div>
            
        </div>
    );
}


export default Middle;