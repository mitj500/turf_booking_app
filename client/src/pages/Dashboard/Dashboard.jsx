import React from 'react'
import axios from 'axios';
import Cookies from 'js-cookie'; // Make sure to install js-cookie package
function Dashboard() {

    const [msg, setMsg] = React.useState("");
    React.useEffect(() => {
    // Simulate fetching user data or dashboard content
    axios.get("http://localhost:3000/user/dashboard",{  headers: { Authorization: `Bearer ${Cookies.get("token")}` } })
      .then((response) => {
        setMsg(response.data.message+response.status);
      })
      .catch((error) => {
        console.error("Error fetching dashboard data:", error);
        // setMsg("Failed to load dashboard data.");
        setMsg(error.response?.data?.message +error.response.status || "An error occurred while fetching dashboard data.");
      });
    }, []);
  return (
    <div>
        <h1>{msg}</h1>
        <h1>Welcome to the Dashboard</h1>
        <p>This is your dashboard where you can manage your account and settings.</p>
        <button onClick={() => alert('Feature coming soon!')}>Manage Account</button>
        <p>pls login if not login</p>
        <button onClick={() => alert('Feature coming soon!')}>Settings</button>
        <button onClick={() => alert('Feature coming soon!')}>Logout</button>
        <p>For more information, visit our <a href="/help">Help Center</a>.</p>
        <p>Need assistance? Contact our <a href="/support">Support Team</a>.</p>
        <p>Follow us on <a href="/social">Social Media</a> for updates.</p>
        <p>Check out our <a href="/blog">Blog</a> for the latest news and tips.</p>
        <p>Explore our <a href="/features">Features</a> to get the most out of your account.</p>
    </div>
  )
}

export default Dashboard