import React from "react";

// Styles
import styles from "../styles/allAndSelectedData.module.scss";

// Components
import Group from "./shared/Group";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { deleteAction } from "../redux/data/dataActions";

// Functions
import { setInToGroups } from "../helper/functions";

const SelectedData = () => {
  const dispatch = useDispatch()

  const { selectedData, deleteList } = useSelector(state => state.dataState);

  const groupedData = setInToGroups(selectedData);

  const clickHandler = () => {
    dispatch(deleteAction())
  }

  return (
    <div className={styles.container}>
      <h1>Selected Data</h1>
      <button 
        onClick={clickHandler}
        className={!deleteList.length ? styles.inActive : ""} 
      >
        Delete
      </button>
      <div>
        {
          groupedData.map((obj, index) => <Group key={index} list={"delete"} {...obj} /> )
        }
      </div>
    </div>
  );
};

export default SelectedData;