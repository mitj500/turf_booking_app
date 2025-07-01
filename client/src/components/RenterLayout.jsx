import React from "react";
import RenterNavbar from "./RenterNavbar";
import { Outlet } from "react-router-dom";
import Cookies from "js-cookie"; // Make sure to install js-cookie package
import { useEffect } from "react";
import Loading from "./Loading"; // Assuming you have a Loading component for loading state
import Paralax from "../pages/ParallaxPage/Paralax";


function RenterLayout() {
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    const cookies = Cookies.get("token");
    if (!cookies) {
      window.location.href = "/Signin"; // Redirect to sign-in page if token is not present
      alert("Please login to access this page");
    } else {
      setTimeout(() => {
        setLoading(false); // Set loading to false after checking for the token
      }, 1000); // Simulate a delay for loading state
    }
  }, []);

  if (loading) {
    return <Loading />; // Show a loading state while checking for the token
  }

  return (
    <div className="bg-gradient-to-br from-red-400 to-blue-500 min-h-screen">

      <RenterNavbar />
      <Paralax/>
      <Outlet />
      
    </div>
  );
}

export default RenterLayout;
