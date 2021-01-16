import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import "./TextInput.scss";
const useStyle = makeStyles((theme) => ({
  textField: {
    width: "50ch",
  },
}));

function TextInput(props) {
  const classes = useStyle();
  return (
    <div>
      <TextField
        className={classes.textField}
        color="primary"
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default TextInput;
