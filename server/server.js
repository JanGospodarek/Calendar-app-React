const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const fs = require("fs");
const crypto = require("crypto");
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
app.post("/addUser", (req, res) => {
  const data = req.body;
  const index = userData.findIndex((el) => el.email == data.email);
  if (index !== -1) {
    res.send({
      type: "error",
      msg: `Account with email ${data.email} alreadt exists!`,
    });
  } else {
    const id = String(crypto.randomBytes(4).toString("hex"));

    userData.push({
      id: id,
      name: data.name,
      email: data.email,
      password: data.password,
    });
    const exit = JSON.stringify(userData);
    fs.writeFile("./data/users.json", exit, "utf8", () => {
      res.send({
        type: "success",
        msg: `Account ${data.email} added!`,
      });
    });
  }
  console.log(data);
});
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
