import RestCard from "./RestCard";
// import { restobj } from "../utils/constants"; //no longer needed
import { useEffect, useState } from "react"; //import like named import
import Shimmer from "./Shimmer";

const Body = () => {
  //state variable - powerful variable using Hooks - useState
  // const [restList, setRestList] = useState(restobj); //restObj is the dummy data = restList  BUT no longer needed since we are getting API from swiggy.
  const [restList, setRestList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  // console.log("body is rendered each time we press a letter in search box");
  //restobj == restList
  // post filtering, setRestList = restobj(filtered data)

  //we are calling a useEffect Hookas useEffect(); -> function with two arguments -> call back function and a dependency array.
  // this will be called only when the body finishes it's render cycle. here: body will be displayed and then this useEffect callback function will be called.
  useEffect(() => {
    // console.log("I am a callback function for useEffect");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9939369&lng=77.5980282&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);
    setRestList(
      //Optional Chaining
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //conditional rendering
  // if (restList.length === 0) {
  //   return <Shimmer />;
  // }

  // using ternary operator
  return restList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              // console.log(searchText);  //Whenever we try to change a local state variable, react re-renders the component.
              //magic !!
            }}
          ></input>

          <button
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = restList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // setRestList(filteredRestaurant); // NOT correct way to filter out because all the data that we fetched from API get updated with lesser cards as per our first search.
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            // console.log("button clicked");
            // restobj = restobj.filter((restItem) => restItem.info.avgRating > 5); //not a good way
            const filteredList = restList.filter(
              (res) => res.info.avgRating > 4.6
            );
            setRestList(filteredList);
          }}
        >
          Filter by Top Rated Restaurants.
          {/* check with restaurant instead of restItem */}
        </button>
      </div>
      <div className="rest-container">
        {/* /* {restList.map((restaurant) => ( */}
        {/* // will be rendering the filtered data in the component} */}
        {filteredRestaurant.map((restaurant) => (
          <RestCard key={restaurant.info.id} restinfo={restaurant} />
        ))}

        {/* map function returning a JSX  
          key: to uniquely identify a new restaurant card and avoid re-rendering. react can will identify which is the new card using the IDs*/}
      </div>
    </div>
  );
};

export default Body;
