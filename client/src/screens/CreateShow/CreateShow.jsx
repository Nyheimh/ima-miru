import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { createShow } from "../../services/shows";
import { Button, Form } from "react-bootstrap";
import Layout from "../../components/shared/Layout/Layout";
import "./CreateShow.css";

const CreateShow = (props) => {
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
    // For whatever reason I can not type in my input field anymore...
    <Layout user={props.user}>
      <Form className="addSeriesform-container" onSubmit={handleSubmit}>
        <h2 className="addSeries-form-title">Add Series</h2>
        <Form.Group>
          <Form.Label className="addSeries-form-label">Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            value={show.title}
            required
            autoFocus
            onChange={handleChange}
            id="form-control"

          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="addSeries-form-label">Duration</Form.Label>
          <Form.Control
            type="text"
            placeholder="Duration"
            value={show.duration}
            required
            autoFocus
            onChange={handleChange}
            id="form-control"

          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="addSeries-form-label">Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="URL address"
            value={show.imgURL}
            required
            autoFocus
            onChange={handleChange}
            id="form-control"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="addSeries-form-label">Plot Summary</Form.Label>
          <textarea
            type="text"
            placeholder="Plot (2-4 sentences)"
            value={show.plot}
            rows= "6"
            required
            autoFocus
            onChange={handleChange}
            className="form-control"
            id="form-control"
          />
        </Form.Group>
        <Button type="submit" id="add-button">
          Add
        </Button>
      </Form>
    </Layout>
  );
};

export default CreateShow;
