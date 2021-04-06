import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { createShow } from "../../services/shows";
import { Button, Form } from "react-bootstrap";
import Layout from "../../components/shared/Layout/Layout";
import "./CreateShow.css";

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
      <Form className="createShow-form-container" onSubmit={handleSubmit}>
        <h2>Add your favorite anime series here!</h2>
        <Form.Group>
          <Form.Control
            className="input-title"
            placeholder="Title"
            value={show.title}
            name="title"
            required
            autoFocus
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            className="input-duration"
            placeholder="Duration"
            value={show.duration}
            name="duration"
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            className="input-image-link"
            placeholder="Image Address URL"
            value={show.imgURL}
            name="imgURL"
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            className="textarea-plot"
            // rows={10}
            // type="text-area"
            placeholder="Plot"
            value={show.plot}
            name="plot"
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit" className="submit-button">
          Add
        </Button>
      </Form>
    </Layout>
  );
};

export default CreateShow;
