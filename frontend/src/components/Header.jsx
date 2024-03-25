// The header of a IELTS website. Has links to each categories of test (Reading, Writing, Listening, Speaking in a drop down) as well as a full test link.
// using material
// Path: frontend/src/components/Header.jsx

// full width

import React from "react";
import { Link } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuItem,
} from "@mui/material";

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <div style={{ flexGrow: 1, textAlign: "left" }}>
                    <Button color="inherit">
                        <Link to="/" style={{ color: "white" }}>
                            IELTS Preparation
                        </Link>
                    </Button>
                </div>
                <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    color="inherit"
                >
                    Tests
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <Link to="/reading">Reading</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/writing">Writing</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/listening">Listening</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/speaking">Speaking</Link>
                    </MenuItem>
                </Menu>
                <Button color="inherit">
                    <Link to="/full-test" style={{ color: "white" }}>
                        Full Test
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>
    );
}
