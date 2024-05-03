const Shimmer = () => {
  return (
    <div>
      <div>
        <h2 className="container-heading">What's on your Mind</h2>
      </div>
      <div className="shimmer-scroll-container">
        <div className="shimmer-img"></div>
        <div className="shimmer-img"></div>
        <div className="shimmer-img"></div>
        <div className="shimmer-img"></div>
        <div className="shimmer-img"></div>
        <div className="shimmer-img"></div>
      </div>

      <div className="filter-container">
        <input type="text" className="search"></input>
        <button>Search</button>
        <button className="top-rated">Top Rated Restaurants</button>
      </div>

      <div>
        <h2 className="container-heading">
          Restaurants with Online Food Delivery
        </h2>
      </div>

      <div className="shimmer-container">
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
      </div>
    </div>
  );
};

export default Shimmer;
