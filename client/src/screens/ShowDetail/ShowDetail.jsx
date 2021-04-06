import { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { getShow, deleteShow } from "../../services/shows";
import { useParams, Link, useHistory } from "react-router-dom";
import {
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";
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

          <div className="card mb-3">
            <div className="img-top">
            <img className="card-img-top" src={show.imgURL} alt={show.title} />
            </div>
            <MDBCardBody cascade className="text-center">
        <MDBCardTitle>{show.title}</MDBCardTitle>
        <h5 className="indigo-text">
          <strong>({`${show.duration}`})</strong>
        </h5>
        <MDBCardText>{show.plot}</MDBCardText>
      </MDBCardBody>


            {/* <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
              </p>
              <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div> */}
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
      </Layout>
    </div>
  );
}

export default ShowDetail;

  /* <MDBRow>
  <MDBCol style={{ maxWidth: "40rem" }}>
    <MDBCard reverse>
      <MDBCardImage
        // cascade
        // style={{ height: '20rem' }}
        src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
        // alt={show.title}
      />
      <MDBCardBody cascade className="text-center">
        <MDBCardTitle>{show.title}</MDBCardTitle>
        <h5 className="indigo-text">
          <strong>({`${show.duration}`})</strong>
        </h5>
        <MDBCardText>{show.plot}</MDBCardText>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
</MDBRow> */
