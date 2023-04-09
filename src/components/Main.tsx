import { Stack } from "@mui/material";
import { Content } from "./Content";
import { MuiNavbar } from "./NavBar";
export function MainComp() {
  return (
    <div className="wrapper">
      <Stack
        direction="column"
        sx={{ backgroundColor: "back.main", height: "100vh" }}
      >
        <MuiNavbar></MuiNavbar>
        <Content></Content>
      </Stack>
    </div>
  );
}
