import { Card, Stack, Typography } from '@mui/material';
import { EventList } from './EventList';
import { useEffect, useState } from 'react';
import Fetch from './hooks/Fetch';
import { useSelector } from 'react-redux';
import { RootState } from './data/store';
export function Events() {
  const date = new Date();
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  const selectedDateEvents = useSelector(
    (state: RootState) => state.app.todayEvents
  );

  useEffect(() => {
    fetchEvents();
  }, [selectedDateEvents]);

  async function fetchEvents() {
    console.log('wow');

    const range: string[] = [];

    for (let index = 1; index < 8; index++) {
      range.push(new Date(date.setDate(date.getDate() + 1)).toDateString());
    }

    const response = (await Fetch('http://localhost:4000/fetchEvents', {
      range: range,
    })) as Response;
    console.log(response);

    if (response.status !== 200) {
      // setAlert({
      //   title: 'Error',
      //   msg: String(response.status),
      //   type: 'error',
      // });
      return;
    }

    const responseData = (await response.json()) as {
      type: string;
      events: any;
    };

    const events = JSON.parse(responseData.events);
    console.log(events);
    setUpcomingEvents(events);
    if (responseData.type !== 'success') return;
  }

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
          {upcomingEvents.map((events: EventComp[]) => (
            <EventList
              key={events[0].date}
              date={events[0].date}
              events={events}
            ></EventList>
          ))}
        </Stack>
      </Stack>
    </Card>
  );
}
