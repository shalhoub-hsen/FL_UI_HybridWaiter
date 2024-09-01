export interface ILoginResponse {
  isValid: boolean;
  token: string;
  username: string;
  loginErrorMessage: string;
}
