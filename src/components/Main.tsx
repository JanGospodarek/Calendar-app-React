import { Stack } from "@mui/material";
import { Content } from "./Content";
import { MuiNavbar } from "./NavBar";
import { AlertComp } from "./reuseable/AlertComp";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { appActions } from "./data/store";
export function MainComp() {
  const [alert, setAlert] = useState<AlertType>(null);
  const navigate = useNavigate();
  const name = localStorage.getItem("name");
  const id = localStorage.getItem("id");
  const dispatch = useDispatch();

  useEffect(() => {
    if (name == null) {
      setAlert({
        title: "Error",
        msg: "You are not logged in!",
        type: "error",
      });

      setTimeout(() => {
        navigate("/login");
      }, 300);
    } else {
      dispatch(appActions.setName({ name: name, id: id }));
    }
  }, []);

  return (
    <>
      <Stack
        direction="column"
        sx={{
          backgroundColor: "back.main",
          height: "100vh",
          overflow: "scroll",
        }}
      >
        <MuiNavbar name={name}></MuiNavbar>
        <Content></Content>
      </Stack>
      {alert !== null ? <AlertComp alert={alert} /> : <></>}
    </>
  );
}
