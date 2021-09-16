import React from "react";
import style from "./css/Contain.module.css";
import classes from "./css/loading.module.css";
import Item from "./Item";
import useFetch from "../../Hooks/useFetch";

const Contains = () => {
  const { loading, recepieData, status, fetchData } = useFetch();

  React.useEffect(() => {
    fetchData({
      url: "https://react-test-451d1-default-rtdb.asia-southeast1.firebasedatabase.app/recepie.json",
    });
  }, [fetchData]);

  const PercentageCalc = (a, b) => {
    return Math.round(100 - (a / b) * 100) + "%";
  };

  return (
    <React.Fragment>
      <div className={style.body}>
        {loading && !status && <div className={classes["lds-dual-ring"]}></div>}
        {!loading && !status && (
          <p style={{ color: "white", fontSize: "2rem" }}>No Data Found</p>
        )}
        {!loading &&
          status &&
          recepieData.map((item, index) => {
            return (
              <Item
                key={index}
                id={item.id}
                title={item.title}
                price={item.price}
                actualprice={item.actualprice}
                save={PercentageCalc(item.price, item.actualprice)}
              />
            );
          })}
        {}
      </div>
    </React.Fragment>
  );
};

export default Contains;
