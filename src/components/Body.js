import RestCard from "./RestCard";
import { restobj } from "../utils/constants";
import { useState } from "react"; //import like named import

const Body = () => {
  //state variable - powerful variable using Hooks - useState
  const [restList, setRestList] = useState(restobj);
  //restobj == restList
  // post filtering, setRestList = restobj(filtered data)
  return (
    <div className="body">
      <div className="imp">
        <button
          className="filter-btn"
          onClick={() => {
            // console.log("button clicked");
            // restobj = restobj.filter((restItem) => restItem.info.avgRating > 5); //not a good way
            const filteredList = restList.filter(
              (restItem) => restItem.info.avgRating > 4.6
            );
            setRestList(filteredList);
          }}
        >
          Filter by Top Rated Restaurants.
          {/* check with restaurant instead of restItem */}
        </button>
      </div>
      <div className="rest-container">
        {restList.map((restaurant) => (
          <RestCard key={restaurant.info.id} restinfo={restaurant} />
        ))}
        {/* map function returning a JSX  
          key: to uniquely identify a new restaurant card and avoid rendering. react can will which is the new card using the IDs*/}
      </div>
    </div>
  );
};

export default Body;
