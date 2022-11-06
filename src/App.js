import React from "react";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Componetns
import Layout from "./components/Layout";

const App = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;