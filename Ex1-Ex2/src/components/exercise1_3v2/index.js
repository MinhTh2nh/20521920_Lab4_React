import "typeface-roboto";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import First from "./Pages/First";
import Second from "./Pages/Second";
import Third from "./Pages/Third";

export default function Exercise1_3v2({ links }) {
  const [open, setOpen] = useState(false);

  function toggleDrawer({ type, key }) {
    if (type === "keydown" && (key === "Tab" || key === "Shift")) {
      return;
    }
    setOpen(!open);
  }

  return (
    <Router>
      <Button onClick={toggleDrawer}>Open Nav</Button>
      <section>
        <Routes>
          <Route path="/first" component={<First />} />
          <Route path="/second" component={<Second />} />
          <Route path="/third" component={<Third />} />
        </Routes>
      </section>
      <Drawer onClose={toggleDrawer} open={open}>
        <div
          style={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            {links.map((link) => (
              <ListItem key={link.url} component={Link} to={link.url}>
                <Routes>
                  <Route
                    exact
                    path={link.url}
                    element={
                      <ListItemText
                        primary={link.name}
                        primaryTypographyProps={{ color: "primary" }}
                      />
                    }
                  />
                  <Route
                    path="/"
                    element={
                      <ListItemText primary={link.name} />
                    }
                  />
                </Routes>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </Router>
  );
}

Exercise1_3v2.defaultProps = {
  links: [
    {
      name: "First Page",
      url: "/first",
    },
    {
      name: "Second Page",
      url: "/second",
    },
    {
      name: "Third Page",
      url: "/third",
    },
  ],
};
