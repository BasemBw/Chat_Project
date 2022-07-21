/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./chatPage.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/chat_components/navbar/navbar";
import { observer, inject } from "mobx-react";
import ProfileModal from "../../components/chat_components/profile_modal/profile_modal";
import {
  Drawer,
  Box,
  TextField,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const ChatPage = inject("user")(
  observer((props) => {
    const [snackbar, setSnackBar] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
      let userInfo = JSON.parse(localStorage.getItem("userData"));

      if (!userInfo) {
        goToHomePage();
      }

      props.user.updateUserInfo(userInfo);
    }, []);

    const goToHomePage = () => navigate("/");

    const handleCloseSnackBar = () => setSnackBar(false);

    return (
      <div className="chatPageContainer">
        <Navbar />
        <ProfileModal />

        <Drawer
          open={props.user.searchSide}
          onClose={props.user.handleCloseSearchSide}
          className="Drawer"
        >
          <Box className="Drawer" role="presentation">
            <h2>Search User</h2>
            <hr />
            <Box
              sx={{
                display: "flex",
                pd: 2,
                fontWeight: "bold",
                mx: 0.5,
                fontSize: 14,
              }}
            >
              <TextField
                id="outlined-basic"
                label="Search User By Name or Email"
                variant="outlined"
                sx={{
                  mx: 2,
                }}
              />
              <IconButton aria-label="delete" fullWidth={true} size="large" onClick={props.user.searchUsers}>
                <SearchIcon fontSize="inherit" />
              </IconButton>
            </Box>
          </Box>
        </Drawer>

        <Snackbar
          open={snackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackBar}
          anchorOrigin= {{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert
            onClose={handleCloseSnackBar}
            severity="warning"
            sx={{ width: "100%" }}
          >
            Please Fill Value To Search 
          </Alert>
        </Snackbar>
      </div>
    );
  })
);

export default ChatPage;
