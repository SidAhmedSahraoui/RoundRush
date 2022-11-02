//import axios, { AxiosError, AxiosResponse } from "axios";
import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { AppThunk, RootState } from "../store";
import { User } from "../../types/types";

const initialState: User = {
  id: "",
  email: "",
  password: "",
  isLoading: false,
  errorMessage: "",
  isValid: false,
};

export const loginUserSlice = createSlice({
  name: "login-user",
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
      state.id = action.payload;
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
} = loginUserSlice.actions;

export const selectCreateUser = (state: RootState) => state.auth;

export const loginUser = (): AppThunk => async (dispatch, getState) => {
  dispatch(validateForm());

  const {  email, password, isValid } = selectCreateUser(
    getState()
  );

  // If the form is valid, we send a request to the api
  if (isValid) {
    dispatch(setLoading());

    if(email === "admin@admin.com" || password === "123456"){
      dispatch(createUserSuccess(uuidv4()));

    } else {
      dispatch(createUserFail("Please make sure you have the correct email and password"))
    }
    /*try {
      const res: AxiosResponse = await axios.post("user", {
        email,
        password,
      });

      dispatch(createUserSuccess(res.data));
    } catch (error) {
      // Catching the error
      const { response } = error as AxiosError;

      const errorMessage = response?.data || "Something unexpected happend!";

      dispatch(createUserFail(JSON.stringify(errorMessage)));
    }*/
  }
};

export default loginUserSlice.reducer;
