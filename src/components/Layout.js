import React, { useEffect } from "react";

// Components
import SelectedItem from "./SelectedData";
import AllData from "./AllData";

// Redux
import { useDispatch } from "react-redux";
import { setAllData } from "../redux/data/dataActions";

// Hooks
import useData from "../hooks/useData";

// Styles
import styles from "../styles/layout.module.scss";

const Layout = () => {
  const dispatch = useDispatch();

  const data = useData();

  useEffect(() => {
    dispatch(setAllData(data));
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.container}>
      <AllData />
      <SelectedItem />
    </div>
  );
};

export default Layout;