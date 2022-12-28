import React from "react";

// Styles
import styles from "../../styles/item.module.scss";

// Moment JS
import moment from "moment";

const Item = ({ item, selectedItems, setSelectedItems }) => {
  const changeHandler = (e) => {
    if (e.target.checked) {
      setSelectedItems((prevValue) => [...prevValue, item]);
    } else {
      setSelectedItems((prevValue) => [
        ...prevValue.filter((prevItem) => prevItem.uniqueId !== item.uniqueId),
      ]);
    }
  };

  const checkboxCheckHandler = () =>
    selectedItems.find(
      (selectedItem) => selectedItem.uniqueId === item.uniqueId
    )
      ? true
      : false;

  return (
    <div className={styles.mainContainer}>
      <div>#{item.uniqueId}</div>
      <div>{moment(item.created).format("DD/MM/YYYY")}</div>
      <input
        type="checkbox"
        onChange={changeHandler}
        checked={checkboxCheckHandler()}
      />
    </div>
  );
};

export default Item;
