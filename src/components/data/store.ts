import { configureStore, createSlice } from "@reduxjs/toolkit";
// ...
const init: AppSlice = { userName: "", userId: null };
const appSlice = createSlice({
  name: "app",
  initialState: init,
  reducers: {
    setName(state, action) {
      console.log(action);
      state.userName = action.payload.name;
      state.userId = action.payload.id;
      console.log(state.userName);
    },
  },
});
const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export const appActions = appSlice.actions;
export default store;
