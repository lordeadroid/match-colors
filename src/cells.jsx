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

export default Cells;
