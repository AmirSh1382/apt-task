import React, { useState } from "react";

// Styles
import styles from "../styles/allAndSelectedData.module.scss";

// Components
import Group from "./shared/Group";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../redux/reducers/DataReducer";

const AllData = ({ data }) => {
  const dispatch = useDispatch();
  const { leftColumnData, rightColumnData } = useSelector(
    (state) => state.dataReducer
  );
  const [selectedItems, setSelectedItems] = useState([]);

  const addHandler = () => {
    dispatch(
      updateData({
        leftColumn: leftColumnData.filter(
          (item) => !selectedItems.find((selected) => selected.id === item.id)
        ),
        rightColumn: [...rightColumnData, ...selectedItems],
      })
    );
    setSelectedItems([]);
  };

  return (
    <div className={styles.container}>
      <h1>All Data</h1>
      <button
        onClick={addHandler}
        className={selectedItems.length ? "" : styles.inActive}
      >
        Add
      </button>
      <div>
        {data.map((group) => (
          <Group
            key={group.id}
            group={group}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        ))}
      </div>
    </div>
  );
};

export default AllData;
