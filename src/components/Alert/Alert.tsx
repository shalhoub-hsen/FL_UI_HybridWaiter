import { AlertProps, useAlert } from "./useAlert";
import "bootstrap.min.css";
const Alert: React.FC<AlertProps> = (props) => {
  const { message } = useAlert(props);

  return (
    <div
      id="customAlert"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        className="custom-alert-content"
        style={{
          backgroundColor: "#fff",
          padding: 20,
          borderRadius: 5,
          maxWidth: 400,
          textAlign: "center",
          height: "150px",
          width: "300px",
        }}
      >
        <h2 style={{ color: "red" }}>Warning</h2>
        <p
          style={{
            marginLeft: "0",
            marginTop: "15px",
            fontSize: "1.2em",
          }}
        >
          {message}
        </p>
      </div>
    </div>
  );
};

export default Alert;
