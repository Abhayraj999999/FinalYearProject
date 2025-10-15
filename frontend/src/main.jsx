import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Add Tailwind or custom styling here
import { RouterProvider } from "react-router-dom";
import appRouter from "./routes/AppRoutes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
