import App from "components/App/App";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./bootstrap.min.css";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "store/store";
import { PersistGate } from "redux-persist/integration/react";

const container = document.getElementById("root");
if (!container) throw Error("No div with class root was founded");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
