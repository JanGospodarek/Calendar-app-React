import { Card, Stack, Typography } from '@mui/material';
import { EventList } from './EventList';

export function Events() {
  return (
    <Card
      sx={{
        padding: '10px',
        backgroundColor: 'back.light',
        border: '2px solid',
        borderColor: 'back.border',
        margin: '20px',
      }}
    >
      <Stack>
        <Typography variant='h5' color='initial.main'>
          Upcomming events
        </Typography>
        <Stack direction='row' spacing={3}>
          <EventList date={new Date()}></EventList>
          <EventList date={new Date()}></EventList>
        </Stack>
      </Stack>
    </Card>
  );
}
