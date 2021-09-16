import React from "react";

const Reducer = (state, actions) => {
  if (actions.type === "add") {
    const theIndex = state.item.findIndex((itm) => {
      return itm.id === actions.item.id;
    });

    if (theIndex >= 0) {
      const getItem = state.item[theIndex];
      const newObj = {
        ...getItem,
        amount: getItem.amount + actions.item.amount,
      };
      const stateCopy = [...state.item];
      stateCopy[theIndex] = newObj;
      const amount_arr =
        state.totalAmount + actions.item.price * actions.item.amount;
      return { item: stateCopy, totalAmount: amount_arr };
    } else {
      const item = [...state.item, actions.item];
      const theAmount =
        state.totalAmount + actions.item.price * actions.item.amount;
      return { item: item, totalAmount: theAmount };
    }
  } else if (actions.type === "remove") {
    const theIndex = state.item.findIndex((itm) => {
      return itm.id === actions.item.id;
    });

    if (theIndex >= 0) {
      const getItem = state.item[theIndex];
      if (getItem.amount > 1) {
        const amount = getItem.amount - 1;
        const newObj = { ...getItem, amount: amount };
        const newItem = [...state.item];
        newItem[theIndex] = newObj;
        const amount_arr = state.totalAmount - +getItem.price;
        return { item: newItem, totalAmount: amount_arr };
      } else {
        const newItem = [...state.item];
        newItem.splice(theIndex, 1);
        const amount_arr = state.totalAmount - +getItem.price;
        return { item: newItem, totalAmount: amount_arr };
      }
    }
  } else if (actions.type === "add_single_item") {
    const getIndex = state.item.findIndex(itm => {
      return itm.id === actions.item.id
    })
    const stateCopy = [...state.item]
    const getData = state.item[getIndex]
    const amount = +getData.amount + 1
    const itemObj = {...getData, amount: amount}
    stateCopy[getIndex] = itemObj
    const totalAmt = state.totalAmount + +getData.price
    return {...state, item: stateCopy, totalAmount: totalAmt}
  } else if (actions.type === "reset") {
    return {item: [], totalAmount: 0}
  }
};

const DefaultValue = {
  item: [],
  totalAmount: 0,
};

export const FoodContext = React.createContext({
  item: [],
  totalAmount: 0,
  addItems: (item) => {},
  removeItem: (item) => {},
});

const ContextProvider = (props) => {
  // initialising Reducer FUnction
  const [state, dispatcher] = React.useReducer(Reducer, DefaultValue);

  const addItems = (item) => {
    dispatcher({ type: "add", item: item });
  };

  const addSingleItem = item => {
    dispatcher({type: "add_single_item", item: item})
  }

  const removeItem = (item) => {
    dispatcher({ type: "remove", item: item });
  };

  const resetCart = () => {
    dispatcher({type: "reset"})
  }

  const ProviderValue = {
    item: state.item,
    totalAmount: state.totalAmount,
    addItems: addItems,
    addSingleItem: addSingleItem,
    removeItem: removeItem,
    resetCart: resetCart
  };

  return (
    <FoodContext.Provider value={ProviderValue}>
      {props.children}
    </FoodContext.Provider>
  );
};

export default ContextProvider;
