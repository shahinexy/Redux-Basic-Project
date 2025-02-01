
import { createBrowserRouter } from "react-router-dom";
// import Tasks from './../pages/Tasks';
import App from "@/App";
import Tasks from "@/pages/Tasks";
import User from "@/pages/User";


const routers = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Tasks/>
            },
            {
                path: '/user',
                element: <User/>
            }
        ]
    }
])

export default routers