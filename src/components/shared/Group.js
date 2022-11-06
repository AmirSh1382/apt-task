import React, { useState } from "react";

// Components
import Item from "./Item";

// Styles
import styles from "../../styles/group.module.scss";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { updateAddList, updateDeleteList } from "../../redux/data/dataActions"; 

// Functions
import {
  addGroupToAddList,
  removeGroupFromAddList,
  addGroupToDeleteList,
  isGroupExistsInList,
  removeGroupFromDeleteList,
} from "../../helper/functions";

const Group = ({ groupID, items, list }) => {
  const dispatch = useDispatch();

  const { addList, deleteList } = useSelector(state => state.dataState);
  
  const [isItemsListOpen, setIsItemsListOpen] = useState(false);

  const changeHandler = (e) => {
    if (list === "add") {
      e.target.checked &&
        dispatch(updateAddList(addGroupToAddList(addList, items)));

      !e.target.checked &&
        dispatch(updateAddList(removeGroupFromAddList(addList, groupID)));
    } else {
      e.target.checked &&
        dispatch(updateDeleteList(addGroupToDeleteList(deleteList, items)));

      !e.target.checked &&
        dispatch(updateDeleteList(removeGroupFromDeleteList(deleteList, groupID)));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.groupInfo}>
        <div>{groupID}</div>

        <div>quantity:{items.length}</div>

        <input
          checked={
            list === "add"
              ? isGroupExistsInList(addList, groupID, items)
              : isGroupExistsInList(deleteList, groupID, items)
          }
          type="checkbox"
          onChange={changeHandler}
        />

        <i
          onClick={() => setIsItemsListOpen(!isItemsListOpen)}
          className={`${isItemsListOpen && styles.open}
            bi bi-caret-down-fill`}
        ></i>
      </div>
      <div className={`${styles.itemsList} ${isItemsListOpen && styles.open}`}>
        {
          items.map(item => <Item key={item.uniqueId} list={list} itemData={item} />)
        }
      </div>
    </div>
  );
};

export default Group;