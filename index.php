<?php

    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header('Content-Type: application/json; charset=utf-8');
    header("Access-Control-Allow-Methods: PUT, GET, POST");

    include 'DbConnect.php';
    $objDb = new DbConnect;
    $conn = $objDb->connect();

    $db_conn = mysqli_connect("localhost", "root", "", "react_crud");
    if($db_conn === false) {
        echo "dbconnectionfailed";
        die("ERROR: Could Not Connect".mysqli_connect_error());
    }

    $method = $_SERVER['REQUEST_METHOD'];
    switch($method) {
        case "GET" :
            // To be uncomment
            $sql = "SELECT * FROM users";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            print "user dollar is below or right side ";
            print $users;
            echo json_encode($users);
            break;

            // $path = explode('/', $_SERVER['REQUEST_URI']);

            // if(isset($path[4]) && is_numeric($path[4])) {
            //     echo "Get Api single row"; die;
            // } else {
            //     $destination = $_SERVER['DOCUMENT_ROOT'].'/api/File'."/"
            //     $alluser = mysqli_query($db_conn, "SELECT * FROM users");
            //     if(mysqli_num_rows() > 0) {
            //         while($row = mysqli_fetch_array($alluser)) {
            //             $json_array["userdata"][]= array("name"-> $row['name'],
            //             "email"-> $row['email'],
            //             "age"-> $row['age'],
            //             "file"-> $row['file'],
            //             "filename"-> $row['filename']
            //         );
            //     }
            //     echo json_encode($json_array['productdata']);
            //     return
            //     } else {
            //         echo json_ecode(["result"->"please check the data"]);
            //         return;
            //     }
            // }


        case "POST":
            $user = json_decode( file_get_contents("php://input") );
            // $names = $_POST['name'];
            // echo "Checking for file !!";
            // echo "checking isset($_FILES['file']);";
            // $pname = $_POST['name']
            // echo $pname;
            print isset($_FILES['file']);
            if (isset($_FILES['file'])) {
                // $file = $_FILES['file'];
                // $targetDir = "Uploads/";
                // $targetFile =  $targetDir . basename($file['name']);
                // move_uploaded_file($file['tmp_name'], $targetFile);
                // $imagePath = $targetFile;
                $pname = $_POST['name'];
                $pemail = $_POST['email'];
                $page = $_POST['age'];
                $pfile = time().$_FILES['file']['name'];
                $pfiletmp = $_FILES['file']['tmp_name'];
                $destination = $_SERVER['DOCUMENT_ROOT'].'/api/File'."/".$pfile;
                // $finalfilepath = "http://" + $destination;

                // echo "final destination path";
                // print $finalfilepath;

                $result = mysqli_query($db_conn, "INSERT INTO users(name, email, age, file, filename) VALUES('$pname', '$pemail', '$page', '$destination', '$pfile')");
                // echo "result $$ => " + $result;
                if($result) {
                    move_uploaded_file($pfiletmp, $destination);
                    echo json_encode("success, User Inserted Succesfully !!");
                    return;
                } else {
                    echo json_encode("success Product Not Inserted !!");
                }
            } else {
                echo "file not found !!";
                // // echo :name; //, :email, :age, :file;
                // $sql = "INSERT INTO users(name, email, age, file) VALUES(:name, :email, :age, :file)";
                // $stmt = $conn->prepare($sql);
                // echo "$stmt";
                // $stmt->bindParam(':name', $user->name);
                // $stmt->bindParam(':email', $user->email);
                // $stmt->bindParam(':age', $user->age);
                // $stmt->bindParam(':file', $user->file);
                // if($stmt->execute()) {
                //     $response = ['status' => 1, 'message'=> 'Record created successsfully'];
                // } else {
                //     $response = ['status' => 0, 'message' => 'Failed to create records !!'];
                // }
                // echo json_encode($response);
                $pname = $_POST['name'];
                $pemail = $_POST['email'];
                $page = $_POST['age'];
                $pfile = $_POST['name'];

                print $pname;
                print $pemail;
                print $page;
                // $pfile = $_FILES['file']['name'];
                // $pfiletmp = $_FILES['file']['tmp_name'];
                // $destination = $_SERVER['DOCUMENT_ROOT'].'/api/File'."/".$pfile;

                $result = mysqli_query($db_conn, "INSERT INTO users(name, email, age, file) 
                VALUES('$pname', '$pemail', '$page', '$pfile')");
                print "Result \n =>";
                print $result;
                // echo "result $$ => " + $result;
                if($result) {
                    move_uploaded_file($pfiletmp, $destination);
                    echo json_encode("success, User Inserted Succesfully !!");
                    return;
                } else {
                    echo json_encode("success User Not Inserted !!");
                }
            }

            
            break;
    }
?>