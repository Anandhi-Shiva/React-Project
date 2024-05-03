import { useState, useEffect } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  useEffect(() => {
    console.log("UseEffect");
  }, []);

  return (
    <div className="user-card">
      <h2>Name: Anandhi</h2>
      <h3>Location: Erode</h3>
      <h4>Contact: anandhi@gmail.com</h4>
    </div>
  );
};

export default User;
