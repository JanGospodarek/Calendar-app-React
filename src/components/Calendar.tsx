import { Card, Stack, Typography } from "@mui/material";
import { Calendar } from "react-calendar";
import { useState } from "react";
import "./Calendar.css";
import { SelectedDate } from "./SelectedDate";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
export function CalendarComp() {
  const [date, setDate] = useState(new Date());

  return (
    <Card
      sx={{
        padding: "10px",
        backgroundColor: "back.light",
        border: "2px solid",
        borderColor: "back.border",
        margin: "20px",
        color: "white",
      }}
    >
      <Stack>
        <Typography variant="h5" color="initial.main">
          Calendar
        </Typography>
        <Stack direction="row">
          <Calendar
            onChange={setDate}
            value={date}
            nextLabel={<NavigateNextIcon fontSize="large" />}
            nextAriaLabel="Go to next month"
            next2Label={<SkipNextIcon fontSize="large" />}
            next2AriaLabel="Go to next year"
            prevLabel={<NavigateBeforeIcon fontSize="large" />}
            prevAriaLabel="Go to prev month"
            prev2Label={<SkipPreviousIcon fontSize="large" />}
            prev2AriaLabel="Go to prev year"
          />
          <SelectedDate date={date}></SelectedDate>
        </Stack>
      </Stack>
    </Card>
  );
}
