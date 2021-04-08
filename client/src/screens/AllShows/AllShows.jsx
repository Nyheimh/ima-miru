import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import Show from "../../components/Show/Show";
import { useState, useEffect } from "react";
import { getShows } from "../../services/shows";
import "./AllShows.css";

const AllShows = ({ user }) => {
  const [search, setSearch] = useState("");
  const [queriedShows, setQueriedShows] = useState([]);
  //   const [sortType, setSortType] = useState([])

  useEffect(() => {
    const fetchShows = async () => {
      const shows = await getShows();
      setQueriedShows(shows);
    };
    fetchShows();
  }, []);
  //Filter //

  // 1) First create a new const and filter through allshows/OR queried shows since they both take our axios call (show)//
  //2) Make sure you have a .includes() with the vlue of your input search you use..
  const filteredImages = queriedShows.filter((val2) => {
    return val2.title.toLowerCase().includes(search.toLowerCase());
  });
  //3 make your above filter map all the images and then when you type in the field it filters the images//
  const showJSX = filteredImages.map((show, index) => (
    <Show _id={show._id} title={show.title} imgURL={show.imgURL} key={index} />
  ));

  return (
    <div>
      <Layout user={user}>
        <label id="search">
        Search for a show: {" "}
        <input
        className="search-input"
          type="text"
          placeholder="Anime title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
          </label>
        <div className="shows">{showJSX}</div>
      </Layout>
    </div>
  );
};

  

//     return (
//         <div>  
//             <Layout user = {user}>
          
//                 <input id="search" type="text" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)} />
          
//           <div className="shows">
            
//               {showJSX}
             
//                 </div>
//             </Layout>
//         </div>
//     )
// }

export default AllShows
