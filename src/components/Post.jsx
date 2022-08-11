import React from "react";
import { styled } from "@mui/material/styles";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Wrapper = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(5),
}));

const CardImg = styled(CardMedia)(({ theme }) => ({
  height: 250,
  [theme.breakpoints.down("sm")]: {
    height: 150,
  },
}));

const CardTitle = styled(Typography)(({ theme }) => ({}));

const Post = () => {
  return (
    <Wrapper>
      <CardActionArea>
        <CardImg
          title="hangangGang"
          image="https://a10.gaanacdn.com/images/albums/53/2567053/crop_480x480_2567053.jpg"
        />
        <CardContent>
          <CardTitle gutterBottom variant="h5">
            HangangGang
          </CardTitle>
          <Typography variant="body3">
            본 영상은 가사 자막 영상입니다, 수익 창출은 되지 않습니다. ► 광고
            재생시 광고에 대한 수익은 저작권자에게 돌아갑니다 본 영상은 가사
            자막 영상입니다, 수익 창출은 되지 않습니다. ► 광고 재생시 광고에
            대한 수익은 저작권자에게 돌아갑니다 본 영상은 가사 자막 영상입니다,
            수익 창출은 되지 않습니다. ► 광고 재생시 광고에 대한 수익은
            저작권자에게 돌아갑니다 본 영상은 가사 자막 영상입니다, 수익 창출은
            되지 않습니다. ► 광고 재생시 광고에 대한 수익은 저작권자에게
            돌아갑니다 본 영상은 가사 자막 영상입니다, 수익 창출은 되지
            않습니다. ► 광고 재생시 광고에 대한 수익은 저작권자에게 돌아갑니다
            본 영상은 가사 자막 영상입니다, 수익 창출은 되지 않습니다. ► 광고
            재생시 광고에 대한 수익은 저작권자에게 돌아갑니다
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Wrapper>
  );
};

export default Post;
