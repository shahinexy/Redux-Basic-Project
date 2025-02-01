
import { createBrowserRouter } from "react-router-dom";
// import Tasks from './../pages/Tasks';
import App from "@/App";
import Tasks from "@/pages/Tasks";


const routers = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Tasks/>
            }
        ]
    }
])

export default routers