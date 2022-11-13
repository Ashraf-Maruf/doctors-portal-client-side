import Main from "../../Layout/Main";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:([
            {
                path:'',
            },
            {
                path:'',
            },
            {
                path:'',
            },
            {
                path:'',
            }
        ])
    }
])

export default router;
