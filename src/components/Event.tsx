import {
  Card,
  Typography,
  Stack,
  FormControl,
  FormLabel,
  RadioGroup,
  FormHelperText,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
export function Event(props: { event: EventComp }) {
  console.log(props.event);

  return (
    <Card
      sx={{
        width: '250px',
        height: '90px',
        padding: '5px',
        backgroundColor: props.event.color,
      }}
    >
      <Stack direction='row'>
        <Typography variant='subtitle1' color='black' align='center'>
          {props.event.title}
        </Typography>
      </Stack>

      <Typography variant='subtitle2' color='black'>
        {props.event.startingHour}-{props.event.endingHour} |{' '}
        {`${props.event.date}`}
      </Typography>
      <Typography variant='body2' color='black'>
        {props.event.description}
      </Typography>
    </Card>
  );
}
