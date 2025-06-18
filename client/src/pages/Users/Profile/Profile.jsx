import React, { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Loading from "../../../components/Loading"; // Assuming you have a Loading component for loading state
import { FaUser, FaKey, FaPalette, FaBell, FaEnvelope, FaLock, FaGithub } from "react-icons/fa";
function Profile() {
  const [user, setUser] = React.useState(null);
  const [handleChangePass, setHandleChangePass] = React.useState(false);
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmNewPassword, setConfirmNewPassword] = React.useState("");
  const [changemail, setchangemail] = React.useState(false);  // stores the email to change on clicking does this work
  const [newMail, setNewMail] = React.useState("");//changing the email input checking  in the new mail

  useEffect(() => {
    const cookie = Cookies.get("token");
    axios
      .get("http://localhost:3000/user/profile", {
        headers: { Authorization: `Bearer ${cookie}` },
      })
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
        alert(
          error.response?.data?.message ||
            "An error occurred while fetching profile data."
        );
      });
  }, []);

  const setNewpass = () => {
    if (newPassword !== confirmNewPassword) {
      alert("Passwords do not match");
      return;
    }
    const cookie = Cookies.get("token");
    axios
      .post(
        "http://localhost:3000/user/changepassword",
        { newPassword },
        { headers: { Authorization: `Bearer ${cookie}` } }
      )
      .then((response) => {
        alert("Password changed successfully");
        setHandleChangePass(false);
        setNewPassword("");
        setConfirmNewPassword("");
      })
      .catch((error) => {
        console.error("Error changing password:", error);
        alert(
          error.response?.data?.message ||
            "An error occurred while changing the password."
        );
      });
  };
  
const NavItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center px-3 py-2 rounded text-sm cursor-pointer ${
      active ? "bg-gray-700 text-white" : "hover:bg-gray-700 text-gray-400"
    }`}
  >
    <span className="mr-3">{icon}</span>
    {label}
  </div>
);

const SidebarItem = ({ icon, label }) => (
  <div className="flex items-center text-gray-400 hover:text-white cursor-pointer">
    <span className="mr-2">{icon}</span>
    {label}
  </div>
);  

  const handlechangemail = () => {
   
    const cookie = Cookies.get("token"); // Fetch JWT Token from cookie.
    axios
      .post(
        "http://localhost:3000/user/changemail", // URL of backend endpoint
        { newEmail: newMail },// Send value of new email input to backend in variable called "newEmail"
        { headers: { Authorization: `Bearer ${cookie}` } }
      )
      .then((response) => {
        alert("mail changed successfully");
        setHandleChangePass(false);
        setNewmail("");
        
      })
      .catch((error) => {
        console.error("Error changing password:", error);
        alert(
          error.response?.data?.message ||
            "An error occurred while changing the password."
        );
      });
  };

  return (

    
    <div>
      {/* Logo at the top */}
      <div className="flex justify-center mb-6">
        {/* <img src={logo} alt="Logo" className="h-16" /> */}
      </div>
      {user ? (
        <div className="p-30">
          <h1 className=" flex text-2xl font-bold mb-4 justify-center bg-amber-100 rounded-full border-6">
            Profile
          </h1>
          <div class="grid grid-cols-2 gap-4 mb-6 p-2">
            <div className="h-100 w-50 flex    bg-sky-200 rounded justify-center text-black text-4xl items-center border-6"> 
            
            </div>

            <div className="h-100 w-100 flex bg-sky-200 rounded-4xl justify-center text-black text-4xl items-center border-6">09</div>
          </div>
          

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">User Information</h2>
            <p>
              <strong>First Name:</strong> {user.firstname}
            </p>
            <p>
              <strong>Last Name:</strong> {user.lastname}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <button
              onClick={() => {
                setHandleChangePass(true);
              }}
            >
              change password
            </button>
            <button
              onClick={() => {
                setchangemail(true);
              }}
            >
              change mail
            </button>
            {changemail && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Change email</h3>
                <input
                  value={newMail}
                  onChange={(e) => setNewMail(e.target.value)}
                  type="email"
                  placeholder="New Email"
                  className="p-2 border rounded w-full mb-2"
                />
                <button
                  onClick={handlechangemail}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Change email
                </button>
              </div>
            )

            }


            {handleChangePass && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Change Password</h3>
                <input
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  type="password"
                  placeholder="New Password"
                  className="p-2 border rounded w-full mb-2"
                />
                <input
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  type="password"
                  placeholder="Confirm New Password"
                  className="p-2 border rounded w-full mb-2"
                />
                <button
                  onClick={setNewpass}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Change Password
                </button>
              </div>
            )}
          </div>

        </div>

      ) : (
        <Loading />
      )}
       <div className="min-h-screen bg-gray-900 text-white flex">
    {/* Sidebar */}
    <aside className="w-64 bg-gray-800 p-6 border-r border-gray-700">
      <div className="flex items-center space-x-4 mb-8">
        <img
          src="/logo.png" // replace with your image path
          alt="Avatar"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h2 className="text-lg font-bold">Mit Jain</h2>
          <p className="text-gray-400 text-sm">@mitj500</p>
        </div>
      </div>

      <nav className="space-y-2">
        <NavItem icon={<FaUser />} label="Public profile" />
        <NavItem icon={<FaKey />} label="Account" active />
        <NavItem icon={<FaPalette />} label="Appearance" />
        <NavItem icon={<FaBell />} label="Notifications" />
      </nav>

      <div className="mt-8 border-t border-gray-700 pt-4 space-y-2 text-sm text-gray-400">
        <SidebarItem icon={<FaEnvelope />} label="Emails" />
        <SidebarItem icon={<FaLock />} label="Password and authentication" />
        <SidebarItem icon={<FaGithub />} label="SSH and GPG keys" />
      </div>
    </aside>

    {/* Main Content */}
    <main className="flex-1 p-10 space-y-10">
      {/* Change Username */}
      <section>
        <h3 className="text-2xl font-semibold mb-2">Change username</h3>
        <p className="text-gray-400 text-sm mb-4">
          Changing your username can have{" "}
          <a href="#" className="text-blue-400 underline">
            unintended side effects
          </a>
          .
        </p>
        <button className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">Change username</button>
        <p className="text-sm text-gray-500 mt-2">
          Looking to manage account security settings? You can find them in the{" "}
          <a href="#" className="text-blue-400 underline">
            Password and authentication
          </a>{" "}
          page.
        </p>
      </section>

      {/* Link Patreon */}
      <section>
        <h3 className="text-2xl font-semibold mb-2">Link Patreon account</h3>
        <p className="text-gray-400 text-sm mb-4">
          Connect a Patreon account for <strong>@mitj500</strong> to sponsor maintainers with. Get
          recognition on GitHub for sponsorships made on Patreon when the sponsored person has linked
          Patreon and GitHub, too, and has a public GitHub Sponsors profile.
        </p>
        <button className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">
          Connect with Patreon
        </button>
      </section>

      {/* Export Data */}
      <section>
        <h3 className="text-2xl font-semibold mb-2">Export account data</h3>
        <p className="text-gray-400 text-sm">
          Export all repositories and profile metadata for <strong>@mitj500</strong>. Exports will be
          available for 7 days.
        </p>
      </section>
    </main>
  </div>
    </div>
    
  );
}

export default Profile;
