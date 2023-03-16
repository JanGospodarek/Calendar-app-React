import { Card, Typography } from "@mui/material";
export function EventSmall(props: { date: Date }) {
  const date = props.date;

  return (
    <Card sx={{ width: "250px", height: "80px", padding: "5px" }}>
      <Typography variant="subtitle1" color="initial" align="center">
        Event
      </Typography>
      <Typography variant="subtitle2" color="initial">
        10:00-12:00 | {date.toDateString()}
      </Typography>
      <Typography variant="body2" color="initial">
        Opis...
      </Typography>
    </Card>
  );
}
