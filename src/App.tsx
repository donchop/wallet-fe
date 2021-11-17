import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "utils/configureStore";
import Auth from "pages/Auth";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Auth />} path="/" />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
