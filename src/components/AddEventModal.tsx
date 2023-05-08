import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
  DialogContentText,
  Button,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  Stack,
  FormControlLabel,
} from '@mui/material';
import { appActions } from './data/store';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { ChangeEvent, useRef, useState, useEffect } from 'react';
import Fetch from './hooks/Fetch';
import './ModalCompStyles.css';
import { AlertComp } from './reuseable/AlertComp';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './data/store';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
export function ModalComp(props: { open: boolean; handleClose: Function }) {
  const date = useSelector((state: RootState) => state.app.selectedDate);
  const dispatch = useDispatch();
  const [color, setColor] = useState<string>('normal');
  const [data, setData] = useState({ title: '', description: '' });
  const [alert, setAlert] = useState<AlertType>(null);
  const [startingHour, setStartingHour] = useState<Dayjs | null>(dayjs(date));
  const [endingHour, setEndingHour] = useState<Dayjs | null>(dayjs(date));

  type input = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;
  const userId = useSelector((state: RootState) => state.app.userId);

  function handleChangeColor(event: input) {
    setColor(event.target.value);
  }
  function handleChange(event: input) {
    let state = Object.assign({}, data);

    switch (event.target.id) {
      case 'title':
        state.title = event.target.value;
        setData(state);
        break;
      case 'desc':
        state.description = event.target.value;
        setData(state);
        break;
    }
  }
  async function handleAddEvent() {
    const eventData = {
      ...data,
      color: color,
      userId: userId,
      date: date,
      startingHour: `${dayjs(startingHour).hour()}:${dayjs(
        startingHour
      ).minute()}`,
      endingHour: `${dayjs(endingHour).hour()}:${dayjs(endingHour).minute()}`,
    };

    const response = (await Fetch(
      'http://localhost:4000/addEvent',
      eventData
    )) as Response;
    if (response.status !== 200) {
      setAlert({
        title: 'Error',
        msg: String(response.status),
        type: 'error',
      });
      return;
    }

    const responseData = (await response.json()) as {
      type: string;
      msg: string;
      events: string;
    };

    if (responseData.type !== 'success') return;
    setAlert({
      title: 'Success',
      msg: responseData.msg,
      type: 'success',
    });
    console.log(responseData.events);

    dispatch(
      appActions.setSelectedDateEvents({
        events: JSON.parse(responseData.events),
      })
    );
    props.handleClose();

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Dialog
        open={props.open}
        onClose={(e) => {
          props.handleClose(e);
        }}
      >
        <DialogTitle>Add event</DialogTitle>

        <DialogContent>
          <Stack direction='row' spacing={2}>
            <Stack spacing={2} direction='column' width='75%'>
              <TextField
                autoFocus
                margin='dense'
                id='title'
                label='Event Title'
                type='text'
                variant='standard'
                onChange={handleChange}
              />
              <TextField
                autoFocus
                margin='dense'
                id='desc'
                label='Event describtion'
                type='text'
                onChange={handleChange}
                variant='standard'
                multiline
                minRows={2}
                maxRows={4}
              />
              <TimeField
                label='Controlled field'
                value={startingHour}
                onChange={(newValue) => setStartingHour(newValue)}
                format='HH:mm'
              />
              <TimeField
                label='Controlled field'
                value={endingHour}
                onChange={(newValue) => setEndingHour(newValue)}
                format='HH:mm'
              />
            </Stack>
            <Stack>
              <FormControl>
                <FormLabel id='demo-radio-buttons-group-label'>Color</FormLabel>
                <RadioGroup
                  aria-labelledby='demo-radio-buttons-group-label'
                  name='radio-buttons-group'
                >
                  <FormControlLabel
                    value='Orange'
                    control={
                      <Radio
                        checked={color === '#ffb3b3'}
                        onChange={handleChangeColor}
                        value='#ffb3b3'
                        color='warning'
                      />
                    }
                    label='Orange'
                  />
                  <FormControlLabel
                    value='blue'
                    control={
                      <Radio
                        checked={color === '#9999ff'}
                        onChange={handleChangeColor}
                        value='#9999ff'
                        color='primary'
                      />
                    }
                    label='Blue'
                  />
                  <FormControlLabel
                    value='green'
                    control={
                      <Radio
                        checked={color === '#99e699'}
                        onChange={handleChangeColor}
                        value='#99e699'
                        color='success'
                      />
                    }
                    label='Green'
                  />
                </RadioGroup>
              </FormControl>
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={(e) => {
              props.handleClose(e);
            }}
          >
            Cancel
          </Button>
          <Button onClick={handleAddEvent}>Add event</Button>
        </DialogActions>
      </Dialog>
      {alert !== null ? <AlertComp alert={alert} /> : <></>}
    </LocalizationProvider>
  );
}
