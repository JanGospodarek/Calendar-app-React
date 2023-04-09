import { Card, Stack, Typography, IconButton, Modal, Box } from "@mui/material";
import { EventSmall } from "./EventSmall";
import AddIcon from "@mui/icons-material/Add";
import { SyntheticEvent, useState } from "react";
import { ModalComp } from "./ModalComp";
export function SelectedDate(props: { date: Date }) {
  const date = props.date;
  console.log(date);
  const [openModal, setOpenModal] = useState(false);
  function handleAddEvent(event: SyntheticEvent) {
    setOpenModal(true);
  }
  function handleClose(event: SyntheticEvent) {
    setOpenModal(false);
  }
  return (
    <>
      <Card
        sx={{
          padding: "10px",
          width: "25%",
          marginLeft: "20px",
          backgroundColor: "back.light",
          border: "2px solid",
          borderColor: "back.border",
          color: "white",
        }}
      >
        <Stack>
          <Typography variant="h5" color="initial">
            Selected date
          </Typography>
          <Typography variant="h6" color="initial">
            {date.toDateString()}
          </Typography>
          <Stack spacing={3}>
            <EventSmall date={date}></EventSmall>
          </Stack>
        </Stack>
        <IconButton
          aria-label="Add event"
          onClick={handleAddEvent}
          sx={{ marginTop: "10px" }}
        >
          <AddIcon sx={{ fill: "white" }}></AddIcon>
        </IconButton>
      </Card>
      {/* Modal */}
      <ModalComp open={openModal} handleClose={handleClose}></ModalComp>
    </>
  );
}

const styles = {
  width: 350,
  height: 400,
  backgroundColor: "white",
  borderRadius: 10,
  padding: "30px",
  position: "absolute",
  top: "50%",
  left: "50%",
  margin: "-200px 0 0 -125px",
};
