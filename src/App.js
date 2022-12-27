import React from "react";

// Redux
import store from "./redux/store";

// Components
import Layout from "./components/Layout";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;
