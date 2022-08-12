import {
  Avatar,
  AvatarGroup,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const Wrapper = styled("div")(({ theme }) => ({
  padding: `${theme.spacing(10)} ${theme.spacing(1)} ${theme.spacing(1)}`,
  position: "sticky",
  top: 0,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const AvatarBox = styled(AvatarGroup)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const RightbarTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: 500,
  color: "#555",
}));

const ImageListBox = styled(ImageList)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const CategoryLink = styled(Link)(({ theme }) => ({
  marginRight: theme.spacing(2),
  color: "#555",
  fontSize: "0.8rem",
}));

const Rightbar = () => {
  return (
    <Wrapper>
      <RightbarTitle variant="h6" gutterBottom>
        Online Friends
      </RightbarTitle>
      <AvatarBox max={6}>
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </AvatarBox>
      <RightbarTitle variant="h6" gutterBottom>
        Gallery
      </RightbarTitle>
      <ImageListBox rowHeight={100} cols={4}>
        <ImageListItem>
          <img src="https://a10.gaanacdn.com/images/albums/53/2567053/crop_480x480_2567053.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://a10.gaanacdn.com/images/albums/53/2567053/crop_480x480_2567053.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://a10.gaanacdn.com/images/albums/53/2567053/crop_480x480_2567053.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://a10.gaanacdn.com/images/albums/53/2567053/crop_480x480_2567053.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://a10.gaanacdn.com/images/albums/53/2567053/crop_480x480_2567053.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://a10.gaanacdn.com/images/albums/53/2567053/crop_480x480_2567053.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://a10.gaanacdn.com/images/albums/53/2567053/crop_480x480_2567053.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://a10.gaanacdn.com/images/albums/53/2567053/crop_480x480_2567053.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://a10.gaanacdn.com/images/albums/53/2567053/crop_480x480_2567053.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://a10.gaanacdn.com/images/albums/53/2567053/crop_480x480_2567053.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://a10.gaanacdn.com/images/albums/53/2567053/crop_480x480_2567053.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://a10.gaanacdn.com/images/albums/53/2567053/crop_480x480_2567053.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://a10.gaanacdn.com/images/albums/53/2567053/crop_480x480_2567053.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://a10.gaanacdn.com/images/albums/53/2567053/crop_480x480_2567053.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://a10.gaanacdn.com/images/albums/53/2567053/crop_480x480_2567053.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://a10.gaanacdn.com/images/albums/53/2567053/crop_480x480_2567053.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://a10.gaanacdn.com/images/albums/53/2567053/crop_480x480_2567053.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://a10.gaanacdn.com/images/albums/53/2567053/crop_480x480_2567053.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://a10.gaanacdn.com/images/albums/53/2567053/crop_480x480_2567053.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://a10.gaanacdn.com/images/albums/53/2567053/crop_480x480_2567053.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://a10.gaanacdn.com/images/albums/53/2567053/crop_480x480_2567053.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://a10.gaanacdn.com/images/albums/53/2567053/crop_480x480_2567053.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://a10.gaanacdn.com/images/albums/53/2567053/crop_480x480_2567053.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://a10.gaanacdn.com/images/albums/53/2567053/crop_480x480_2567053.jpg" />
        </ImageListItem>
      </ImageListBox>
      <RightbarTitle variant="h6" gutterBottom>
        Categories
      </RightbarTitle>
      <CategoryLink href="#" variant="body2">
        Sport
      </CategoryLink>
      <CategoryLink href="#" variant="body2">
        Food
      </CategoryLink>
      <CategoryLink href="#" variant="body2">
        Music
      </CategoryLink>
      <Divider flexItem style={{ margin: "0.3rem 0" }} />
      <CategoryLink href="#" variant="body2">
        Movies
      </CategoryLink>
      <CategoryLink href="#" variant="body2">
        Science
      </CategoryLink>
      <CategoryLink href="#" variant="body2">
        Life
      </CategoryLink>
    </Wrapper>
  );
};

export default Rightbar;
