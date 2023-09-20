import { useEffect, useState } from 'react';
import * as data from './cell-data.json';
import Cells from './cells';
import CountDown from './counter';

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

  const update = (first, second, status) => {
    setTimeout(() => {
      cellDetails[first.index].status = status;
      cellDetails[second.index].status = status;
      setCellDetails([...cellDetails]);
      setClicks([]);
    }, 500);
  };

  const check = () => {
    const status = click[0].color === click[1].color ? 'done' : 'closed';
    update(click[0], click[1], status);
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
