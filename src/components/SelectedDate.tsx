import { Card, Stack, Typography, IconButton } from "@mui/material";
import { EventSmall } from "./EventSmall";
import AddIcon from "@mui/icons-material/Add";
import { SyntheticEvent } from "react";
export function SelectedDate(props: { date: Date }) {
  const date = props.date;
  console.log(date);

  function handleAddEvent(event: SyntheticEvent) {
    console.log(event.target);
  }

  return (
    <Card sx={{ padding: "10px", width: "25%", marginLeft: "20px" }}>
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
        <AddIcon></AddIcon>
      </IconButton>
    </Card>
  );
}
