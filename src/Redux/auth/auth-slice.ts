import axios, { AxiosError, AxiosResponse } from "axios";
import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { AppThunk, RootState } from "../store";
import { User } from "../../types/types";

const initialState: User = {
  id: uuidv4(),
  email: "",
  password: "",
  isLoading: false,
  errorMessage: "",
  isValid: false,
};

export const createUserSlice = createSlice({
  name: "create-user",
  initialState,
  reducers: {
    resetState: () => initialState,
    changeEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    changePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    validateForm: (state) => {
      // We clear errors
      state.errorMessage = "";

      // Then we validate the form
      const { email, password } = current(state);

      // Validating the title
      if (!email) {
        state.errorMessage = "Email can't be empty";
        
        return;
      } else {
        if (password.length < 6) {
            state.errorMessage = "Password must be at least 6 characters";
            return;
          } else {
            state.isValid = true
          }
      }
     
    },
    setLoading: (state) => {
      state.isLoading = true;
    },
    createUserSuccess: (state, action: PayloadAction<string>) => {
      state.errorMessage = "";
      state.isLoading = false;
    },
    createUserFail: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  resetState,
  changeEmail,
  changePassword,
  validateForm,
  setLoading,
  createUserSuccess,
  createUserFail,
} = createUserSlice.actions;

export const selectCreateUser = (state: RootState) => state.auth;

export const createQuiz = (): AppThunk => async (dispatch, getState) => {
  dispatch(validateForm());

  const { id, email, password, isValid } = selectCreateUser(
    getState()
  );

  // If the form is valid, we send a request to the api
  if (isValid) {
    dispatch(setLoading());

    try {
      const res: AxiosResponse = await axios.post("quizzes", {
        id,
        email,
        password,
      });

      dispatch(createUserSuccess(res.data));
    } catch (error) {
      // Catching the error
      const { response } = error as AxiosError;

      const errorMessage = response?.data || "Something unexpected happend!";

      dispatch(createUserFail(JSON.stringify(errorMessage)));
    }
  }
};

export default createUserSlice.reducer;
