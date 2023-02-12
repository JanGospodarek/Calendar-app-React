import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function HomeComp() {
  const navigate = useNavigate();
  function navigateRegister() {
    navigate("/register");
  }
  function navigateLogIn() {
    navigate("/login");
  }
  return (
    <Dialog open sx={{ padding: 10 }}>
      <DialogContent>
        <CalendarMonthIcon></CalendarMonthIcon>
        <Typography variant="h2">Smart Calendar</Typography>
      </DialogContent>
      <DialogTitle>Do you have an account?</DialogTitle>

      <DialogActions sx={{ justifyContent: "space-around" }}>
        <Button onClick={navigateRegister} color="error" variant="outlined">
          No
        </Button>
        <Button onClick={navigateLogIn} color="success" variant="outlined">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
