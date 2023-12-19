import "typeface-roboto";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes , Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

const tabContentStyle = {
    padding : 16,
}

function TabContainer ({value}){
    return (
        <AppBar position="static">
            <Tabs value={value}>
                <Tab label = "Item One" component = {Link} to = "/"/>
                <Tab label = "Item Two" component = {Link} to = "/page2"/>
                <Tab label = "Item Three" component = {Link} to = "/page3"/>
            </Tabs>
        </AppBar>
    )
}

export default function Exercise1_3_1() {
  return (
    <Router>
        <Routes>
         <Route
                    exact
                    path = "/"
                    element={
                     <>
                     <TabContainer value = {0} />
                     <Typography component = "div" style={tabContentStyle}>
                        Item One
                     </Typography>
                     </>
                    }
        />
               <Route
                    exact
                    path = "/page2"
                    element={
                     <>
                     <TabContainer value = {1} />
                     <Typography component = "div" style={tabContentStyle}>
                        Item Two
                     </Typography>
                     </>
                    }
        />
               <Route
                    exact
                    path = "/page3"
                    element={
                     <>
                     <TabContainer value = {0} />
                     <Typography component = "div" style={tabContentStyle}>
                        Item Three
                     </Typography>
                     </>
                    }
        />
        </Routes>
    </Router>
  );
}
