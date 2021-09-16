import React from "react";

const reducer = (state, actions) => {
  switch (actions.type) {
    case "loading":
      return { ...state, loading: actions.value };
    case "status":
      return { ...state, state: actions.value };
    case "data":
      return {
        ...state,
        recepieData: actions.data,
        status: actions.status,
        loading: actions.loading,
      };
    case "error":
      return { ...state, loading: false, status: false };
    default:
      return state;
  }
};

const useFetch = () => {
  const defaultValue = {
    recepieData: [],
    loading: false,
    status: false,
  };

  const [state, dispatcher] = React.useReducer(reducer, defaultValue);

  const fetchData = React.useCallback(async(config) => {
    dispatcher({ type: "loading", value: true });
    try {
      const res = await fetch(config.url, {
        method: config.method ? config.method : "GET",
        body: config.body ? JSON.stringify(config.body) : null,
        Headers: config.headers ? config.headers : null
      });

      const data = await res.json();
      if (data === null) {
        throw new Error("Data Not Found");
      }
      
      dispatcher({ type: "data", data: data, loading: false, status: true });
    } catch (error) {
      dispatcher({ type: "error" });
    }
  }, [])     

  const { recepieData, loading, status } = state;

  return {
    recepieData,
    loading,
    status,
    fetchData,
  };
};

export default useFetch;
