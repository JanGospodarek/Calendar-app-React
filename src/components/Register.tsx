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
} from "@mui/material";
import { useState } from "react";
export default function RegisterComp() {
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [error2, setError2] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  type input = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

  function handlePassChange(event: input) {
    const value = event.target.value.trim();
    if (value.length < 8) {
      setError("Too short password!");
    } else if (pass2 !== "" && value !== pass2) {
      setError("Password do not match!");
    } else {
      setError(null);
    }
    if (pass2 == value) {
      setError2(null);
    }
    setPass(value);
  }
  function handlePass2Change(event: input) {
    const value = event.target.value.trim();
    if (value.length < 8) {
      setError2("Too short password");
    } else if (pass !== "" && value !== pass) {
      setError2("Password do not match!");
    } else {
      setError2(null);
    }
    if (pass == value) {
      setError(null);
    }
    setPass2(value);
  }
  function handleEmailChange(event: input) {
    const value = event.target.value.trim();

    setEmail(value);
  }
  function handleLogIn() {
    if (pass && email && !error) {
    }
  }
  return (
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
          <Card>
            <CardContent>
              <Typography variant="h5">Register</Typography>
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
                <TextField
                  required
                  label="Repeat password"
                  type="password"
                  helperText={error2}
                  value={pass2}
                  onChange={(e) => handlePass2Change(e)}
                  error={Boolean(error2)}
                ></TextField>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleLogIn}
                  disabled={
                    Boolean(error) ||
                    Boolean(error2) ||
                    !Boolean(email) ||
                    !Boolean(pass) ||
                    !Boolean(pass2)
                  }
                >
                  Register
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}
