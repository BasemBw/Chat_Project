import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { observer, inject } from "mobx-react";

const Navbar = inject("user")(
  observer((props) => {
    const [anchorElUser, setAnchorElUser] = useState(null);

    const navigate = useNavigate();

    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    const handleLogOut = () => {
      navigate("/");
    };

    return (
      <div>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar>
              <Box
                sx={{
                  display: "inline",
                }}
              >
                <Tooltip title="Search User">
                  <IconButton sx={{ p: 0, marginRight: 2}} onClick={props.user.handleOpenSearchSide}>
                    <SearchIcon />
                  </IconButton>
                </Tooltip>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                }}
              >
                <Typography key={"notifications"} title="notifications">
                  <IconButton sx={{ p: 2, marginRight: 3 }}>
                    <NotificationsIcon />
                  </IconButton>
                </Typography>
                <Tooltip key={"settings"} title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={props.user.userInfo.image} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser} // make a dropdown menu open below the Icon
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
                  <MenuItem
                    key="Account info"
                    onClick={props.user.handleOpenAccountInfo}
                  >
                    Account Setting
                  </MenuItem>
                  <MenuItem key="Log Out" onClick={handleLogOut}>
                    Log Out
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    );
  })
);

export default Navbar;
