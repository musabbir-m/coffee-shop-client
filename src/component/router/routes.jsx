


import  {createBrowserRouter}  from "react-router-dom";
import Home from "../../pages/Home/Home"
import Login from "../../pages/Login/Login"
import MainLayout from "../../Layout/MainLayout"
import Signup from "../../pages/Signup/Signup"
import Allmenu from "../../pages/Allmenu/Allmenu";





const router= createBrowserRouter([

    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

           
            {
                path: '/allmenu',
                element: <Allmenu></Allmenu>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
        ]
    }
])

export default router