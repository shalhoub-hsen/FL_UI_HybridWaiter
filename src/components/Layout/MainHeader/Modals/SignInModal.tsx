import { SignInModalProps, useSignInModal } from "./useSignInModal";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "../../../../Registration.css";

const SignInModal: React.FC<SignInModalProps> = (props) => {
  const {
    registrationValues,
    onCloseModal,
    showSignUp,
    showLogIn,
    loginShow,
    onLoginSubmit,
    loginValues,
    onChangeValue,
    onRegisterSubmit,
    errorMessage,
    onFinalClose,
  } = useSignInModal(props);

  return (
    <div className="App">
      <Modal
        open={true}
        onClose={onFinalClose}
        // below styles added since it was displayed direclty after the header
        styles={{
          modalContainer: {
            marginTop: "5%",
          },
        }}
      >
        <div className="wrapper">
          <div className="title-text">
            <div style={loginShow} className="title login">
              Login Form
            </div>
            <div className="title signup">Signup Form</div>
          </div>
          {errorMessage && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className=""
                style={{
                  padding: "10px",
                  color: "red",
                }}
              >
                {errorMessage}
              </div>
            </div>
          )}
          <div className="form-container">
            <div className="slide-controls">
              <input type="radio" name="slide" id="login" defaultChecked />
              <input type="radio" name="slide" id="signup" />
              <label
                htmlFor="login"
                onClick={() => showLogIn()}
                className="slide login"
              >
                Login
              </label>
              <label
                htmlFor="signup"
                onClick={() => showSignUp()}
                className="slide signup"
              >
                Signup
              </label>
              <div className="slider-tab" />
            </div>
            <div className="form-inner">
              <form
                onSubmit={onLoginSubmit}
                style={loginShow}
                className="login"
              >
                <div className="field">
                  <input
                    value={loginValues.email}
                    type="email"
                    placeholder="Email Address"
                    required
                    onChange={(e) => {
                      onChangeValue(true, "email", e.target.value);
                    }}
                  />
                </div>
                <div className="field">
                  <input
                    value={loginValues.password}
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(e) => {
                      onChangeValue(true, "password", e.target.value);
                    }}
                  />
                </div>
                {/* <div className="pass-link">
                  <a href="#">Forgot password?</a>
                </div> */}
                <div className="field btn">
                  <div className="btn-layer" />
                  <input type="submit" defaultValue="Login" />
                </div>
                <div className="signup-link">
                  Not a member? <a>Signup now</a>
                </div>
              </form>
              <form className="signup" onSubmit={onRegisterSubmit}>
                <div className="field">
                  <input
                    value={registrationValues.firstName || ""}
                    type="text"
                    placeholder="First Name"
                    required
                    onChange={(e) => {
                      onChangeValue(false, "firstName", e.target.value);
                    }}
                  />
                </div>
                <div className="field">
                  <input
                    value={registrationValues.lastName || ""}
                    type="text"
                    placeholder="Last Name"
                    required
                    onChange={(e) => {
                      onChangeValue(false, "lastName", e.target.value);
                    }}
                  />
                </div>
                <div className="field">
                  <input
                    value={registrationValues.email || ""}
                    type="email"
                    placeholder="Email Address"
                    required
                    onChange={(e) => {
                      onChangeValue(false, "email", e.target.value);
                    }}
                  />
                </div>
                <div className="field">
                  <input
                    value={registrationValues.password || ""}
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(e) => {
                      onChangeValue(false, "password", e.target.value);
                    }}
                  />
                </div>
                {/* <div className="field">
                  <input
                    type="password"
                    placeholder="Confirm password"
                    required
                  />
                </div> */}
                <div className="field btn">
                  <div className="btn-layer" />
                  <input type="submit" defaultValue="Signup" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SignInModal;
