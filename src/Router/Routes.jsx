import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "@/Pages/Login/Register";
import Club from "@/Pages/Clubs/Club";
import CreateClub from "@/Pages/Clubs/CreateClub";
import DashBord from "@/layout/DashBord";
import DashboardHome from "@/Pages/dashboard/DashboardHome";
import UsersManage from "@/Pages/dashboard/UsersManagement/UsersManage";





export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
     children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/clubs',
        Component:Club
      },
      
    ]

  },
  {
    path:'dashboard',
    Component:DashBord,
    children:[
      {
        index:true,
        Component:DashboardHome
      },
       {
        path: 'clubs/create',
        Component:CreateClub
      }, 
      {
        path:'users/management',
        Component:UsersManage
      },
    ]
  },
  // login route
  {
    path:'/login',
    Component:Login
  },
  {
    path:'/registration',
    Component:Register
  }
]);