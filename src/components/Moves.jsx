const Moves = (props) => {
  return (
    <div className="moves" onClick={() => props.resetMoves(props.id)}>
      <p>{props.id === 0 ? "Start": `Moves : ${props.id}`}</p>
    </div>
  );
};

export default Moves;
