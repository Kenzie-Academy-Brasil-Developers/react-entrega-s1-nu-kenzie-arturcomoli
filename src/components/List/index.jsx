import "./styles.css";
import Button from "../Button";
import Card from "../Card";
const List = ({ listTransactions }) => {
  return (
    <aside>
      <div className="aside-flex">
        <h3>Resumo financeiro</h3>
        <div>
          <Button children={"Todos"} className={"todos"} />
          <Button children={"Entradas"} className={"list-button"} />
          <Button children={"Despesas"} className={"list-button"} />
        </div>
      </div>
      <ul>
        <Card className={"entrada"} />
        <Card className={"despesa"} />
        <Card />
        <Card />
      </ul>
    </aside>
  );
};

export default List;
