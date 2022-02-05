import "./styles.css";
const TotalMoney = ({ listTransactions }) => {
  const total = listTransactions.reduce((acc, actual) => {
    return acc + Number(actual.valor);
  }, 0);

  const mostrar = total.toFixed(2).replace(".", ",");
  return (
    <div className="total">
      <span>Valor total:</span>
      <span>R$ {mostrar}</span>
    </div>
  );
};

export default TotalMoney;
