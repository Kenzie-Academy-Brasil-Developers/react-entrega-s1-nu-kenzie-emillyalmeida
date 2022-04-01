const Card = (transaction, index) => {
  const { descrição, tipo, valor } = transaction;
  return (
    <li key={index}>
      <div>
        <h3>{descrição}</h3>
        <span>{tipo}</span>
      </div>
      <span>{valor}</span>
      <button id={index}>
        <img src="../../public/img/trash.svg" alt="trash" />
      </button>
    </li>
  );
};

export default Card;
