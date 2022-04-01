const Card = ({ transaction }) => {
  const { descrição, tipo, valor } = transaction;
  return (
    <li>
      <div>
        <h3>{descrição}</h3>
        <span>{tipo}</span>
      </div>
      <span>{valor}</span>
      <button id={descrição}>
        <img src="../../public/img/trash.svg" alt="trash" />
      </button>
    </li>
  );
};

export default Card;
