// Footer.jsx

import React from "react";
import { Link } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
    return (
        <BottomNavigation showLabels>
            <BottomNavigationAction
                label="Home"
                icon={<HomeIcon />}
                component={Link}
                to="/"
            />
            <BottomNavigationAction
                label="About"
                icon={<InfoIcon />}
                component={Link}
                to="/about"
            />
            <BottomNavigationAction
                label="GitHub"
                icon={<GitHubIcon />}
                href=""
            />
        </BottomNavigation>
    );
}

