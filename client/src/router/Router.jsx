import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import  Home from "../pages/home/Home";
import Menu from "../pages/shops/Menu";
import Signup from "../component/Signup";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import UpdateProfile from "../pages/dashboard/UpdateProfile";


const router = createBrowserRouter([
    {
      path: "/",
      element:  <Main/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/menu',
          element:<PrivateRouter><Menu/></PrivateRouter>
        },
        {
          path:"/update-profile",
           element:<PrivateRouter><UpdateProfile/></PrivateRouter>
        }
      ]
    },
    {
      path:'/signup',
      element:<Signup/>
    }
  ]);

export default router