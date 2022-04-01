const Card = (transaction, index) => {
  const { descrição, tipo, valor } = transaction;
  return (
    <li key={index}>
      <div>
        <h3>{descrição}</h3>
        <span>{tipo}</span>
      </div>
      <span>{valor}</span>
      <button></button>
    </li>
  );
};

export default Card;
