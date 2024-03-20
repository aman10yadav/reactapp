import React from "react";

function Header() {
    return (
        <React.Fragment>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Header;



// import * as React from "react";
 
// // importing material UI components
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
 
// export default function Header() {
//     return (
//         <AppBar position="static">
//             <Toolbar>
//                 {/*Inside the IconButton, we 
//                     can render various icons*/}
//                 <IconButton
//                     size="large"
//                     edge="start"
//                     color="inherit"
//                     aria-label="menu"
//                     sx={{ mr: 2 }}
//                 >
//                     {/*This is a simple Menu 
//                       Icon wrapped in Icon */}
//                     <MenuIcon />
//                 </IconButton>
//                 {/* The Typography component applies 
//                      default font weights and sizes */}
 
//                 <Typography
//                     variant="h6"
//                     component="div"
//                     sx={{ flexGrow: 1 }}
//                 >
//                     GeeksforGeeks Header
//                 </Typography>
//                 <Button color="inherit">Login</Button>
//             </Toolbar>
//         </AppBar>
//     );
// }