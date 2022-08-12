import React, { useState } from "react";
import { styled } from "@mui/system";
import {
  Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { Alert as MuiAlert } from "@mui/material";

const Wrapper = styled(Tooltip)(({ theme }) => ({
  position: "fixed",
  bottom: 20,
  right: 20,
}));

const AddIconOutter = styled(Fab)(({ theme }) => ({}));

const ModalContainer = styled(Container)(({ theme }) => ({
  width: 500,
  height: 550,
  backgroundColor: "white",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  [theme.breakpoints.down("sm")]: {
    width: "90vw",
    height: "90vh",
  },
}));

const Form = styled("form")(({ theme }) => ({
  padding: theme.spacing(2),
}));

const Item = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const TextInput = styled(TextField)(({ theme }) => ({
  width: "100%",
}));

const ModalButton = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

const Alert = styled(MuiAlert)(({ theme }) => ({}));

const Add = () => {
  const [open, setOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };
  return (
    <>
      <Wrapper onClick={() => setOpen(true)} title="tooltip">
        <Fab color="primary">
          <AddIcon />
        </Fab>
      </Wrapper>
      <Modal open={open}>
        <ModalContainer>
          <Form>
            <Item>
              <TextInput id="standard-basic" label="Title" size="small" />
            </Item>
            <Item>
              <TextInput
                id="standard-basic"
                multiline
                rows={4}
                defaultValue="Tell your story..."
                variant="outlined"
                label="Description"
                size="small"
              />
            </Item>
            <Item>
              <TextInput select label="Visibility">
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextInput>
            </Item>
            <Item>
              <FormLabel component={"legend"}>Who can comment?</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Everbody"
                  control={<Radio size="small" />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="My Friends"
                  control={<Radio size="small" />}
                  label="My Friends"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio size="small" />}
                  label="Nobody"
                />
                <FormControlLabel
                  value="Custom"
                  disabled
                  control={<Radio size="small" />}
                  label="Custom (Premium)"
                />
              </RadioGroup>
            </Item>
            <Item>
              <ModalButton
                variant="outlined"
                color="primary"
                onClick={() => {
                  setOpenSnackbar(true);
                  console.log(openSnackbar);
                }}
              >
                Create
              </ModalButton>
              <ModalButton
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </ModalButton>
            </Item>
          </Form>
        </ModalContainer>
      </Modal>
      <Snackbar
        autoHideDuration={4000}
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity="success"
        >
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;
