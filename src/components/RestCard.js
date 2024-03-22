import { IMG_URL } from "../utils/constants";

const styles = {
  backgroundColor: "#f0f0f0",
  margin: "15px",
};

const RestCard = (props) => {
  const { restinfo } = props;
  const { name, cuisines, costForTwo, avgRatingString, cloudinaryImageId } =
    restinfo?.info;
  // optional chaining

  return (
    <div className="rest-card" style={styles}>
      <img
        className="rest-img"
        alt="rest-image"
        src={IMG_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")} </h5>
      <p>{costForTwo}</p>
      <p>{avgRatingString}</p>
    </div>
  );
};

export default RestCard;
