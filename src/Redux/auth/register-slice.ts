//import axios, { AxiosError, AxiosResponse } from "axios";
import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { AppThunk, RootState } from "../store";
import { NewUser } from "../../types/types";

const initialState: NewUser = {
  id: "",
  email: "",
  name: "",
  password: "",
  company: "",
  space: "",
  industry: "",
  employees: "",
  accept: false,
  isLoading: false,
  errorMessage: "",
  isValid: false,
  isExist: false,
  formValid: false,
};

export const registerUserSlice = createSlice({
  name: "register-user",
  initialState,
  reducers: {
    resetState: () => initialState,
    changeEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    changePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    changeCompany: (state, action: PayloadAction<string>) => {
      state.company = action.payload;
    },
    changeSpace: (state, action: PayloadAction<string>) => {
      state.errorMessage = ""
      state.space = action.payload;
      if(state.space === "lastingdynamics") {
        state.errorMessage = "This space name is not available"
      }
    },
    changeIndustry: (state, action: PayloadAction<string>) => {
      state.industry = action.payload;
    },
    changeEmployees: (state, action: PayloadAction<string>) => {
      state.employees = action.payload;
    },
    validateEmail: (state) => {
      // We clear errors
      state.errorMessage = "";

      // Then we validate the form
      const { email } = current(state);

      // Validating the email
      if (!email) {
        state.errorMessage = "Email can't be empty";
        return;
      } else {
        if (email === "admin@admin.com") {
          state.isExist = true;
          state.isValid = false;
          return;
        } else {
          state.isExist = false;
          state.isValid = true;
        }
      }
    },
    validateForm: (state) => {
      // We clear errors
      state.errorMessage = "";

      // Then we validate the form
      const { name, password } = current(state);

      // Validating the email
      if (!name || !password) {
        state.errorMessage = "Please fill out all the fields";
        state.formValid = false;
        return;
      } else {
        if (password.length < 6) {
          state.errorMessage = "Password too short";
          state.formValid = false;
        } else {
          state.formValid = true;
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
      state.accept = true;
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
  changeName,
  changeCompany,
  changeEmployees,
  changeIndustry,
  changeSpace,
  changePassword,
  validateEmail,
  validateForm,
  setLoading,
  createUserSuccess,
  createUserFail,
} = registerUserSlice.actions;

export const selectCreateUser = (state: RootState) => state.create;

export const registerUser = (): AppThunk => async (dispatch, getState) => {

  const { isValid, isExist, formValid } =
    selectCreateUser(getState());

  // If the form is valid, we send a request to the api
  if (isValid && !isExist && formValid) {
    dispatch(setLoading());
    dispatch(createUserSuccess(uuidv4()))
  } else {
    dispatch(createUserFail("Somthing wrong!"))
  }
};

export default registerUserSlice.reducer;
