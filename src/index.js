import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "i18n";
import App from "components/App";
import { UserContextProvider } from "context/user";
import { CartContextProvider } from "context/cart";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
