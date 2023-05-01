export {};
declare global {
  interface EventComp {
    title: string;
    description: string;
    date: string;
    startingHour: string;
    endingHour: string;
    color: string;
    userId: string;
    eventId?: string;
  }
  type AlertType = {
    title: string;
    msg: string;
    type: AlertColor | undefined;
  } | null;
  type AppSlice = {
    userName: string;
    userId: number | null;
    todayEvents: EventComp[];
    selectedDate: any;
  };
}
