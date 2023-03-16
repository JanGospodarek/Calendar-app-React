import { Card, Stack, Typography } from "@mui/material";

export function AddEvent() {
  return (
    <Card sx={{ padding: "10px" }}>
      <Stack>
        <Typography variant="h5" color="initial">
          Add event
        </Typography>
      </Stack>
    </Card>
  );
}
