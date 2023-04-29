import { Card, Stack, Typography } from "@mui/material";
import { Calendar } from "react-calendar";
import { useState } from "react";
import "./Calendar.css";
import { SelectedDate } from "./SelectedDate";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { RootState, appActions } from "./data/store";
import { useDispatch, useSelector } from "react-redux";
export function CalendarComp() {
  // const initialDate = useSelector((state: RootState) => state.app.selectedDate);

  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();

  function handleChangeDate(event: any) {
    setDate(event);
    console.log(event);

    dispatch(appActions.setSelectedDate({ date: event.toDateString() }));
  }
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
            onChange={handleChangeDate}
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
          <SelectedDate></SelectedDate>
        </Stack>
      </Stack>
    </Card>
  );
}
