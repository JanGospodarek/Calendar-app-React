import { Stack } from "@mui/material";
import { Content } from "./Content";
import { MuiNavbar } from "./NavBar";
export function MainComp() {
  return (
    <Stack
      direction="column"
      sx={{
        backgroundColor: "back.main",
        height: "100vh",
        overflow: "scroll",
      }}
    >
      <MuiNavbar></MuiNavbar>
      <Content></Content>
    </Stack>
  );
}
