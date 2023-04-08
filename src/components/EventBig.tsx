import { Card, Stack, Typography } from "@mui/material";
import { EventSmall } from "./EventSmall";
export function EventBig(props: { date: Date }) {
  const date = props.date;

  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="h6" color="initial">
        {date.toDateString()}
      </Typography>
      <EventSmall date={date}></EventSmall>
      <EventSmall date={date}></EventSmall>
      <EventSmall date={date}></EventSmall>
    </Stack>
  );
}
