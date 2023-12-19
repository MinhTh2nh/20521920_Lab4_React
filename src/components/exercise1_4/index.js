import React from "react";
import "typeface-roboto";
import FormGroup from "@mui/material/FormGroup";
import MyTextInput from "./MyTextInput";
import MySelect from "./MySelect";

function Exercise1_4() {
  return (
    <div className="container">
      <h3 style={{ color: "blue" }}>Exercise 1_4</h3>
      <FormGroup style={{ width: 200, margin: 10 }}>
        <MyTextInput />
        <MySelect />
      </FormGroup>
    </div>
  );
}

export default Exercise1_4;