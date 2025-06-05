import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Signin from "./pages/Sign-in/signin";
import Signup from "./pages/Sign-up/signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import UserDashboard from "./pages/Users/Dashboard/UserDashboard";
import UserLayout from "./components/UserLayout";
import Profile from "./pages/Users/Profile/Profile";

function App() {
  const router = createBrowserRouter([
    { path: "/Signin", element: <Signin /> },
    { path: "/Signup", element: <Signup /> },
    { path: "/Dashboard", element: <Dashboard /> },
    {
      path: "/User",
      element: <UserLayout />,
      children: [
        { path: "Dashboard", element: <UserDashboard /> },
        { path: "profile", element: <Profile /> },
      ],
    },
    // for the role of user

    // Default route
  ]);

  return <RouterProvider router={router} />;
}
export default App;
