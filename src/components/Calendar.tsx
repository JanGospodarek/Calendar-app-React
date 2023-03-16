import { Card, Stack, Typography } from "@mui/material";
import { Calendar } from "react-calendar";
import { useState } from "react";
import "./Calendar.css";
import { SelectedDate } from "./SelectedDate";
export function CalendarComp() {
  const [date, setDate] = useState(new Date());

  return (
    <Card sx={{ padding: "10px" }}>
      <Stack>
        <Typography variant="h5" color="initial">
          Calendar
        </Typography>
        <Stack direction="row">
          <Calendar onChange={setDate} value={date} />
          <SelectedDate date={date}></SelectedDate>
        </Stack>
      </Stack>
    </Card>
  );
}
