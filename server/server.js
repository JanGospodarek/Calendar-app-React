const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
app.use(express.json());
const userData = require("./data/users.json");
app.use(cors());
app.post("/fetchUsers", (req, res) => {
  const data = req.body;
  let exitData = {};
  const index = userData.findIndex((el) => el.email == data.email);

  if (index == -1) {
    exitData.type = "error";
    exitData.msg = "There is no user with email " + data.email + " !";
  } else {
    const user = userData[index];

    if (user.password !== data.password) {
      exitData.type = "error";
      exitData.msg = "Wrong password";
    }
    if (user.password == data.password) {
      exitData.type = "success";
      exitData.msg = "You are logged in!";
      exitData.name = user.name;
      exitData.id = user.id;
      console.log(exitData);
    }
  }

  res.send(JSON.stringify(exitData));
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
