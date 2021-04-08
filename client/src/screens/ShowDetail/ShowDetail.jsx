import { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { getShow, deleteShow } from "../../services/shows";
import { useParams, Link, useHistory } from "react-router-dom";
import "./ShowDetail.css";

function ShowDetail({ user }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [show, setShow] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchShow = async () => {
      const anime = await getShow(id);
      setShow(anime);
      setIsLoaded(true);
    };
    fetchShow();
  }, [id]);

  const handleDelete = (e) => {
    e.preventDefault();
    deleteShow(show._id);
    history.push("/shows");
  };

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Layout user={user}>
        <div className="show-detail">
        
            <img className="anime-image" src={show.imgURL} alt={show.title} />
          <div className="detail">
            <div className="block">

            <div className="title-duration">
            <div className="title">{show.title}</div>
            <div className="duration">
              <strong>({`${show.duration}`})</strong>
            <div className="plot">{show.plot}</div>
            </div>
            </div>
            </div>
        <div className="button-container">
          <button className="edit-button">
            <Link className="edit-link" to={`/shows/${show._id}/edit`}>
              Edit
            </Link>
          </button>
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
          </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default ShowDetail;
