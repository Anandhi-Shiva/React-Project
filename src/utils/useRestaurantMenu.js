import { RESTAURANT_MENU_URL1, RESTAURANT_MENU_URL2 } from "../utils/constant";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      RESTAURANT_MENU_URL1 + resId + RESTAURANT_MENU_URL2
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json?.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
