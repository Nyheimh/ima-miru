import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { createShow } from "../../services/shows";
import { Button, Form } from "react-bootstrap";
import Layout from "../../components/shared/Layout/Layout";
import "./CreateShow.css";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";

const CreateShow = ({ user }) => {
  const [show, setShow] = useState({
    title: "",
    plot: "",
    imgURL: "",
    duration: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setShow({
      ...show,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createShow(show);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/shows`} />;
  }
  return (
    <Layout user={user}>
      <Form className="create-show-form-container" onSubmit={handleSubmit}>
        <h2 className="add-series">Add your favorite anime series here!</h2>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Title"
          value={show.title}
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Duration"
          value={show.duration}
          name="duration"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Image URL"
          value={show.imgURL}
          name="imgURL"
          required
          onChange={handleChange}
        />
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
          // rows={10}
          type="text-area"
          placeholder="Plot Summary"
          value={show.plot}
          name="plot"
          required
          onChange={handleChange}
        />
        <Button type="submit" id="add-button">
          Add
        </Button>
      </Form>
    </Layout>
  );
};

export default CreateShow;
