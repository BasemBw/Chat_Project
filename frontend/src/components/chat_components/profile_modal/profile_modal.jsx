import React, { Fragment } from "react";
import { Modal, Box } from "@mui/material";
import "./profile_modal.css";
import { observer, inject } from "mobx-react";

const profile_modal = inject("user")(
  observer((props) => {
    return (
      <Fragment>
        <Modal
          keepMounted
          open={props.user.isOpenAccountInfo}
          onClose={props.user.handleCloseAccountInfo}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box className="ModalAccountInfo" textAlign={"center"}>
            <p className="userName">{props.user.userInfo.name}</p>
            <img
              className="userImg"
              alt="main user"
              src={props.user.userInfo.image}
              width="80%"
              height="50%"
            />
            <p>Email :</p>
            <p className="userEmail">{props.user.userInfo.email}</p>
          </Box>
        </Modal>
      </Fragment>
    );
  })
);

export default profile_modal;
