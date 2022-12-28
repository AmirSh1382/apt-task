import React, { useEffect } from "react";

// Components
import AllData from "./AllData";
import SelectedData from "./SelectedData";

// Hooks
import useData from "../hooks/useData";

// Redux
import { updateData } from "../redux/reducers/DataReducer";
import { useDispatch, useSelector } from "react-redux";

// Functions
import { setInToGroups } from "../helper/functions";

// Styles
import styles from "../styles/layout.module.scss";

const Layout = () => {
  const data = useData();

  const dispatch = useDispatch();
  const { leftColumnData, rightColumnData } = useSelector(
    (state) => state.dataReducer
  );

  useEffect(() => {
    if (!leftColumnData.length && !rightColumnData.length) {
      dispatch(
        updateData({
          leftColumn: data,
          rightColumn: [],
        })
      );
    }
  }, [data, dispatch, leftColumnData.length, rightColumnData.length]);

  return (
    <div className={styles.container}>
      <AllData data={setInToGroups(leftColumnData)} />
      <SelectedData data={setInToGroups(rightColumnData)} />
    </div>
  );
};

export default Layout;
