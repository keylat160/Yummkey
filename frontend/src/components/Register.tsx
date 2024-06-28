import { FormEvent, useState, useContext } from "react";
import type { ModalProps } from "../types";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { UserContext } from "../context/UserContext";

const Register = (props: ModalProps) => {
  const userContext = useContext(UserContext);
   if(!userContext) {
    throw new Error("Register must be used within a UserContext.provider");
   }

   const [, setUserData] = userContext;
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [showError, setShowError] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e?.preventDefault();
    try {
      setShowError(false);
      console.log(userInfo)
      const { data } = await axios.post("/api/users/register", userInfo);
      setUserData(data)
      props.onHide();
    } catch (error) {
      console.error(error);
      setShowError(true);
    }
  };

  return (
    <Modal
      {...props}
      // size="lg"
      aria-labelledby="register-modal-title"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="register-modal-title">Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="form-label" htmlFor="reg-name">
              Name
            </label>
            <input
              className="form-control"
              id="reg-first-name"
              name="firstName"
              type="text"
              value={userInfo.firstName}
              onChange={(e) =>
                setUserInfo({ ...userInfo, firstName: e.target.value })
              }
              required
            />
          </div>
          <div className="mt-3">
            <label className="form-label" htmlFor="reg-last-name">
              Last Name
            </label>
            <input
              className="form-control"
              id="reg-last-name"
              name="lastName"
              type="text"
              value={userInfo.lastName}
              onChange={(e) =>
                setUserInfo({ ...userInfo, lastName: e.target.value })
              }
              required
            />
          </div>
          <div className="mt-3">
            <label className="form-label" htmlFor="reg-email">
              Email
            </label>
            <input
              className="form-control"
              id="reg-email"
              name="email"
              type="email"
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
              required
            />
          </div>
          <div className="mt-3">
            <label className="form-label" htmlFor="reg-password">
              Password
            </label>
            <input
              className="form-control"
              id="reg-password"
              name="password"
              type="password"
              value={userInfo.password}
              onChange={(e) =>
                setUserInfo({ ...userInfo, password: e.target.value })
              }
              required
            />
          </div>
          {showError && <div className="mt-3 text-danger">User already exists!</div>}
          <button className="btn btn-primary mt-3">Register</button>
        </form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default Register;