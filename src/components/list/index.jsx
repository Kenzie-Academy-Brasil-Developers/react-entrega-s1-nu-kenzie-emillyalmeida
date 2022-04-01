import Card from "../card";

const List = ({ listTransactions }) => {
  return (
    <ul>
      {listTransactions.map((transaction, index) => (
        <Card transaction={transaction} key={index} />
      ))}
    </ul>
  );
};

export default List;
