import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { signUp, signIn } from "../../services/users";
import Layout from "../../components/shared/Layout/Layout";
import { Form, Button } from "react-bootstrap";
import "./SignUp.css";

const SignUp = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const onSignUp = (event) => {
    event.preventDefault();
    const { setUser } = props;

    signUp(form)
      .then(() => signIn(form))
      .then((user) => setUser(user))
      .then(() => history.push("/"))
      .catch((error) => {
        console.error(error);
        setForm({
          email: "",
          password: "",
          passwordConfirmation: "",
          isError: true,
          errorMsg: "Sign Up Details Invalid",
        });
      });
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button type="submit">Sign Up</button>;
    }
  };

  const { email, username, password, passwordConfirmation } = form;

  return (
    <Layout>
      <Form className="signUp-form-container" onSubmit={onSignUp}>
        <h2>Create your account below!</h2>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type="text"
            name="username"
            value={username}
            placeholder="Enter username"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            required
            name="passwordConfirmation"
            value={passwordConfirmation}
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </Layout>
  );
};

export default SignUp;

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImlybXoiLCJlbWFpbCI6ImlybXpAZ21haWwuY29tIiwiaWF0IjoxNjE3NjM1MjE0fQ.dFcRIKD4hx0eGOHtdjIgItxcHXtsI1ZprN--9q0sB5E
// <div className="form-container">
// <h3>Sign Up</h3>
// <form onSubmit={onSignUp}>
//   <label>Username</label>
//   <input
//     required
//     type="text"
//     name="username"
//     value={username}
//     placeholder="Enter username"
//     onChange={handleChange}
//   />
//   <label>Email address</label>
//   <input
//     required
//     type="email"
//     name="email"
//     value={email}
//     placeholder="Enter email"
//     onChange={handleChange}
//   />
//   <label>Password</label>
//   <input
//     required
//     name="password"
//     value={password}
//     type="password"
//     placeholder="Password"
//     onChange={handleChange}
//   />
//   <label>Password Confirmation</label>
//   <input
//     required
//     name="passwordConfirmation"
//     value={passwordConfirmation}
//     type="password"
//     placeholder="Confirm Password"
//     onChange={handleChange}
//   />
//   {renderError()}
// </form>
// </div>
