import { useEffect, useState } from 'react';
import * as data from './cell-data.json';

const colors = {
  done: 'gray',
  closed: 'black',
};

const findBGColor = (color, status) =>
  status === 'clicked' ? color : colors[status];

const Cell = ({ cellDetail: { color, status }, handleClick, index }) => {
  const backgroundColor = findBGColor(color, status);
  return (
    <div
      className={`cell`}
      style={{ backgroundColor }}
      onClick={() => handleClick(index, color)}
    ></div>
  );
};

const Cells = ({ cellDetails, handleClick }) => {
  const cells = cellDetails.map((cellDetail, index) => {
    return (
      <Cell
        key={index}
        cellDetail={cellDetail}
        index={index}
        handleClick={handleClick}
      />
    );
  });

  return <div className="cells">{cells}</div>;
};

const Game = () => {
  const cellData = data.default.sort(() => Math.random() - 0.5);

  const [cellDetails, setCellDetails] = useState(cellData);
  const [click, setClicks] = useState([]);

  useEffect(() => {
    const newCellData = cellDetails.map((cellDetail) => {
      cellDetail.status = 'closed';
      return cellDetail;
    });
    setTimeout(() => {
      setCellDetails(newCellData);
    }, 3000);
  }, []);

  const markdone = (first, second) => {
    setTimeout(() => {
      cellDetails[first.index].status = 'done';
      cellDetails[second.index].status = 'done';
      setCellDetails([...cellDetails]);
      setClicks([]);
    }, 500);
  };

  const reset = (first, second) => {
    setTimeout(() => {
      cellDetails[first.index].status = 'closed';
      cellDetails[second.index].status = 'closed';
      setCellDetails([...cellDetails]);
      setClicks([]);
    }, 500);
  };

  const check = () => {
    if (click[0].color === click[1].color) return markdone(click[0], click[1]);
    reset(click[0], click[1]);
  };

  const handleClick = (index, color) => {
    cellDetails[index].status = 'clicked';
    setCellDetails([...cellDetails]);
    click.push({ color, index });
    setClicks([...click]);
    if (click.length === 2) return check();
  };

  return <Cells cellDetails={cellDetails} handleClick={handleClick} />;
};

export default Game;
