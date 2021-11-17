import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from "components";
import store from "utils/configureStore";
import Auth from "pages/Auth";

import "./index.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="mainContainer">
        <Header isUser={false} />
        <BrowserRouter>
          <Routes>
            <Route element={<Auth />} path="/" />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
