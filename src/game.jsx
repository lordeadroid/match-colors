import * as data from './cell-data.json';

const Cell = ({ id, color, status }) => {
  return <div className="cell" style={{ backgroundColor: { color } }}></div>;
};

const Cells = ({ cellDetails }) => {
  const cells = cellDetails.map((cellDetail, index) => {
    return <Cell key={index} cellDetail={cellDetail} />;
  });

  return <div className="cells">{cells}</div>;
};

const Game = () => {
  const cellDetails = data.default;
  return <Cells cellDetails={cellDetails} />;
};

export default Game;
