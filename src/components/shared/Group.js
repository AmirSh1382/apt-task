import React, { useState } from "react";

// Components
import Item from "./Item";

// Styles
import styles from "../../styles/group.module.scss";

const Group = ({ group, selectedItems, setSelectedItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const changeHandler = (e) => {
    if (e.target.checked) {
      setSelectedItems((prevValue) => [
        ...prevValue.filter(
          (item) => !group.items.find((groupItem) => groupItem.id === item.id)
        ),
        ...group.items,
      ]);
    } else {
      setSelectedItems((prevValue) => [
        ...prevValue.filter((item) => item.id !== group.id),
      ]);
    }
  };

  const checkboxCheckHandler = () => {
    const mainItems = selectedItems.filter((item) => item.id === group.id);
    return mainItems.length === group.items.length;
  };

  return (
    <div className={styles.container}>
      <div className={styles.groupInfo}>
        <div>{group?.id}</div>

        <div>quantity:{group.items.length}</div>

        <input
          type="checkbox"
          onChange={changeHandler}
          checked={checkboxCheckHandler()}
        />

        <i
          onClick={() => setIsOpen(!isOpen)}
          className={`${isOpen && styles.open}
            bi bi-caret-down-fill`}
        ></i>
      </div>
      <div className={`${styles.itemsList} ${isOpen && styles.open}`}>
        {group.items.map((item) => (
          <Item
            key={item.uniqueId}
            item={item}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        ))}
      </div>
    </div>
  );
};

export default Group;
