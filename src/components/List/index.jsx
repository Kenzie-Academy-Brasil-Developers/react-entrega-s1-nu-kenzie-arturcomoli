import "./styles.css";
import Button from "../Button";
import Card from "../Card";
import Vazio from "./Vazio.png";
const List = ({ listTransactions, setListTransactions, deletar }) => {
  return (
    <aside>
      <div className="aside-flex">
        <h3>Resumo financeiro</h3>
        <div>
          <Button children={"Todos"} className={"list-button"} />
          <Button children={"Entradas"} className={"list-button"} />
          <Button children={"Despesas"} className={"list-button"} />
        </div>
      </div>
      <ul>
        {listTransactions.length === 0 ? (
          <div>
            <img src={Vazio} alt="#" />

            <img src={Vazio} alt="#" />
            <img src={Vazio} alt="#" />
          </div>
        ) : (
          listTransactions.map((transaction, index) => (
            // Card recebe: { className, descricao, tipo, valor }
            <Card
              key={index}
              className={transaction.tipo}
              descricao={transaction.descricao}
              tipo={transaction.tipo}
              valor={Number(transaction.valor).toFixed(2).replace(".", ",")}
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
              deletar={deletar}
              itemDeletar={transaction.descricao}
              tipoDeletar={transaction.tipo}
              valorDeletar={transaction.valor}
            />
          ))
        )}
      </ul>
    </aside>
  );
};

export default List;
