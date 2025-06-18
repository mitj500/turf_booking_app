import { useState } from "react";
import axios from "axios"
import Cookies from "js-cookie" 


function CreateTurf() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);

  const handleTurfCreate = () => {
    const cookie = Cookies.get("token"); // Fetch JWT Token from cookie.
    axios
      .post(
        "http://localhost:3000/turf/create", // URL of backend endpoint
        { name, description, location, price }, // Send value of new email input to backend in variable called "newEmail"
        { headers: { Authorization: `Bearer ${cookie}` } }
      )
      .then((response) => {
        alert("Turf Created successfully");
        setName("")
        setDescription("")
        setLocation("")
        setPrice(0)
      })
      .catch((error) => {
        console.error("Error creating turf" + error);
        alert(
          error.response?.data?.message ||
            "An error occurred while creating turf."
        );
      });
  };

  return (
    <div>
      <input
        className="justify-center items-center bg-gray-500 p-3"
        placeholder="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        className="justify-center items-center bg-gray-500 p-3 "
        placeholder="description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />

      <input
        className="justify-center items-center bg-gray-500 p-3"
        placeholder="location"
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
        }}
      />
      <input
        className="justify-center items-center bg-gray-500 p-3 m-3"
        placeholder="price"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />

      <button onClick={handleTurfCreate}>Create Turf</button>
    </div>
  );
}

export default CreateTurf;
