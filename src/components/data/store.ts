import { configureStore, createSlice } from '@reduxjs/toolkit';
import Fetch from '../hooks/Fetch';

// ...
const init: AppSlice = {
  userName: '',
  userId: null,
  selectedDate: new Date().toDateString(),
  todayEvents: [],
};
const appSlice = createSlice({
  name: 'app',
  initialState: init,
  reducers: {
    setName(state, action) {
      state.userName = action.payload.name;
      state.userId = action.payload.id;
    },
    setSelectedDate(state, action) {
      state.selectedDate = action.payload.date;
    },
    setSelectedDateEvents(state, action) {
      state.todayEvents = action.payload.events;
    },
    getSelectedDateEvents(state, action) {},
  },
});
const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    app: appSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export const appActions = appSlice.actions;
export default store;
