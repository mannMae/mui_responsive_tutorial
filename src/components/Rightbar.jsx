import { styled } from "@mui/system";
import React from "react";

const Rightbar = () => {
  const Wrapper = styled("div")(({ theme }) => ({
    paddingTop: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  return <Wrapper>RIGHT BAR</Wrapper>;
};

export default Rightbar;
