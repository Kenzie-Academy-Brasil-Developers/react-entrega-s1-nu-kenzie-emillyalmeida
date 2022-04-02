import Card from "../card";

const List = ({ listTransactions, remove }) => {
  return (
    <ul>
      {listTransactions.map((transaction, index) => (
        <Card transaction={transaction} remover={remove} key={index} />
      ))}
    </ul>
  );
};

export default List;
