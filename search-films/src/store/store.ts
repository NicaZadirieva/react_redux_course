import { configureStore } from "@reduxjs/toolkit";
import favourSlice, { FILMS_PERSISTENT_STATE } from "./films.slice";
import { saveState } from "./storage";
import userSlice, { USER_PERSISTENT_STATE } from "./user.slice";

export const store = configureStore({
  reducer: {
    favors: favourSlice,
    users: userSlice,
  },
});

store.subscribe(() => {
  saveState(
    { favorites: store.getState().favors.favorites },
    FILMS_PERSISTENT_STATE
  );

  saveState(
    {
      data: store.getState().users.data,
      currentUser: store.getState().users.currentUser,
    },
    USER_PERSISTENT_STATE
  );
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
