import React, { useState } from "react";

// Styles
import styles from "../styles/allAndSelectedData.module.scss";

// Components
import Group from "./shared/Group";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../redux/reducers/DataReducer";

const SelectedData = ({ data }) => {
  const dispatch = useDispatch();
  const { leftColumnData, rightColumnData } = useSelector(
    (state) => state.dataReducer
  );
  const [selectedItems, setSelectedItems] = useState([]);

  const deleteHandler = () => {
    dispatch(
      updateData({
        leftColumn: [...leftColumnData, ...selectedItems],
        rightColumn: rightColumnData.filter(
          (item) =>
            !selectedItems.find(
              (selectedItem) => item.uniqueId === selectedItem.uniqueId
            )
        ),
      })
    );
    setSelectedItems([]);
  };

  return (
    <div className={styles.container}>
      <h1>Selected Data</h1>
      <button
        onClick={deleteHandler}
        className={selectedItems.length ? "" : styles.inActive}
      >
        Delete
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

export default SelectedData;
