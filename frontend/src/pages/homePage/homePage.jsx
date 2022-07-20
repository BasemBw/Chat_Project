import React, { useState } from "react";
import "./homePage.css";
import { observer, inject } from "mobx-react";
import Register from "../../components/homePageComponents/register";
import Login from "../../components/homePageComponents/login";
import { Box, Tab} from "@mui/material";
import {TabContext , TabList , TabPanel} from '@mui/lab';

const HomePage = inject("user")(
  observer((props) => {

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <div className="homeContainer fadeInDown">
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 5, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Login" value="1" />
                <Tab label="Register" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Login />
            </TabPanel>
            <TabPanel value="2">
                <Register  />
            </TabPanel>
          </TabContext>
       </Box>
      </div>
    );
  })
);

export default HomePage;
