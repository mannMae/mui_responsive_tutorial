import logo from "./logo.svg";
import "./App.css";
import { Button, Grid } from "@mui/material";
import { Person } from "@mui/icons-material";
import { theme } from "./theme";
import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { styled } from "@mui/system";
import Add from "./components/Add";

const Wrapper = styled("div")(({ theme }) => ({}));

function App() {
  // const classes = useStyles();
  return (
    <div className="App">
      <Wrapper>
        <Navbar />
        <Grid container>
          <Grid item sm={2} xs={2}>
            <Leftbar />
          </Grid>
          <Grid item sm={7} xs={10}>
            <Feed />
          </Grid>
          <Grid item sm={3}>
            <Rightbar />
          </Grid>
        </Grid>
        <Add />
      </Wrapper>
    </div>
  );
}

export default App;
