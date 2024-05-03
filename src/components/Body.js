import ResCards from "./ResCards";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
import Scroll from "./Scroll";

const Body = () => {
  const {
    restaurantList,
    restaurantListCopy,
    updateRestaurantList,
    updateRestaurantListCopy,
  } = useRestaurantList();

  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Look like you are offline</h1>;

  if (restaurantList?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <Scroll />;
      <div className="filter-container">
        <input
          type="text"
          className="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            console.log(restaurantList);
            const filteredList = restaurantListCopy?.filter((r) =>
              r.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            console.log(filteredList);

            updateRestaurantList(
              filteredList.length === 0 ? restaurantListCopy : filteredList
            );
          }}
        >
          Search
        </button>
        <button
          className="top-rated"
          onClick={() => {
            setSearchText("");

            const filteredList = restaurantListCopy?.filter(
              (r) => r.info.avgRating > 4.5
            );
            updateRestaurantList(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div>
        <h2 className="container-heading">
          Restaurants with online food delivery
        </h2>
      </div>
      <div className="res-container">
        {restaurantList?.map((r) => (
          <Link
            className="rescard-link"
            key={r.info.id}
            to={"/restaurants/" + r.info.id}
          >
            <ResCards restau={r} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
