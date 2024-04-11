import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [cuisines, setCuisines] = useState("");
  const [totalRatingsString, setTotalRatingsString] = useState("");
  const [costForTwoMessage, setCostForTwoMessage] = useState("");
  const [itemCards, setItemCards] = useState("");

  useEffect(() => {
    fetchMenu();
    console.log("print ");
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9939369&lng=77.5980282&restaurantId=405798"
    );
    const json = await data.json();
    // console.log(json);
    setRestInfo(json?.data);
  };

  // console.log(restInfo);

  useEffect(() => {
    // console.log("api data is fetched", restInfo);
    if (restInfo != null) {
      const { name, city, cuisines, avgRatingString, costForTwoMessage } =
        restInfo?.cards[2]?.card?.card?.info;
      // console.log(name);
      const { itemCards } =
        restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card
          ?.card?.categories[0];

      setName(name);
      setCity(city);
      setCuisines(cuisines.join(", ")); // Join cuisines array into a string
      setTotalRatingsString(totalRatingsString);
      setCostForTwoMessage(costForTwoMessage);
      setItemCards(itemCards);
      console.log(itemCards);
      console.log(itemCards[0].card.info.name);
    }
  }, [restInfo]);

  if (restInfo === null) {
    return <Shimmer />;
  }

  // const { name } = restInfo?.cards[2]?.card?.card?.info;
  // console.log(name);
  // const { itemCards } =
  //   restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.categories[0];

  return (
    <div>
      <h2>{name}</h2>
      <p>{city}</p>
      <p>
        {costForTwoMessage}- {totalRatingsString}
      </p>
      <p>{cuisines}</p>
      <ul>
        <p>Menu</p>
        <ul>
          {/* {itemCards.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name}- {"Rs."} {item?.card?.info?.price / 100}
            </li>
          ))} */}
        </ul>

        <li>{itemCards[0]?.card?.info?.name}</li>
        <li>{itemCards[1]?.card?.info?.name}</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
