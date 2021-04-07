import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getShow, updateShow } from "../../services/shows";
import Layout from "../../components/shared/Layout/Layout";
import { Button, Form } from "react-bootstrap";

const EditShow = (props) => {
  const [show, setShow] = useState({
    title: "",
    plot: "",
    imgURL: "",
    duration: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchShow = async () => {
      const show = await getShow(id);
      setShow(show);
    };
    fetchShow();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setShow({
      ...show,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await updateShow(id, show);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/shows/${id}`} />;
  }
  return (
    <Layout user={props.user}>
      <Form className="editShow-form-container" onSubmit={handleSubmit}>
        <img className="edit-show-image" src={show.imgURL} alt={show.title} />
        <Form.Group>
          <Form.Label>Title:</Form.Label>
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
          <Form.Label>Duration:</Form.Label>
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
          <Form.Label>Image URL:</Form.Label>
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
          <Form.Label>Plot Summary:</Form.Label>
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
          Submit
        </Button>
      </Form>
    </Layout>
  );
};

export default EditShow;

