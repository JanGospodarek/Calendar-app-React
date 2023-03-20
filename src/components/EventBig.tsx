import { Card, Stack, Typography } from "@mui/material";
import { EventSmall } from "./EventSmall";
export function EventBig(props: { date: Date }) {
  const date = props.date;

  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="h6" color="initial">
        {date.toDateString()}
      </Typography>
      <EventSmall radio={false} date={date}></EventSmall>
      <EventSmall radio={false} date={date}></EventSmall>
      <EventSmall radio={false} date={date}></EventSmall>
    </Stack>
  );
}
