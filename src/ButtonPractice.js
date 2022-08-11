import React from "react";
import { Button } from "@mui/material";
import { Person } from "@mui/icons-material";
import { theme } from "./theme";

function ButtonPractice() {
  // const classes = useStyles();
  return (
    <>
      <Button
        // className={classes.button}
        variant="contained"
        size="large"
        startIcon={<Person />}
        color="primary"
        style={{ backgroundColor: "ivory", color: "black" }}
      >
        Material UI
      </Button>
      <Button
        // className={classes.button}
        variant="contained"
        size="large"
        startIcon={<Person />}
        color="secondary"
        sx={theme.myButton}
      >
        Material UI
      </Button>
    </>
  );
}

export default ButtonPractice;
