import { useState } from "react";
import Game from "./Game";

const HomePage = () => {
  const [clicked, setClicked] = useState(false);

  const contentToDisplay = clicked ? (
    <Game />
  ) : (
    <div
      className="start-button center"
      onClick={() => {
        setClicked(true);
      }}
    >
      Start
    </div>
  );

  return (
    <>
      <div className="heading">Match Colors</div>
      {contentToDisplay}
    </>
  );
};

export default HomePage;
