import style from "../css/Item.module.css";

const Thumbnail = () => {
  return (
    <div className={style.thumbnail}>
      <img
        src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
        alt="background"
        className={style.imagestyle}
      />
    </div>
  );
};

export default Thumbnail;
