import { useState } from "react";

const EventHandling = () => {
  let c = 0;

  const [count, setcount] = useState(0);

  const handleClick = () => {
    console.log("button was clicked");
    c++;
    setcount(count + 1);
    console.log(c);
  };
  const resetCount = () => {
    setcount(0);
  };

  return (
    <div className="container">
      <h1>Event Handling</h1>
      <hr />
      <h2>{c} </h2>
      <h2>{count}</h2>
      <button className="btn btn-primary" onClick={handleClick}>
        Click
      </button>
      <button className="btn btn-danger" onClick={resetCount}>
        Reset
      </button>
    </div>
  );
};

export default EventHandling;
