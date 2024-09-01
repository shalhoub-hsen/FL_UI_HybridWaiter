import { createReducer } from "@reduxjs/toolkit";
import {
  clearResponses,
  login,
  logout,
  register,
} from "actions/authentication.action";
import { useAppSelector } from "hooks/redux";
import { ILoginResponse } from "models/ILoginResponse";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { persistentStorage } from "utils/localStorage";

export interface AuthenticationState {
  token: string | null;
  username: string | null;
  isAuthenticated: boolean;
  loginResponse: ILoginResponse | null;
  registrationResponse: boolean | null;
}

const initialAuthenticationState: AuthenticationState = {
  token: null,
  username: "",
  isAuthenticated: false,
  loginResponse: null,
  registrationResponse: null,
};

const authenticationReducer = createReducer(
  initialAuthenticationState,
  (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.loginResponse = action.payload;
        if (action.payload.isValid) {
          state.token = action.payload.token;
          state.isAuthenticated = true;
          state.username = action.payload.username;
          persistentStorage.setItem("token", action.payload.token);
        }
      })
      .addCase(logout, (state) => {
        state.token = null;
        state.username = "";
        state.isAuthenticated = false;
        state.loginResponse = null;
        state.registrationResponse = null;
        persistentStorage.setItem("token", null);
      })
      .addCase(register.fulfilled, (state, action) => {
        state.registrationResponse = action.payload;
      })
      .addCase(clearResponses, (state) => {
        state.loginResponse = null;
        state.registrationResponse = null;
      });
  }
);

const persisted = persistReducer(
  {
    key: "authenticationReducer",
    storage,
    whitelist: ["token", "username", "isAuthenticated"],
    timeout: 2000,
  },
  authenticationReducer
);

export const useAuthenticationState = () =>
  useAppSelector(({ authenticationReducer }) => authenticationReducer);

export default persisted;
