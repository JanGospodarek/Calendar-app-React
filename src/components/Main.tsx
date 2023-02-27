import { Stack } from "@mui/material";
import { Content } from "./Content";
import { MuiNavbar } from "./NavBar";

export function MainComp() {
  return (
    <Stack direction="column">
      <MuiNavbar></MuiNavbar>
      <Content></Content>
    </Stack>
  );
}
