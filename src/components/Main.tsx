import { Stack } from '@mui/material';
import { MuiNavbar } from './NavBar';
import { AlertComp } from './reuseable/AlertComp';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { appActions } from './data/store';
import { Events } from './UpcomingEvents';
import { CalendarComp } from './Calendar';
import { Grid } from '@mui/material';
export function MainComp() {
  const [alert, setAlert] = useState<AlertType>(null);
  const navigate = useNavigate();
  const name = localStorage.getItem('name');
  const id = localStorage.getItem('id');
  const dispatch = useDispatch();

  useEffect(() => {
    if (name == null) {
      setAlert({
        title: 'Error',
        msg: 'You are not logged in!',
        type: 'error',
      });

      setTimeout(() => {
        navigate('/login');
      }, 300);
    } else {
      dispatch(appActions.setName({ name: name, id: id }));
    }
  }, []);

  return (
    <>
      <Stack
        direction='column'
        sx={{
          backgroundColor: 'back.main',
          height: '100vh',
          overflowY: 'hidden',
        }}
      >
        <MuiNavbar name={name}></MuiNavbar>
        <Grid
          container
          spacing={5}
          sx={{
            position: 'absolute',
            top: '105px',
            backgroundColor: 'back.main',
            overflow: 'hidden',
          }}
        >
          <Grid item xs={12}>
            <Events></Events>
          </Grid>

          <Grid item xs={12}>
            <CalendarComp />
          </Grid>
        </Grid>
      </Stack>
      {alert !== null ? <AlertComp alert={alert} /> : <></>}
    </>
  );
}
