import { Alert, AlertTitle } from "@mui/material";
import { useEffect, useState } from "react";
export function AlertComp(props: { alert: AlertType }) {
  const alert = props.alert;

  return (
    <Alert severity={alert?.type} sx={{ position: "absolute", bottom: 0 }}>
      <AlertTitle>{alert?.title}</AlertTitle>
      {alert?.msg}
    </Alert>
  );
}
