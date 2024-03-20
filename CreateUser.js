import { useState } from "react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ListUser() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        let value = event.target.value;
        const files = event.target.files;
        if (name == "file") {
            console.log("File is present !!");
            if(files !== null) {
                console.log("Files => " + files);
                value = files[0];
                console.log("Value => " + value);
            }
            
        }
        // if (files != null) {
        //     const file = event.target.files[0].name;
        //     const path = event.target.files[0];
        //     console.log("path ", path);
        //     console.log("Files => ", file);
        //     value = file;

        //     const blob = new Blob([event.target.files[0]], {type: 'image/png'});
        //     console.log("blob", blob);
        //     const url = URL.createObjectURL(blob);
        //     console.log("url ", url);
        //     const img = new Image();
        //     img.src = url;
        //     console.log("url ", url);
        //     console.log("Image ", img.src);
        //     value=blob;

        //     // console.log($_POST['name']);
            

        //     const reader = new FileReader();
        //     let abc = reader.readAsDataURL(blob);
        //     // console.log(abc.toDataURL());
        //     console.log("abcd ", abc);
        //     setInputs(values => ({...values, [name]: url}));

        //     name = "MyFile";
        //     setInputs(values => ({...values, [name]: blob}));

        //     var tmppath = URL.createObjectURL(event.target.files[0]);
        //     console.log(tmppath);
        //     // $("img").fadeIn("fast").attr('src',tmppath);

        //     // $upload_directory = '../upload/';
        //     // console.log("upload directory => ", upload_directory);
        //     // $image = File_get_contents($_Files[file]['tmp_name']);
        //     // console.log(image);

        //     // var readers = new FileReader();
        //     // console.log("blob ",readers.readAsDataURL(request.response));

        //     let upload_endpoint = 'http://localhost/uploads/';
        //     let fileurl = upload_endpoint + event.target.files[0];
        //     console.log(fileurl, " fileurl");
        //     console.log(URL.createObjectURL(event.target.files[0]));

        //     // $names = md5_file($_FILES["file"]['tmp_name']);
        //     // console.log($names);
        //     // move_uploaded_file($_FILES["file"]['tmp_name'], "C:/Users/psbadmin/Desktop/Learning\Uploads/{$name}.jpeg");//  // "public_html/mc/images/{$name}.jpeg"
        //     // $data = $_FILES['file'];
        //     // console.log($data);
        //     // if ($_FILES['avatar']) {
        //     //     $avatar_name = $_FILES['file']['name'];
        //     //     console.log(avatar_name, " avatar_name");
        //     // }

        //     // if ($_FILES['file']) {
        //     //     $avatar_name = $_FILES['file']['name'];
        //     //     console.log(avatar_name, " avatar_name");
        //     // }

        //     // if (name == "MyFile") {
        //     //     setInputs(values => ({...values, [name]: blob}));
        //     // }
        // } else {
        //     setInputs(values => ({...values, [name]: value}));
        // }

        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        const config = {
            headers: {
              'content-type': 'multipart/form-data',
            },
          };

        event.preventDefault();
        // console.log(inputs);
        // axios.post('http://localhost:8880/api/user/save', inputs).then(function(response){
        // axios.post('http://localhost/api/user/save', inputs).then(function(response){
        //   console.log(response.data);
        // });
        console.log(inputs);
        // axios.post('http://localhost/api/', inputs);
        axios.post('http://localhost/api/', inputs, config).then(function(response) {
          console.log(response.data);
          navigate('/');
        }).catch(function(error) {
            console.log(error);
          });
    }

    const createUserStyle = {
        backgroundColor: "#007c3d",
        height:"780px",
        marginTop: "70px",
        fontSize: "20px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        align: "centre"
    };

    const btnSubmit = {
        marginTop: "10px",
        textAlign: "center"
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

    const label = {
        width: "150%",
        fontSize: "25px",
        padding: "10px 20px"
    };

    const textField = {
        width: "150%",
        fontSize: "15px",
        padding: "10px 20px"
    };

    const submitButton =  {
        position: "absolute",
        backgroundColor: "#0a0a23",
        color: "white",
        fontSize: "30px",
        padding: "10px 10px",
        align: "center",
        border: "none",
        borderRadius: "10px"
    }

    const user = {
        backgroundColor: "#797979",
        padding: "5px 5px",
        position: "fixed",
        width:"100%"
    }

    return (
        <div style={myStyle}>
            <div style={user}>
                <marquee><h1>CREATE  USER  FORM</h1></marquee>
            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <form onSubmit={handleSubmit} method = "POST" enctype="multipart/form-data">
                <table cellSpacing="10" align="center">
                    <tbody>
                        <tr>
                            <th>
                                <label style={label}>Name: </label>
                            </th>
                            <td>
                                <input type="text" name="name" onChange={handleChange} style={textField} placeholder="Enter name here..." required/>
                            </td>
                        </tr>
                        <br></br><br></br>
                        <tr>
                            <th>
                                <label style={label}>Email: </label>
                            </th>
                            <td> 
                                <input type="text" name="email" onChange={handleChange} style={textField} placeholder="Enter Email id here..." required/>
                            </td>
                        </tr>
                        <br></br><br></br>
                        <tr>
                            <th>
                                <label style={label}>Age: </label>
                            </th>
                            <td>
                                <input type="text" name="age" onChange={handleChange} placeholder="Enter age here..." style={textField} />
                            </td>
                        </tr>
                        <br></br><br></br>
                        <tr>
                            <th>
                                <label style={label}>Select File : </label>
                            </th>
                            <td>
                                <input type="file" name="file" onChange={handleChange} />
                            </td>
                        </tr>
                        <br></br><br></br>
                        {/* <tr>
                            <th>
                                <label>Select MyFile : </label>
                            </th>
                            <td>
                                <input type="file" name="MyFile" onChange={handleChange} />
                            </td>
                        </tr> */}
                        <tr>
                            <td colSpan="2" align="center">
                               <b> <button style={submitButton}>Submit</button> </b>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}