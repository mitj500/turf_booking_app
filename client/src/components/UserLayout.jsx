import React from "react";
import UserNavbar from "./UserNavbar";
import { Outlet } from "react-router-dom";
import Cookies from "js-cookie"; // Make sure to install js-cookie package
import { useEffect } from "react";
import Loading from "./Loading"; // Assuming you have a Loading component for loading state
function UserLayout() {
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    const cookies = Cookies.get("token");
    if (!cookies) {
      window.location.href = "/Signin"; // Redirect to sign-in page if token is not present
      alert("Please login to access this page");
    } else {
      setTimeout(() => {
        setLoading(false); // Set loading to false after checking for the token
      }, 3000); // Simulate a delay for loading state
    }
  }, []);

  if (loading) {
    return <Loading />; // Show a loading state while checking for the token
  }

  return (
    <div>
      <UserNavbar />

      <Outlet />
      {/* This Outlet component will render the child routes defined in the UserLayout route */}
      {/* For example, it will render the Dashboard, Profile, and Turf components based on the current route */}
      {/* You can add more components or layout elements here if needed */}
      {/* This is a placeholder for the main content area where child components will be rendered */}
      {/* You can style this layout further as per your design requirements */}
      {/* The UserNavbar component will be displayed at the top of the layout */}
      {/* The Outlet will render the specific user-related pages like Dashboard, Profile, etc. */}
      {/* You can also add a footer or other common elements here if needed */}
      {/* This layout is designed to be used for user-related pages, providing a consistent navigation experience */}
      {/* The Outlet component allows for nested routing, making it easy to manage different user views */}
      {/* You can customize the UserNavbar to include links to different user sections */}
      {/* This layout can be extended with additional features like breadcrumbs, notifications, etc. */}
      {/* The Outlet will dynamically render the content based on the current route */}
      {/* This is a flexible layout that can adapt to various user-related pages */}
      {/* You can also add a sidebar or other navigation elements if needed */}
      {/* The UserNavbar will provide a consistent navigation experience across user pages */}
      {/* This layout is designed to be reusable for different user-related routes */}
    </div>
  );
}

export default UserLayout;
