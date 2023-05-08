import { Card, Stack, Typography } from '@mui/material';
import { Event } from './Event';
export function EventList(props: { date: string; events: EventComp[] }) {
  const date = props.date;

  return (
    <Stack direction='column' spacing={2}>
      <Typography variant='h6' color='initial.main'>
        {date}
      </Typography>
      {props.events.map((event) => (
        <Event key={event.eventId} event={event}></Event>
      ))}
      {/* <Event date={date}></Event>
      <Event date={date}></Event>
      <Event date={date}></Event> */}
    </Stack>
  );
}
