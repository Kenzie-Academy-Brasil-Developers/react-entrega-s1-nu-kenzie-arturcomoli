import "./styles.css";
import Button from "../Button";
import Card from "../Card";
import Vazio from "./Vazio.png";
// import { useState } from "react";
const List = ({
  listTransactions,
  setListTransactions,
  deletar,
  filtrar,
  filtrarTodos,
}) => {
  return (
    <aside>
      <div className="aside-flex">
        <h3>Resumo financeiro</h3>
        <div>
          <Button
            children={"Todos"}
            className={"list-button"}
            onClick={() => filtrarTodos}
          />
          <Button
            children={"Entradas"}
            className={"list-button"}
            onClick={() => filtrar("Entrada")}
          />
          <Button
            children={"Despesas"}
            className={"list-button"}
            onClick={() => filtrar("Despesa")}
          />
        </div>
      </div>
      <ul>
        {listTransactions.length === 0 ? (
          <div className="vazio">
            <p>Não existem lançamentos ainda!!</p>
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
              itemDeletar={transaction.maxId}
            />
          ))
        )}
      </ul>
    </aside>
  );
};

export default List;
