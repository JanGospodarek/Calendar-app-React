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
  return (
    <Card
      sx={{
        width: '250px',
        height: '90px',
        padding: '5px',
        backgroundColor: 'back.light',
      }}
    >
      <Stack direction='row'>
        <Typography variant='subtitle1' color='initial.main' align='center'>
          {props.event.title}
        </Typography>
      </Stack>

      <Typography variant='subtitle2' color='initial.main'>
        {props.event.startingHour}-{props.event.endingHour} |{' '}
        {`${props.event.date}`}
      </Typography>
      <Typography variant='body2' color='initial.main'>
        {props.event.description}
      </Typography>
    </Card>
  );
}
