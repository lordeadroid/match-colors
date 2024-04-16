import { useState } from "react";
import Game from "./game";

const HomePage = () => {
  const [clicked, setClicked] = useState(false);

  const contentToDisplay = clicked ? (
    <Game />
  ) : (
    <input
      type="button"
      value="Play"
      id="play-button"
      onClick={() => {
        setClicked(true);
      }}
    />
  );

  return (
    <div className="container">
      <h1>Match Colors</h1>
      {contentToDisplay}
    </div>
  );
};

export default HomePage;
