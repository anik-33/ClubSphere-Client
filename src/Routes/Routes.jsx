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
import ManagerRoute from "./ManagerRoute";
import AdminRoute from "./AdminRoute";
import ClubDetails from "@/Pages/Details/ClubDetails";
import AllClub from "@/Pages/dashboard/manageClub&event/MyClub";
import CreateEvent from "@/Pages/dashboard/CreateEvent/CreateEvent";
import MyClub from "@/Pages/dashboard/manageClub&event/MyClub";
import ApproveClub from "@/Pages/dashboard/approveClub/ApproveClub";
import Events from "@/Pages/Events/Events";
import EventDetails from "@/Pages/Events/EventDetails";
import UserClub from "@/Pages/dashboard/userClublist/userClub";
import UserEvent from "@/Pages/dashboard/userEvent/UserEvent";
import LoginLayout from "@/layout/LoginLayout";
import ApproveClubMember from "@/Pages/dashboard/approveClubMember/ApproveClubMember";
import ApproveRegisteredEvents from "@/Pages/dashboard/approveRegisteredEvents/ApproveRegisteredEvents";





export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/clubs',
        Component: Club
      },
      {
        path: '/clubs/:id',
        element: <ClubDetails></ClubDetails>
      },
      {
        path: '/events',
        Component: Events
      },
      {
        path: '/events/details/:id',
        Component: EventDetails
      }

    ]

  },
  {
    path: 'dashboard',
    Component: DashBord,
    children: [
      {
        index: true,
        Component: DashboardHome
      },
      {
        path: 'user/myclub',
        Component: UserClub
      },
      {
        path: 'user/myevent',
        Component: UserEvent
      },

      {
        path: 'clubs/manage',
        Component: MyClub
        // manager route
      },
      {
        path: 'clubs/manage/create/newclub',
        Component: CreateClub
        // element:<ManagerRoute><CreateClub></CreateClub></ManagerRoute>
      },
      {
        path: 'clubs/manage/create/newevent/:id',
        Component: CreateEvent
      },
      // admin route 
      {
        path: 'users/management',
        Component: UsersManage
        // element:<AdminRoute><UsersManage></UsersManage></AdminRoute>
      },
      {
        path: 'club/management',
        Component: ApproveClub
      },
      {
        path:'club/approve-member',
        Component:ApproveClubMember
      },
      {
        path:'registered-events/approve',
        Component:ApproveRegisteredEvents
      }
    ]
  },
  // login route
  {
    path: 'login',
    Component: LoginLayout,
    children: [
      {
        index:true,
        Component: Login
      },
      {
        path: 'registration',
        Component: Register
      }
    ]
  }

]);