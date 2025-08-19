import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Signin from "./pages/Sign-in/Signin";
import Signup from "./pages/Sign-up/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import UserDashboard from "./pages/Users/Dashboard/UserDashboard";
import UserLayout from "./components/UserLayout";
import RenterLayout from "./components/RenterLayout";
import Profile from "./pages/Users/Profile/Profile";
import CreateTurf from "./pages/Renter/CreateTurf/CreateTurf"
import Turf from "./pages/Turf/Turf";
import Filter from "./pages/Filter/Filter"
import GalleryCard from "./components/GalleryCard";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
 

function App() {
  const router = createBrowserRouter([
    { path: "/Signin", element: <Signin /> },
    { path: "/Signup", element: <Signup /> },
    { path: "/Dashboard", element: <Dashboard /> },
    {path:"/Filter",element:<Filter />},
    {  path: "/User",
      element: <UserLayout />,
      children: [
        { path: "Dashboard", element: <UserDashboard /> },
        { path: "profile", element: <Profile /> },
        { path: "turf", element: <Turf /> },
        
        
      ],
    },
    {
      path: "/Renter",
      element: <RenterLayout />,
      children: [
        
        { path: "turf/gallery", element: <Turf /> },
        { path: "turf/create", element: <CreateTurf /> },
        {}
      ],
    },
    // for the role of user

    // Default route
  ]);

  return <RouterProvider router={router} />;
}
export default App;
