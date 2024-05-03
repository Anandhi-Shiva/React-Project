import {
  SCROLL_URL1,
  SCROLL_URL10,
  SCROLL_URL2,
  SCROLL_URL3,
  SCROLL_URL4,
  SCROLL_URL5,
  SCROLL_URL6,
  SCROLL_URL7,
  SCROLL_URL8,
  SCROLL_URL9,
} from "../utils/constant";

const Scroll = () => {
  return (
    <div>
      <div>
        <h2 className="container-heading">What's on your mind?</h2>
      </div>
      <div className="scroll-container">
        <img className="scroll-img" src={SCROLL_URL1}></img>
        <img className="scroll-img" src={SCROLL_URL2}></img>
        <img className="scroll-img" src={SCROLL_URL3}></img>
        <img className="scroll-img" src={SCROLL_URL4}></img>
        <img className="scroll-img" src={SCROLL_URL5}></img>
        <img className="scroll-img" src={SCROLL_URL6}></img>
        <img className="scroll-img" src={SCROLL_URL7}></img>
        <img className="scroll-img" src={SCROLL_URL8}></img>
        <img className="scroll-img" src={SCROLL_URL9}></img>
        <img className="scroll-img" src={SCROLL_URL10}></img>
      </div>
    </div>
  );
};

export default Scroll;
