const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const fs = require('fs');
const crypto = require('crypto');
app.use(express.json());
app.use(cors());

const userData = require('./data/users.json');
const eventData = require('./data/events.json');

app.post('/fetchUsers', (req, res) => {
  const data = req.body;
  let exitData = {};
  const index = userData.findIndex((el) => el.email == data.email);

  if (index == -1) {
    exitData.type = 'error';
    exitData.msg = 'There is no user with email ' + data.email + ' !';
  } else {
    const user = userData[index];

    if (user.password !== data.password) {
      exitData.type = 'error';
      exitData.msg = 'Wrong password';
    }
    if (user.password == data.password) {
      exitData.type = 'success';
      exitData.msg = 'You are logged in!';
      exitData.name = user.name;
      exitData.id = user.id;
    }
  }

  res.send(JSON.stringify(exitData));
});

app.post('/addUser', (req, res) => {
  const data = req.body;
  const index = userData.findIndex((el) => el.email == data.email);
  if (index !== -1) {
    res.send({
      type: 'error',
      msg: `Account with email ${data.email} alreadt exists!`,
    });
  } else {
    const id = String(crypto.randomBytes(4).toString('hex'));

    userData.push({
      id: id,
      name: data.name,
      email: data.email,
      password: data.password,
    });
    const exit = JSON.stringify(userData);
    fs.writeFile('./data/users.json', exit, 'utf8', () => {
      res.send({
        type: 'success',
        msg: `Account ${data.email} added!`,
      });
    });
  }
});

app.post('/addEvent', (req, res) => {
  const data = req.body;

  //prettier-ignore
  eventData.push({ title: data.title, description: data.description ,date:data.date,startingHour:data.startingHour,endingHour:data.endingHour,  userId:data.userId, eventId:String(crypto.randomBytes(4).toString("hex")),  color:data.color});
  const exit = JSON.stringify(eventData);
  fs.writeFile('./data/events.json', exit, 'utf8', (err) => {
    const events = [];
    eventData.forEach((event) => {
      if (event.date == data.date) {
        events.push(event);
      }
    });
    console.log('events: ', events);
    res.send({
      type: 'success',
      msg: `Event ${data.title} added!`,
      events: JSON.stringify(events),
    });
  });
});

app.post('/fetchEvents', (req, res) => {
  const range = req.body.range;
  const events = [];

  switch (range.length) {
    case 1:
      eventData.forEach((event) => {
        if (event.date == range[0]) {
          events.push(event);
        }
      });

      res.send({
        type: 'success',
        events: JSON.stringify(events),
      });

      break;

    default:
      range.forEach((date) => {
        const todayEvents = [];

        eventData.forEach((event) => {
          if (event.date == date) {
            todayEvents.push(event);
          }
        });

        if (todayEvents.length !== 0) {
          // todayEvents[0] = {
          //   type: 'no-events',
          //   date: date,
          //   msg: 'There is no events on this day',
          // };
          events.push(todayEvents);
        }
      });

      res.send({
        type: 'success',
        events: JSON.stringify(events),
      });

      break;
  }
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
