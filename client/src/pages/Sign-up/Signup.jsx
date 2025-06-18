import React from 'react'
import axios from 'axios';
function signup() {
    const [firstname, Setfirstname] = React.useState("");
    const [lastname, Setlastname] = React.useState("");
    const [email, Setemail] = React.useState("");
    const [password, Setpassword] = React.useState("");
    const[showPassword, SetshowPassword] = React.useState(false);
    const [role, Setrole] = React.useState("user");


    function handleSubmit(e) {
       axios.post("http://localhost:3000/user/create",{
        email: email,
        firstname: firstname,
        lastname: lastname,
        password: password
        ,role: role
       } ).then((response) => {
        console.log(response.data);
        alert("User registered successfully");
      }).catch((error) => {
        console.error("Error registering user:", error);
        alert("Error registering user");
        });
      e.preventDefault();

        // Here you would typically send the user data to your backend API for registration
    }


  return (
    <div className='bg-gradient-to-br from-blue-200 to-purple-500 '>
    <div className='h-screen flex flex-col items-center justify-center gap-3'>
        
        <input className='p-2 border bg-gray-300 rounded-lg text-black w-[200px]' type="text" placeholder='email' value={email} onChange={(e)=>Setemail(e.target.value)}/>
        <input  className='p-2 border bg-gray-300 rounded-lg text-black w-[200px]' type="text" placeholder='firstname' value={firstname} onChange={(e)=>Setfirstname(e.target.value)}/>
        <input  className='p-2 border bg-gray-300 rounded-lg text-black w-[200px]' type="text" placeholder='lastname' value={lastname} onChange={(e)=>Setlastname(e.target.value)}/>
        <select  className='p-2 border bg-gray-300 rounded-lg text-black w-[200px]' value={role} onChange={(e)=>Setrole(e.target.value)}> 
           <option  value="user">User</option>
           <option value="renter">renter</option>
           </select>
           
        
        <input  className='p-2 border bg-gray-300 rounded-lg text-black w-[200px]' type={showPassword?"text":"password"} placeholder='password' value={password} onChange={(e)=>Setpassword(e.target.value)}/>
        <button className='p-2 rounded-lg bg-gradient-to-br from-red-500  to-amber-500 ' onClick={()=>SetshowPassword(!showPassword)}>{showPassword?"Hide Password":"Show Password"}</button> 
        <bu1tton onClick={handleSubmit}>Sign Up</bu1tton>
        <p>Already have an account? <a href="/signin">Sign In</a></p>
        <p>By signing up, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.</p>
        
    </div>
    </div>
  )

//chod maeko sunaai de raha hain 

}

export default signup

