import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../store";
import { Recover } from "../../types/types";

const initialState: Recover = {
  id: "",
  email: "",
  password: "",
  alertMessage: "",
  verified: false,
  done: false,
};

export const recoverSlice = createSlice({
  name: "recover-password",
  initialState,
  reducers: {
    resetState: () => initialState,
    changeEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    changePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    validateEmail: (state) => {
      // We clear errors
      state.alertMessage = "";

      // Then we validate the form
      const { email } = current(state);

      // Validating the title
      if (email) {
        state.alertMessage = "Well done, we will email you with a reset link.";
        state.email = "";
        state.verified = true;
        return;
      }
    },
    Done: (state) => {
      // We clear errors
      state.alertMessage = "";

      state.alertMessage = "Well done, we will email you with a reset link.";
      state.done = true;
      return;
    },
    Finish: (state) => {
      // We clear errors
      state.alertMessage = "";
      state.id = uuidv4();
      state.alertMessage = "Well done, The password was reset succesfully.";
      return;
    },
  },
});

export const { resetState, changeEmail, changePassword, validateEmail, Done , Finish} =
  recoverSlice.actions;

export const selectRecover = (state: RootState) => state.recover;

export default recoverSlice.reducer;
