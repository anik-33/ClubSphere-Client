import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePageContent from "../Pages/Home/HomePageContent";
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
import MyProfile from "@/Pages/dashboard/MyProfile/MyProfile";
import ApproveEvent from "@/Pages/dashboard/approveEvent/ApproveEvent";
import MyEvent from "@/Pages/dashboard/manageClub&event/MyEvent";
import EventUpdate from "@/Pages/dashboard/manageClub&event/EventUpdate";
import PrivateRoute from "./PrivateRoute";





export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePageContent
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
        // Component: UserClub
        element:<PrivateRoute><UserClub></UserClub></PrivateRoute>
      },
      {
        path: 'user/myevent',
        // Component: UserEvent
        element:<PrivateRoute><UserEvent></UserEvent></PrivateRoute>
      },
      // manager route
      {
        path: 'manager/clubs-manage',
        // Component: MyClub,
        element: <ManagerRoute><MyClub></MyClub></ManagerRoute>
      },
      {
        path:'manager/events-manage',
        // Component:MyEvent
        element:<ManagerRoute><MyEvent></MyEvent></ManagerRoute>
      },
      {
        path: 'manager/clubs-manage/create-newclub',
        // Component: CreateClub
        element:<ManagerRoute><CreateClub></CreateClub></ManagerRoute>
      },
      {
        path: 'manager/clubs-manage/create-newevent/:id',
        // Component: CreateEvent
        element:<ManagerRoute><CreateEvent></CreateEvent></ManagerRoute>
      },
      {
        path:'manager/events-manage/event-update/:id',
        // Component:EventUpdate
        element:<ManagerRoute><EventUpdate></EventUpdate></ManagerRoute>
      },
      // admin route 
      {
        path: 'admin/users-management',
        // Component: UsersManage
        element:<AdminRoute><UsersManage></UsersManage></AdminRoute>
      },
      {
        path: 'admin/club-management',
        // Component: ApproveClub
        element:<AdminRoute><ApproveClub></ApproveClub></AdminRoute>
      },
      {
        path: 'admin/event-management',
        // Component: ApproveEvent
        element:<AdminRoute><ApproveEvent></ApproveEvent></AdminRoute>
      },
      {
        path:'admin/club-approve-member',
        // Component:ApproveClubMember
        element:<AdminRoute><ApproveClubMember></ApproveClubMember></AdminRoute>
      },
      {
        path:'admin/registered-events-approve',
        // Component:ApproveRegisteredEvents
        element:<AdminRoute><ApproveRegisteredEvents></ApproveRegisteredEvents></AdminRoute>
      },
      {
        path:'my-profile',
        // Component:MyProfile
        element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
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