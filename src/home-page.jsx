import React, { useState } from "react";
import Game from "./game";
import CountDown from "./counter";

const HomePage = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  const insideItem = clicked ? (
    <>
      <CountDown />
      <Game />
    </>
  ) : (
    <input type="button" value="Play" id="play-button" onClick={handleClick} />
  );

  return (
    <div className="container">
      <h1>Match Colors</h1>
      {insideItem}
    </div>
  );
};

export default HomePage;
