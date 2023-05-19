import App from './App.jsx'
import './index.css'
import Voiture from "./components/Voiture.jsx";
import { createRoot } from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/voiture",
        element: <Voiture />,
    },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
