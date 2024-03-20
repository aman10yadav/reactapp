import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListUser() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        // const getUser = () => {
        //     fetch("http://localhost/api/index.php")
        //     .then(res=>{return res.json()})
        //     .then(data=>{ setUsers(data)})
        //     .catch(error=> {console.log(error)});
        // }
        // getUser();
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost/api/users/').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });    
    }

    const deleteUser = (id) => {
        axios.delete('http://localhost/api/users/${id}/delete').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    const table = {
        textAlign:"center",
        width: "95%",
        backgroundColor: "#2d303e",
        color: "white"
    };

    const myStyle = {
        backgroundColor: "#bdda8b",//"#007c3d", #885df1
        height: "100vh",
        fontSize: "20px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "fixed",
        width:"100%"
    };

    const tds = {
        color: "white"
    };


    return (
        <div style={myStyle}>
            <br></br>
            <h1 align="center">List Users</h1>
                <table align="center" border="5px" padding="10px" style={table}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Filename</th>
                            <th>File Path </th> {/* To be disabled  */}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody align="center">
                        { 
                            users.map( (user, index) => (
                            // var path = {user.filename};
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>{user.file}</td>
                                {/* <td><img src= {`http://localhost/api/File/${user.filename}`} height={50} width={50}/></td> To be disabled  */}
                                {/* <td><img src= {require(`http://localhost/api/File/${user.filename}`)} height={50} width={50}/></td> To be disabled  ./components/ */}
                                {/* <td><img src= {require(`./components/uploads/image.jpg`)} height={50} width={50}/></td> */}



                                {/* <td><a href={user.filename}>{user.filename}</a></td> */}
                                {/* <td><img src=/api/File/{user.filename} width='70%'/></td> */}
                                {/* <td><img src={user.filename} style={{width: 300, height: 500}} /></td> */}
                                {/* <td><img src={user.file} alt={user.file} style={{width: 300, height: 500}} /></td> */}
                                {/* <td><a href={user.file}>Click Here To See File</a></td> */}
                                {/* <td><Link to={user.file}>Click Here To See File</Link></td> */}
                                <td>
                                    <Link to={'user/${user.id}/edit'} style={tds} disabled>Edit</Link>
                                    {/* <button onClick={() => deleteUser(user.id)}>Delete</button> */}
                                </td>
                            </tr>
                            )
                        )}
                    </tbody>
                </table>
                <div>
                    {/* <img src="C:/xampp/htdocs/api/File/1710842166images.webp"></img> */}
                    {/* <img src={require("./uploads/Screenshot (1).png").default}></img> */}
                </div>

            {/* <form>
                <label>Name: </label>
                <input type="text" name="name" /> <br></br>
                <label>Age: </label>
                <input type="number" name="age" /> <br></br>
                <label>Email: </label>
                <input type="email" name="email" /> <br></br>
                <button>Save</button>
            </form> */}

        </div>
    );
  }