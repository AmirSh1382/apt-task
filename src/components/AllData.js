import React from "react";

// Styles
import styles from "../styles/allAndSelectedData.module.scss";

// Components
import Group from "./shared/Group";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { addAction } from "../redux/data/dataActions";

// Functions
import { setInToGroups } from "../helper/functions";

const AllData = () => {
  const dispatch = useDispatch()

  const { allData, addList } = useSelector(state => state.dataState);

  const groupedData = setInToGroups(allData);

  const clickHandler = () => {
    dispatch(addAction())
  }

  return (
    <div className={styles.container}>
      <h1>All Data</h1>
      <button 
        onClick={clickHandler}
        className={!addList.length ? styles.inActive : ""} 
      >
        Add
      </button>
      <div >
        {
          groupedData.map(obj => <Group key={obj.groupID} list={"add"} {...obj} />)
        }
      </div>
    </div>
  );
};

export default AllData;