import React from "react";
import { useState } from "react";
import axios from 'axios';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import ListUser from "./components/ListUser";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import Header from "./components/Header";
import Home  from "./components/Home";

const myStyle = {
    backgroundColor: "#885df1",//"#007c3d", #885df1 #bdda8b
    height: "100%",
    fontSize: "20px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};

const header = {
    overflow: "hidden",
    backgroundColor: "#f1f1f1",
    // padding: "20px 10px",
    padding: "20px 0px",
    // position: "fixed",
    // width:"100%",
    textAlign:"center",
    backgroundColor: "#7431fa",
    color:"white",
    topMargin:"-50px"
};

const header1 = {
    overflow: "hidden",
    backgroundColor: "#c2ccc5",
    textAlign:"center",
    // position: "fixed",
    // width:"100%",
    padding: "20px 10px",
};

const headerRight = {
    float: "right",
    fontWeight: "bold",
    padding: "12px"
};

const App = () =>{
    return (
        // <div style={{backgroundColor: "#007c3d"}}>
        <div style={myStyle}>
            {/* <div>
                { <Home />}
                <Header />
            </div> */}
            {/* <div style={myStyle}> */}
                <h4 style={header}>Welcome To React App</h4>
                <BrowserRouter>
                    <nav>
                        <div style={header1}>
                            <a href="#default" class="logo">Welcome to User Portal</a>
                            <div>
                                {/* <a class="active" href="#home">Home</a>
                                <a href="#contact">Contact</a>
                                <a href="#about">About</a> */}
                                <Link to="/" style={headerRight}>List Users</Link>
                                <Link to="user/create" style={headerRight}>Create User</Link>
                            </div>
                        </div>
                        {/* <ul>
                            <li>Welcome to User Portal</li>
                            <li>
                                <Link to="/">List Users</Link>
                            </li>
                            <li>
                                <Link to="user/create">Create User</Link>
                            </li>
                        </ul> */}
                    </nav>
                    <Routes>
                        <Route index element={<ListUser />} />
                        <Route path="user/create" element={<CreateUser />} />
                        <Route path="user/:id/edit" element={<EditUser />} />
                    </Routes>
                </BrowserRouter>
            {/* </div> */}
        </div>
    )
    // const [name, setName] = useState('');
    // const [age, setAge] = useState('');
    // const [email, setEmail] = useState('');

    // const handleSubmit = () => {
    //     if(name.length === 0) {
    //         alert("Name has left blank !!");
    //     } else if (age.length === 0) {
    //         alert("Age has left blank !!");
    //     } else if (email.length === 0) {
    //         alert("Email has left blank !!");
    //     } else {
    //         // alert("All set!");
    //         const url = "http://localhost/enquiry.php";

    //         let fdata = new FormData();
    //         fdata.append('name', name);
    //         fdata.append('age', age);
    //         fdata.append('email', email);

    //         axios.post(url, fdata)
    //         .then(response => alert(response.data))
    //         .catch(error => alert(error));
    //     }
    // }

    // return (
    //     <>
    //         <div class="container">
    //         <h1>
    //             Hello world! We are using React !!
    //         </h1>
    //             <label htmlFor="name">Name:</label>
    //             <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} /> <br></br><br></br><br></br>
    //             <label htmlFor="age">Age:</label>
    //             <input type="number" name="age" id="age" value={age} onChange={(e) => setAge(e.target.value)} /> <br></br><br></br><br></br>
    //             <label htmlFor="email">Email:</label>
    //             <input type="email" name="email" id="email"  value={email} onChange={(e) => setEmail(e.target.value)} /> <br></br><br></br><br></br>
    //             <input type="button" name="submit" id="submit" value="SUBMIT" onClick={handleSubmit} />
    //         </div>
    //     </>
    // )
}

export default App