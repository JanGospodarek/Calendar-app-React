import { Card, Stack, Typography } from "@mui/material";

export function Events() {
  return (
    <Card sx={{ padding: "10px" }}>
      <Stack>
        <Typography variant="h5" color="initial">
          Upcomming events
        </Typography>
      </Stack>
    </Card>
  );
}
