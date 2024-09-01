import { clearResponses, login, register } from "actions/authentication.action";
import { useAppDispatch } from "hooks/redux";
import { IClient } from "models/IClient";
import { ILoginModel } from "models/ILoginModel";
import { useEffect, useState } from "react";
import { useAuthenticationState } from "reducers/authentication.reducer";

export interface SignInModalProps {
  showModal: boolean;
  onCloseModal: () => void;
}

export const useSignInModal = (props: SignInModalProps) => {
  const dispatch = useAppDispatch();

  const authState = useAuthenticationState();
  const { loginResponse, registrationResponse } = authState;

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [loginShow, setLoginShow] = useState({});

  const [loginValues, setLoginValues] = useState<ILoginModel>({
    email: "",
    password: "",
  });

  const [registrationValues, setRegistrationValues] = useState<IClient>({
    id: 0,
    email: "",
    firstName: "",
    lastName: "",
    middleName: "",
    password: "",
  });

  const onChangeValue = (isLogin: boolean, key: string, value: string) => {
    if (isLogin)
      setLoginValues({
        ...loginValues,
        [key]: value,
      });
    else
      setRegistrationValues({
        ...registrationValues,
        [key]: value,
      });
  };

  const showSignUp = () => {
    setErrorMessage(null);
    setLoginShow({ marginLeft: "-50%" });
  };
  const showLogIn = () => {
    setErrorMessage(null);
    setLoginShow({ marginLeft: "0%" });
  };

  const onLoginSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(login(loginValues));
  };

  const onRegisterSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(register(registrationValues));
  };

  const onFinalClose = () => {
    setErrorMessage(null);
    props.onCloseModal();
  };

  useEffect(() => {
    if (loginResponse != null) {
      if (!loginResponse.isValid)
        setErrorMessage(loginResponse.loginErrorMessage);
      else {
        setErrorMessage("");
        props.onCloseModal();
      }
      dispatch(clearResponses());
    }
  }, [loginResponse]);

  useEffect(() => {
    if (registrationResponse != null) {
      if (registrationResponse) {
        setErrorMessage("");
        dispatch(
          login({
            email: registrationValues.email!,
            password: registrationValues.password!,
          })
        );
      } else {
        setErrorMessage("This email is already taken");
      }
      dispatch(clearResponses());
    }
  }, [registrationResponse]);

  return {
    ...props,
    registrationValues,

    showSignUp,
    showLogIn,
    loginShow,
    onLoginSubmit,
    loginValues,
    onChangeValue,
    onRegisterSubmit,
    errorMessage,
    onFinalClose,
  };
};
