import { RESTAURANT_IMG_URL } from "../utils/constant";

const ResCards = ({ restau }) => {
  const { name, avgRating, cuisines, cloudinaryImageId, sla, costForTwo } =
    restau?.info;

  return (
    <div className="res-cards">
      <div className="img-container">
        <img
          className="res-img"
          src={RESTAURANT_IMG_URL + cloudinaryImageId}
        ></img>
      </div>
      <div className="resdetails-container">
        <h3 className="res-name">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo} </h4>
        <h4>{sla.slaString} </h4>
      </div>
    </div>
  );
};

export default ResCards;
