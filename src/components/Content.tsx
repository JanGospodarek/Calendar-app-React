import { Grid } from "@mui/material";
import { AddEvent } from "./AddEvent";
import { Events } from "./Events";
import { Calendar } from "./Calendar";

export function Content() {
  return (
    <Grid container spacing={5} sx={{ position: "absolute", top: "105px" }}>
      <Grid item xs={8}>
        <Events></Events>
      </Grid>
      <Grid item xs={4}>
        <AddEvent></AddEvent>
      </Grid>
      <Grid item xs={12}>
        <Calendar />
      </Grid>
    </Grid>
  );
}
