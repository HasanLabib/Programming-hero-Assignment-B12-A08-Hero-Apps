import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import RouteError from "../Error/RouteErrorPage/RouteError";

export const router= createBrowserRouter([
    {
        path:"/",
        Component: App,
        errorElement: <RouteError />,
        children:[
            {
                index:true,
                Component: Home
            }
        ]
    }
])