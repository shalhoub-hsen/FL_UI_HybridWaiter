import { IClient } from "models/IClient";
import { ILoginModel } from "models/ILoginModel";
import { ILoginResponse } from "models/ILoginResponse";
import { http } from "utils/http";

const login = async (loginModel: ILoginModel) => {
  return await http.post<ILoginModel, ILoginResponse>("Auth/Login", loginModel);
};

const register = async (client: IClient) => {
  return await http.post<IClient, boolean>("Auth/Register", client);
};

const AuthServices = {
  login,
  register,
};

export default AuthServices;
