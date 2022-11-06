import React from "react";

// Styles
import styles from "../../styles/item.module.scss";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { updateAddList, updateDeleteList } from "../../redux/data/dataActions";

// Moment JS
import moment from "moment";

// Functions
import {
  addObjToDeleteList,
  removeObjFromDeleteList,
  isObjExistsInList,
  addObjToAddList,
  removeObjFromAddList
} from "../../helper/functions";

const Item = (data) => {
  const dispatch = useDispatch();

  const { addList, deleteList } = useSelector(state => state.dataState);

  const { itemData, list } = data;
  const { uniqueId, created } = itemData;

  const changeHandler = (e) => {
    if (list === "add") {
      e.target.checked &&
        dispatch(updateAddList(addObjToAddList(addList, itemData)));

      !e.target.checked &&
        dispatch(updateAddList(removeObjFromAddList(addList, itemData)));
    } else {
      e.target.checked &&
        dispatch(updateDeleteList(addObjToDeleteList(deleteList, itemData)));

      !e.target.checked &&
        dispatch(updateDeleteList(removeObjFromDeleteList(deleteList, itemData)));
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div>#{uniqueId}</div>

      <div>{moment(created).format("DD/MM/YYYY")}</div>

      <input
        checked={
          list === "add"
            ? isObjExistsInList(addList, itemData)
            : isObjExistsInList(deleteList, itemData)
        }
        type="checkbox"
        onChange={changeHandler}
      />
    </div>
  );
};

export default Item;