import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IClient } from "models/IClient";
import { ILoginModel } from "models/ILoginModel";
import AuthServices from "services/auth.services";

const prefix = "authentication/";

export const clearResponses = createAction(`${prefix}clean-response`);

export const logout = createAction(`${prefix}logout`);

export const login = createAsyncThunk(
  `${prefix}login`,
  async (loginModel: ILoginModel) => {
    return AuthServices.login(loginModel);
  }
);

export const register = createAsyncThunk(
  `${prefix}register`,
  async (client: IClient) => {
    return AuthServices.register(client);
  }
);
