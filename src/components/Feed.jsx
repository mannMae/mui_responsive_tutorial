import { styled } from "@mui/material";
import React from "react";
import Post from "./Post";

const Feed = () => {
  const Wrapper = styled("div")(({ theme }) => ({
    paddingTop: theme.spacing(10),
  }));

  return (
    <Wrapper>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Wrapper>
  );
};

export default Feed;
