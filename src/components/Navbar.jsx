import { Cancel, Mail, Notifications, Search } from "@mui/icons-material";
import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { blue, green, red } from "@mui/material/colors";
import React from "react";
import { useState } from "react";
import { theme } from "../theme";

const Wrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    backgroundColor: theme.palette.primary.main,
  },
  [theme.breakpoints.up("md")]: {
    backgroundColor: theme.palette.secondary.main,
  },
  [theme.breakpoints.up("lg")]: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const ToolbarBox = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const LogoLg = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "None",
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

const LogoSm = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {
    display: "None",
  },
  [theme.breakpoints.up("lg")]: {
    display: "None",
  },
}));

const SearchBox = styled("div")(({ theme, open }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  borderRadius: theme.shape.borderRadius,
  width: "50%",
  [theme.breakpoints.down("md")]: {
    display: open ? "flex" : "none",
    width: "70%",
  },
}));

const SearchInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  marginLeft: theme.spacing(1),
}));

const CancelButton = styled(Cancel)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const SearchButton = styled(Search)(({ theme, open }) => ({
  marginRight: theme.spacing(2),
  display: open ? "none" : "flex",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const IconBox = styled("div")(({ open }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: open ? "none" : "flex",
  },
}));

const IconBadge = styled(Badge)(({}) => ({
  marginRight: theme.spacing(2),
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="fixed">
      <Wrapper>
        <ToolbarBox sx={theme.palette.secondary}>
          <LogoLg variant="h3" component="h1">
            inNail
          </LogoLg>
          <LogoSm variant="h3" component="h1">
            iN
          </LogoSm>
          <SearchBox open={open}>
            <Search />
            <SearchInputBase placeholder="Search..." />
            <CancelButton onClick={() => setOpen(false)} />
          </SearchBox>
          <SearchButton
            open={open}
            onClick={() => {
              setOpen(true);
            }}
          />
          <IconBox open={open}>
            <IconBadge badgeContent={4} color="secondary">
              <Mail />
            </IconBadge>
            <IconBadge badgeContent={4} color="secondary">
              <Notifications />
            </IconBadge>
            <Avatar />
          </IconBox>
        </ToolbarBox>
      </Wrapper>
    </AppBar>
  );
};

export default Navbar;
