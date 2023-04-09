import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Stack } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./data/store";
export function MuiNavbar() {
  const [open, setOpen] = useState<null | HTMLElement>(null);
  const openB = Boolean(open);
  const name = useSelector((store: RootState) => store.app.userName);
  console.log(name);

  function handle(event: React.MouseEvent<HTMLButtonElement>) {
    setOpen(event.currentTarget);
  }
  function handleClose() {
    setOpen(null);
  }
  return (
    <AppBar position="static" sx={{ backgroundColor: "back.light" }}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit">
          <CalendarMonthIcon></CalendarMonthIcon>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          React Calendar
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Hi, {name}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            color="inherit"
            id="resources-button"
            onClick={handle}
            aria-controls={openB ? "res-main" : undefined}
            aria-haspopup="true"
            aria-expanded={openB ? "true" : undefined}
          >
            Theme
          </Button>
          <IconButton size="large" edge="start" color="inherit">
            <AccountCircleIcon></AccountCircleIcon>
          </IconButton>
        </Stack>
        <Menu
          id="reqource-menu"
          anchorEl={open}
          open={openB}
          MenuListProps={{ "aria-labelledby": "resources-button" }}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Dark</MenuItem>
          <MenuItem onClick={handleClose}>Light</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
