import { useState, useEffect } from "react";
import { RESTAURANT_URL } from "./constant";

const useRestaurantList = () => {
  let [restaurantList, setRestaurantList] = useState([]);
  let [restaurantListCopy, setRestaurantListCopy] = useState([]);

  const updateRestaurantList = (value) => {
    setRestaurantList(value);
  };

  const updateRestaurantListCopy = (value) => {
    setRestaurantListCopy(value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_URL);

    const json = await data.json();
    // console.log(json);
    updateRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    updateRestaurantListCopy(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return {
    restaurantList,
    updateRestaurantList,
    restaurantListCopy,
    updateRestaurantListCopy,
  };
};

export default useRestaurantList;
