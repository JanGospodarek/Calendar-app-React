import { Card, Stack, Typography } from "@mui/material";
import { EventBig } from "./EventBig";

export function Events() {
  return (
    <Card sx={{ padding: "10px" }}>
      <Stack>
        <Typography variant="h5" color="initial">
          Upcomming events
        </Typography>
        <Stack direction="row" spacing={3}>
          <EventBig date={new Date()}></EventBig>
          <EventBig date={new Date()}></EventBig>
        </Stack>
      </Stack>
    </Card>
  );
}
