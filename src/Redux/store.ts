import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import auth from "./auth/auth-slice";
import create from "./auth/register-slice";
import recover from "./auth/recover-slice"

export const store = configureStore({
  reducer: {
    auth,
    create,
    recover
  },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
