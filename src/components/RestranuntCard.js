import { CDN_URL } from "../utils/constants";

const RestranuntCard = (props) => {
  const { image, name, cuisine, cfo, cft, rating, locality } =
    props.resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="reslogo" src={image.url} />
      <h3>{name}</h3>
      <h3>{cuisine.name}</h3>
      <h3>{cfo.text}</h3>
      <h3>{cft.text}</h3>
      <h3>{rating.aggregate_rating}</h3>
      <p>{locality.address}</p>
    </div>
  );
};

export default RestranuntCard;
