import React, {  useState } from "react";
import "./homePage.css";
import { observer, inject } from "mobx-react";
/* import LoadingButton from '@mui/lab/LoadingButton'; */
import Register from "../../components/homePageComponents/register";
import Login from "../../components/homePageComponents/login";

const HomePage = inject("user")(
  observer((props) => {

    const [isLogin, setIsLogin] = useState(true);

    const handelRegister = () => {
      setIsLogin(!isLogin);
    };

    return (
      <div className="homeContainer fadeInDown">
        {isLogin ? <Login  /> : <Register handleRegister = {handelRegister} />}
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
