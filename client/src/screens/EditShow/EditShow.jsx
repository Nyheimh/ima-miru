import React, { useState, useEffect } from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import { getShow, updateShow } from "../../services/shows";
import Layout from "../../components/shared/Layout/Layout";
import { Button, Form } from "react-bootstrap";
import "./EditShow.css";
import "../ShowDetail/ShowDetail.css";

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
      <Form className="show-detail" onSubmit={handleSubmit}>
        <div className="image-container">
          <img className="current-image" src={show.imgURL} alt={show.title} />
            <input
              className="image-input"
              value={show.imgURL}
              name="imgURL"
              required
              onChange={handleChange}
            />
          {/* </label> */}
        </div>

        <div className="detail">
          <div className="title-duration">
            <div className="title">
              <input
                className="title-input"
                value={show.title}
                name="title"
                required
                autoFocus
                onChange={handleChange}
              />
            </div>
            <div className="duration">
              <input
                className="duration-input"
                value={show.duration}
                name="duration"
                required
                onChange={handleChange}
              />
            </div>
            <div className="plot">
              <textarea
                className="plot-input"
                rows="6"
                type="text"
                value={show.plot}
                name="plot"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="button-container">
            <Button id="submit-button" type="submit" className="submit-button">
              Submit Changes
            </Button>
            <Link to={`/shows/${show._id}`}>
              <Button
                id="cancel-button"
                type="submit"
                className="submit-button"
              >
                Cancel
              </Button>
            </Link>
          </div>
        </div>
      </Form>
    </Layout>
  );
};

export default EditShow;
