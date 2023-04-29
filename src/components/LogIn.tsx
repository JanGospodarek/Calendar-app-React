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
// import userData from "../data/users.json";
import { AlertComp } from "./reuseable/AlertComp";
import { useNavigate } from "react-router-dom";
import { appActions } from "./data/store";
import { useDispatch } from "react-redux/es/exports";
import Fetch from "./hooks/Fetch";
export default function LogInComp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  async function handleLogIn() {
    if (pass && email && !error) {
      const response = (await Fetch("http://localhost:4000/fetchUsers", {
        email: email,
        password: pass,
      })) as Response;
      if (response.status !== 200) return;

      const data = (await response.json()) as {
        type: string;
        msg: string;
        name: string;
        id: string;
      };

      if (data.type == "success") {
        setAlert({
          title: "Success",
          msg: "You are logged in!",
          type: "success",
        });

        dispatch(appActions.setName({ name: data.name, id: data.id }));

        localStorage.setItem("name", data.name);
        localStorage.setItem("id", data.id);

        setTimeout(() => {
          navigate("/main");
        }, 300);
      } else {
        setAlert({
          title: "Error",
          msg: data.msg,
          type: "error",
        });
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
