


import  {createBrowserRouter}  from "react-router-dom";
import Home from "../../pages/Home/Home"
import Login from "../../pages/Login/Login"
import MainLayout from "../../Layout/MainLayout"
import Signup from "../../pages/Signup/Signup"
import Allmenu from "../../pages/Allmenu/Allmenu";
import PrivateRoute from "./PrivateRoute";
import MenuDetail from "../../pages/MenuDetail/MenuDetail";





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
            {
                path: "/menu/:id",
                element: (
                  <PrivateRoute><MenuDetail></MenuDetail></PrivateRoute>
                ),
                loader: ({ params }) =>
                  fetch(`https://coffee-server-six.vercel.app/menu/${params.id}`),
              },

              {
                path: "/allmenu",
                element: <PrivateRoute><Allmenu></Allmenu></PrivateRoute>
              }
        ]
    }
])

export default router