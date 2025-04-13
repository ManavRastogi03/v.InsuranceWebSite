// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "../src/routes/AppRoutes.jsx"; // your custom route file
import { FormDataProvider } from "./Component/Context/FormDataContext.jsx"; // ✅ import your context
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormDataProvider>
      <RouterProvider router={router} />
    </FormDataProvider>
  </React.StrictMode>
);
