import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink, useNavigate } from "react-router-dom";
import logo2 from "../logotransparent.png";
// import AdbIcon from "@mui/icons-material/Adb";

const NavBar = ({ user, setUser, handleLogout }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const settings = ["User Settings"];
  let navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    navigate("/myaccount");
  };

  return (
    <AppBar position="static" color="primary" className="navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense">
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img className="navlogo" src={logo2} alt="logo" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            ></IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            ></Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {user ? (
              <>
                <MenuItem>
                  <NavLink to="/logout" onClick={handleLogout}>
                    <Button
                      onClick={handleCloseNavMenu}
                      className="btn btn-navbar"
                      sx={{
                        my: 2,
                        color: "white",
                        display: "block",
                        fontFamily: "Roboto",
                        textDecoration: "none",
                      }}
                    >
                      Logout
                    </Button>
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/dashboard">
                    <Button
                      onClick={handleCloseNavMenu}
                      className="btn btn-navbar"
                      sx={{
                        my: 2,
                        color: "white",
                        display: "block",
                        fontFamily: "Roboto",
                      }}
                    >
                      My Budgets
                    </Button>
                  </NavLink>
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem>
                  <NavLink to="/signup">
                    <Button
                      onClick={handleCloseNavMenu}
                      className="btn btn-navbar"
                      sx={{
                        my: 2,
                        color: "white",
                        display: "block",
                        fontFamily: "Roboto",
                      }}
                    >
                      Sign Up
                    </Button>
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/login">
                    <Button
                      className="btn btn-navbar"
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: "white",
                        display: "block",
                        fontFamily: "Roboto",
                      }}
                    >
                      Login
                    </Button>
                  </NavLink>
                </MenuItem>
              </>
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, fontFamily: "Roboto" }}
              >
                <Avatar alt="Sam" />
                {/* <img src={user.profilepic} alt="user" /> */}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <h6>{setting}</h6>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
