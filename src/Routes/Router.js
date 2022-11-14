import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import About from "../components/Pages/About";
import Appointment from "../components/Pages/Appointment";
import Reviews from "../components/Pages/Reviews";
import Contact from "../components/Pages/Contact";
import Signup from "../components/Pages/Signup";
import Login from "../components/Pages/Login";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/home',
            element:<Home></Home>
        },
        {
            path:'/about',
            element: <About></About>
        },
        {
            path:'/aPPointment',
            element: <Appointment></Appointment>
        },
        {
            path:'/reviews',
            element:<Reviews></Reviews>
        },
        {
            path:'/contact',
            element: <Contact></Contact>
        },
        {
            path:'/signup',
            element: <Signup></Signup>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
    ]
  }
]);
export default router;