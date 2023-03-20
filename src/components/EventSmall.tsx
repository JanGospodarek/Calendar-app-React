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
export function EventSmall(props: { date: Date; radio: boolean }) {
  const date = props.date;
  const radio = props.radio;
  const [color, setColor] = useState<string | null>(null);

  function handleChangeColor(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setColor(event.target.value);
  }

  return (
    <Card
      sx={{
        width: "250px",
        height: "90px",
        padding: "5px",
        backgroundColor: `${color}`,
      }}
    >
      <Stack direction="row">
        <Typography variant="subtitle1" color="initial" align="center">
          Event
        </Typography>
        {radio ? (
          <>
            <Radio
              checked={color === "#ffb3b3"}
              onChange={handleChangeColor}
              value="#ffb3b3"
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
              size="small"
              color="warning"
            />
            <Radio
              checked={color === "#9999ff"}
              onChange={handleChangeColor}
              value="#9999ff"
              name="radio-buttons"
              inputProps={{ "aria-label": "B" }}
              size="small"
              color="primary"
            />
            <Radio
              checked={color === "#99e699"}
              onChange={handleChangeColor}
              value="#99e699"
              name="radio-buttons"
              inputProps={{ "aria-label": "B" }}
              size="small"
              color="success"
            />
          </>
        ) : (
          ""
        )}
      </Stack>

      <Typography variant="subtitle2" color="initial">
        10:00-12:00 | {date.toDateString()}
      </Typography>
      <Typography variant="body2" color="initial">
        Opis...
      </Typography>
    </Card>
  );
}
