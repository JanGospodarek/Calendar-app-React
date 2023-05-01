import { Card, Stack, Typography } from '@mui/material';
import { Event } from './Event';
export function EventList(props: { date: Date }) {
  const date = props.date;

  return (
    <Stack direction='column' spacing={2}>
      <Typography variant='h6' color='initial.main'>
        {date.toDateString()}
      </Typography>
      {/* <Event date={date}></Event>
      <Event date={date}></Event>
      <Event date={date}></Event> */}
    </Stack>
  );
}
