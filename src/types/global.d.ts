export {};
declare global {
  type AlertType = {
    title: string;
    msg: string;
    type: AlertColor | undefined;
  } | null;
  type AppSlice = {
    userName: string;
    userId: number | null;
  };
}
