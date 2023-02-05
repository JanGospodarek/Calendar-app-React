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
export default function LogInComp() {
  const [pass, setPass] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");

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
  );
}
