import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_IMG_URL, MENU_IMG_URL } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";

import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards, categories } =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  let JSXContent;

  if (
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card[
      "itemCards"
    ] !== undefined
  ) {
    JSXContent = (
      <div className="restaurant-menu">
        <div className="menupage-resdetails">
          <img src={RESTAURANT_IMG_URL + cloudinaryImageId}></img>

          <div className="menupage-resdetails-content">
            <h2>{name}</h2>
            <p>
              {cuisines.join(", ")}- {costForTwoMessage}
            </p>
          </div>
        </div>

        <div className="menu-heading">
          <h2>Recomennded - {itemCards.length} Items</h2>
        </div>
        {itemCards?.map((item) => (
          <div key={item.card.info.id} className="menu-container">
            <div className="menu-list">
              <h3>{item.card.info.name}</h3>
              <h4>
                Rs.
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </h4>
              <p>{item.card.info.description}</p>
            </div>
            <div className="menu-img">
              <img src={MENU_IMG_URL + item.card.info.imageId}></img>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    const { itemCards } =
      resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .categories[0];
    JSXContent = (
      <div className="restaurant-menu">
        <div className="menupage-resdetails">
          <img src={RESTAURANT_IMG_URL + cloudinaryImageId}></img>

          <div className="menupage-resdetails-content">
            <h2>{name}</h2>
            <p>
              {cuisines.join(", ")}- {costForTwoMessage}
            </p>
          </div>
        </div>

        <div className="menu-heading">
          <h2>Recomennded - {itemCards.length} Items</h2>
        </div>
        {itemCards?.map((item) => (
          <div key={item.card.info.id} className="menu-container">
            <div className="menu-list">
              <h3>{item.card.info.name}</h3>
              <h4>
                Rs.
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </h4>
              <p>{item.card.info.description}</p>
            </div>
            <div className="menu-img">
              <img src={MENU_IMG_URL + item.card.info.imageId}></img>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return JSXContent;
};

export default RestaurantMenu;
