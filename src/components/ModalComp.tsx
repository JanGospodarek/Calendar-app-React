import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
  DialogContentText,
  Button,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  Stack,
  FormControlLabel,
} from "@mui/material";
import { ChangeEvent, useRef, useState, useEffect } from "react";
import Fetch from "./hooks/Fetch";
import "./ModalCompStyles.css";
import { AlertComp } from "./reuseable/AlertComp";
export function ModalComp(props: { open: boolean; handleClose: Function }) {
  const [color, setColor] = useState<string>("normal");
  const [data, setData] = useState({ title: "", description: "" });
  const [alert, setAlert] = useState<AlertType>(null);

  type input = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

  function handleChangeColor(event: input) {
    setColor(event.target.value);
  }
  function handleChange(event: input) {
    let state = Object.assign({}, data);

    switch (event.target.id) {
      case "title":
        state.title = event.target.value;
        setData(state);
        break;
      case "desc":
        state.description = event.target.value;
        setData(state);
        break;
    }
    console.log(data);
  }
  async function handleAddEvent() {
    const eventData: { title: string; description: string; color: string } = {
      ...data,
      color: color,
    };

    const response = (await Fetch(
      "http://localhost:4000/addEvent",
      eventData
    )) as Response;
    if (response.status !== 200) {
      setAlert({
        title: "Error",
        msg: String(response.status),
        type: "error",
      });
      return;
    }

    const responseData = (await response.json()) as {
      type: string;
      msg: string;
    };
    console.log(responseData);

    if (responseData.type !== "success") return;
    setAlert({
      title: "Success",
      msg: responseData.msg,
      type: "success",
    });
    props.handleClose();

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  return (
    <>
      <Dialog
        open={props.open}
        onClose={(e) => {
          props.handleClose(e);
        }}
      >
        <DialogTitle>Add event</DialogTitle>

        <DialogContent>
          <Stack direction="row" spacing={2}>
            <Stack spacing={2} direction="column" width="75%">
              <TextField
                autoFocus
                margin="dense"
                id="title"
                label="Event Title"
                type="text"
                variant="standard"
                onChange={handleChange}
              />
              <TextField
                autoFocus
                margin="dense"
                id="desc"
                label="Event describtion"
                type="text"
                onChange={handleChange}
                variant="standard"
                multiline
                minRows={2}
                maxRows={4}
              />
            </Stack>
            <Stack>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Color</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Orange"
                    control={
                      <Radio
                        checked={color === "#ffb3b3"}
                        onChange={handleChangeColor}
                        value="#ffb3b3"
                        color="warning"
                      />
                    }
                    label="Orange"
                  />
                  <FormControlLabel
                    value="blue"
                    control={
                      <Radio
                        checked={color === "#9999ff"}
                        onChange={handleChangeColor}
                        value="#9999ff"
                        color="primary"
                      />
                    }
                    label="Blue"
                  />
                  <FormControlLabel
                    value="green"
                    control={
                      <Radio
                        checked={color === "#99e699"}
                        onChange={handleChangeColor}
                        value="#99e699"
                        color="success"
                      />
                    }
                    label="Green"
                  />
                </RadioGroup>
              </FormControl>
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={(e) => {
              props.handleClose(e);
            }}
          >
            Cancel
          </Button>
          <Button onClick={handleAddEvent}>Add event</Button>
        </DialogActions>
      </Dialog>
      {alert !== null ? <AlertComp alert={alert} /> : <></>}
    </>
  );
}
