import {
  Box,
  Grid,
  Card,
  CardContent,
  Stack,
  Typography,
  CardActions,
  TextField,
  Button,
  Alert,
  AlertTitle,
  AlertColor,
} from "@mui/material";
import { useState } from "react";
import userData from "../data/users.json";
import { AlertComp } from "./reuseable/AlertComp";
import { useNavigate } from "react-router-dom";
export default function LogInComp() {
  const navigate = useNavigate();

  const [pass, setPass] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState<AlertType>(null);

  type input = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

  function handlePassChange(event: input) {
    const value = event.target.value.trim();
    if (value.length < 8) {
      setError("Too short password");
    } else {
      setError(null);
    }
    setPass(value);
  }
  function handleEmailChange(event: input) {
    const value = event.target.value.trim();

    setEmail(value);
  }
  function handleLogIn() {
    if (pass && email && !error) {
      const index = userData.findIndex((el) => el.email == email);
      if (index == -1) {
        setAlert({
          title: "Error",
          msg: "There is no user with email " + email + " !",
          type: "error",
        });
        return;
      }
      const user = userData[index];
      if (user.password !== pass) {
        setAlert({
          title: "Error",

          msg: "Wrong password!",
          type: "error",
        });
      }
      if (user.password == pass) {
        setAlert({
          title: "Success",

          msg: "You are logged in!",
          type: "success",
        });
        navigate("/main");
      }
    }
  }
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Box width="320px">
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5">Log in</Typography>
              </CardContent>
              <CardActions
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Stack
                  spacing={2}
                  direction="column"
                  sx={{
                    width: "80%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TextField
                    label="Your email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => handleEmailChange(e)}
                  ></TextField>
                  <TextField
                    required
                    label="Your password"
                    type="password"
                    helperText={
                      Boolean(error)
                        ? error
                        : "Password must be at least 8 characters long"
                    }
                    value={pass}
                    onChange={(e) => handlePassChange(e)}
                    error={Boolean(error)}
                  ></TextField>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleLogIn}
                    disabled={Boolean(error) || !Boolean(email)}
                  >
                    Log In
                  </Button>
                </Stack>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      </Grid>
      {alert !== null ? <AlertComp alert={alert} /> : <></>}
    </>
  );
}
