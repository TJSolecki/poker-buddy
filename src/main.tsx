import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import GreetingView from "./GreetingView";
import Room from "./Room";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <GreetingView />,
    },
    {
        path: "/room/:roomId",
        element: <Room />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
