import {
  Card,
  Typography,
  Stack,
  FormControl,
  FormLabel,
  RadioGroup,
  FormHelperText,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { ChangeEvent, SyntheticEvent, useState } from "react";
export function EventSmall(props: { date: Date }) {
  const date = props.date;
  return (
    <Card
      sx={{
        width: "250px",
        height: "90px",
        padding: "5px",
        backgroundColor: "back.light",
      }}
    >
      <Stack direction="row">
        <Typography variant="subtitle1" color="initial.main" align="center">
          Event
        </Typography>
      </Stack>

      <Typography variant="subtitle2" color="initial.main">
        10:00-12:00 | {`${date}`}
      </Typography>
      <Typography variant="body2" color="initial.main">
        Opis...
      </Typography>
    </Card>
  );
}
