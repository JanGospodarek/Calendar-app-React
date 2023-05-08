import { Card, Stack, Typography, IconButton, Modal, Box } from '@mui/material';
import { Event } from './Event';
import AddIcon from '@mui/icons-material/Add';
import { SyntheticEvent, useState } from 'react';
import { ModalComp } from './AddEventModal';
import { useSelector } from 'react-redux';
import { RootState } from './data/store';
import { useEffect } from 'react';
import Fetch from './hooks/Fetch';
import { useDispatch } from 'react-redux';
import { appActions } from './data/store';
export function SelectedDate() {
  const date = useSelector((state: RootState) => state.app.selectedDate);

  const events = useSelector((state: RootState) => state.app.todayEvents);

  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, [date]);

  async function fetchEvents() {
    const response = (await Fetch('http://localhost:4000/fetchEvents', {
      range: [date],
    })) as Response;
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
    dispatch(
      appActions.setSelectedDateEvents({
        events: JSON.parse(responseData.events),
      })
    );
    if (responseData.type !== 'success') return;
  }

  function handleAddEvent(event: SyntheticEvent) {
    setOpenModal(true);
  }

  function handleClose(event: SyntheticEvent) {
    setOpenModal(false);
  }
  return (
    <>
      <Card
        sx={{
          padding: '10px',
          width: '25%',
          marginLeft: '20px',
          backgroundColor: 'back.light',
          border: '2px solid',
          borderColor: 'back.border',
          color: 'white',
        }}
      >
        <Stack>
          <Typography variant='h5' color='initial'>
            Selected date
          </Typography>
          <Typography variant='h6' color='initial'>
            {date}
          </Typography>
          <Stack spacing={3}>
            {events.map((event) => (
              <Event event={event}></Event>
            ))}
          </Stack>
        </Stack>
        <IconButton
          aria-label='Add event'
          onClick={handleAddEvent}
          sx={{ marginTop: '10px' }}
        >
          <AddIcon sx={{ fill: 'white' }}></AddIcon>
        </IconButton>
      </Card>
      {/* Modal */}
      <ModalComp open={openModal} handleClose={handleClose}></ModalComp>
    </>
  );
}

const styles = {
  width: 350,
  height: 400,
  backgroundColor: 'white',
  borderRadius: 10,
  padding: '30px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  margin: '-200px 0 0 -125px',
};
