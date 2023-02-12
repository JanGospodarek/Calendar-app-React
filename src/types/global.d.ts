export {};
declare global {
  type AlertType = {
    title: string;
    msg: string;
    type: AlertColor | undefined;
  } | null;
}
