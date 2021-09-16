import React from "react";

const useInput = () => {
  const defaultValue = {
    value: {
      fullname: "",
      address: "",
      pincode: "",
      city: "",
      phone: "",
    },
    touch: {
      fullname: false,
      address: false,
      pincode: false,
      city: false,
      phone: false,
    },
  };

  const [userData, setUserData] = React.useState(defaultValue);

  const isValid = (val) => {
    const isValid = val.trim().length > 0;
    return isValid;
  };

  const isTouched = (val) => {
    const touch = userData.touch[val];
    return touch;
  };

  const getData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const obj = { ...userData.value, [name]: value };
    setUserData((preState) => {
      return { ...preState, value: obj };
    });
  };

  const blurHandler = (e) => {
    const name = e.target.name;
    const obj = { ...userData.touch, [name]: true };
    setUserData((preState) => {
      return { ...preState, touch: obj };
    });
  };

  const manualBlur = (val) => {
    const obj = {...userData.touch, [val]: true}
    setUserData(preState => {
      return {...userData, touch: obj}
    })
  }

  return {
    getData,
    blurHandler,
    manualBlur,
    isTouched,
    isValid,
    userData,
  };
};

export default useInput;
