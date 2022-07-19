import React, { useEffect, useState } from "react";
import "./homePage.css";
import { observer, inject } from "mobx-react";
/* import LoadingButton from '@mui/lab/LoadingButton'; */
import { Stack, Button, Input } from "@mui/material";

const HomePage = inject("user")(
  observer((props) => {

    const [isLogin, setIsLogin] = useState(true);

    console.log(props.user)

    useEffect(() => {});

    const handelRegister = () => {
      setIsLogin(!isLogin);
    };

    return (
      <div className="homeContainer fadeInDown">
        {isLogin ? (
          <div className="loginPannel">
            <div className="loginForm">
              <div className="namePannel">
                <h3>Name :</h3>
                <Input required={true} size="large" fullWidth={true} />
              </div>
              <div className="passwordPannel">
                <h3>Password :</h3>
                <Input required={true} fullWidth={true} size="large" />
              </div>
              <div className="buttonsPannel">
                <Stack spacing={5} direction="row">
                  <Button fullWidth={true} size="large" variant="contained">
                    Login
                  </Button>
                  <Button
                    onClick={handelRegister}
                    fullWidth={true}
                    size="large"
                    variant="contained"
                  >
                    Register
                  </Button>
                </Stack>
              </div>
            </div>
          </div>
        ) : (
          <div className="registerPannel">
            <div className="registerName">
              <h3>Name :</h3>
              <Input name="userName" onChange={props.user.handelRegisterInput} required={true} size="large" fullWidth={true} />
            </div>
            <div className="registerEmail">
              <h3>Email :</h3>
              <Input name="userEmail" onChange={props.user.handelRegisterInput} required={true} size="large" fullWidth={true} />
            </div>
            <div className="registerPassword">
              <h3>Password :</h3>
              <Input name="userPassword" onChange={props.user.handelRegisterInput} required={true} size="large" fullWidth={true} />
            </div>
            <div className="SignUpButton">
              <Button size="large" onClick={handelRegister} variant="contained">
                Sign Up
              </Button>
            </div>
          </div>
        )}
        {/* <div className="fotter">
          <h4 className="copyright">
            © Copyright BasemBw Repository , 2022. All Rights Reserved.
          </h4>
        </div> */}
      </div>
    );
  })
);

export default HomePage;
