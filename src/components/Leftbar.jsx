import React from "react";
import styled from "@emotion/styled";
import {
  Bookmark,
  Home,
  List,
  Person,
  PhotoCamera,
  PlayCircleOutline,
  Storefront,
  TabletMac,
} from "@mui/icons-material";
import { Typography } from "@mui/material";

const Wrapper = styled("div")(({ theme }) => ({
  height: "130vw",
  color: "white",
  paddingTop: theme.spacing(10),
  backgroundColor: theme.palette.primary.main,
  position: "sticky",
  top: 0,
  [theme.breakpoints.up("sm")]: {
    backgroundColor: "white",
    color: "#555",
    border: "1px solid #ECE7E7",
  },
}));

const ItemBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  paddingLeft: theme.spacing(2),
  marginBottom: theme.spacing(4),
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

const IconOutter = styled("div")(({ theme }) => ({
  marginRight: theme.spacing(1),
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
  },
}));

const TextContent = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Leftbar = () => {
  return (
    <Wrapper>
      <ItemBox>
        <IconOutter>
          <Home />
        </IconOutter>
        <TextContent>Homepage</TextContent>
      </ItemBox>
      <ItemBox>
        <IconOutter>
          <Person />
        </IconOutter>
        <TextContent>Friends</TextContent>
      </ItemBox>
      <ItemBox>
        <IconOutter>
          <List />
        </IconOutter>
        <TextContent>Lists</TextContent>
      </ItemBox>
      <ItemBox>
        <IconOutter>
          <PhotoCamera />
        </IconOutter>
        <TextContent>Camera</TextContent>
      </ItemBox>
      <ItemBox>
        <IconOutter>
          <PlayCircleOutline />
        </IconOutter>
        <TextContent>Videos</TextContent>
      </ItemBox>
      <ItemBox>
        <IconOutter>
          <TabletMac />
        </IconOutter>
        <TextContent>Apps</TextContent>
      </ItemBox>
      <ItemBox>
        <IconOutter>
          <Bookmark />
        </IconOutter>
        <TextContent>Collections</TextContent>
      </ItemBox>
      <ItemBox>
        <IconOutter>
          <Storefront />
        </IconOutter>
        <TextContent>Market Place</TextContent>
      </ItemBox>
    </Wrapper>
  );
};

export default Leftbar;
