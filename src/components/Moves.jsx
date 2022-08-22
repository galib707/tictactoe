const Moves = (props) => {
  return (
    <div className="moves" onClick={() => props.resetMoves(props.id)}>
      <p>
        {props.id === 0
          ? "Start"
          : props.id % 2 === 0
          ? "player 2"
          : "player 1"}
      </p>
    </div>
  );
};

export default Moves;
