import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./globalStyles/Global.styles";
import App from "./App";
import store from "./redux-toolkit/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        closeOnClick
        pauseOnHover={false}
        theme="light"
      />
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);
