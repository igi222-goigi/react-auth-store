import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App.jsx";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap stylesheet
import "@fortawesome/fontawesome-free/css/all.min.css"; // fontawesome stylesheet

import reducer, { initialState } from "./store/reducer";
import { StateProvider } from "./store/StateProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </StateProvider>
  </React.StrictMode>
);
