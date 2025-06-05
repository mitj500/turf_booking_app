import React, { useEffect } from "react";
import Cookies from "js-cookie"; // Make sure to install js-cookie package
import axios from "axios";
import Loading from "../../../components/Loading"; // Assuming you have a Loading component for loading state
function Profile() {
  const [user, setUser] = React.useState(null);
  const [handleChangePass, setHandleChangePass] = React.useState(false);
  const[newPassword, setNewPassword] = React.useState("");
  const[confirmNewPassword, setConfirmNewPassword] = React.useState("");
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
    if(newPassword!== confirmNewPassword) {
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
  }

  return (
    <div>
      {user ? (
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Profile</h1>
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

            {handleChangePass && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Change Password</h3>
                <input value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  type="password"
                  placeholder="New Password"
                  className="p-2 border rounded w-full mb-2"
                />
                <input value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  type="password"
                  placeholder="Confirm New Password"
                  className="p-2 border rounded w-full mb-2"
                />
                <button onClick={setNewpass} className="bg-blue-500 text-white px-4 py-2 rounded">
                  Change Password
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Profile;
