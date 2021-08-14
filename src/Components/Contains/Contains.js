import React from 'react';
import style from './css/Contain.module.css';
import Item from './Item';


const Contains = (props) => {

    const items = [
        { key: '1', title: "Baking Rice", price: 5.99, actualprice: 6.99, save: null },
        { key: '2', title: "Mutton Biriyani", price: 11.25, actualprice: 15.29, save: null },
        { key: '3', title: "Mutton Polao", price: 13.99, actualprice: 17.99, save: null },
        { key: '4', title: "Chicken Tandoori", price: 9.49, actualprice: 12.49, save: null }
    ]
    // const [foodItems, setFoodItems] = React.useState()

    const save = (a, b) => {
        return Math.round(100 - (a / b) * 100) + "%"
    }

    // const stopSubmission = (e) => {
    //     e.preventDefault()

    // }

    return (
        <React.Fragment>

            <div className={style.body}>

                {items.map((item, index) => {
                    return <Item key={index} id={index} onChange={(e) => props.onChange(e, item.title)} Submission={(e) => props.Submission(e, item.title)} title={item.title} price={item.price} actualprice={item.actualprice} save={save(item.price, item.actualprice)} button={item.title}/>
                })}

                {/* <Item key="1" refData={props.qty} Submission={props.onClick} title="baking Rice" price="5.99" actualprice="6.99" save={save(5.99, 6.99)} /> */}

            </div>
        </React.Fragment>
    )
}


export default Contains;