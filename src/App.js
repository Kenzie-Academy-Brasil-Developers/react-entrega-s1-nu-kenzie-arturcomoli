import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TotalMoney from "./components/TotalMoney";
import List from "./components/List";

function App() {
  const [listTransactions, setListTransactions] = useState([
    {
      descricao: "teste Entrada",
      valor: "2.50",
      tipo: "Entrada",
    },
    {
      descricao: "teste Despesa",
      valor: "2.50",
      tipo: "Despesa",
    },
  ]);
  console.log(listTransactions);

  const deletar = (itemDeletar, tipoDeletar, valorDeletar) => {
    const encontrar = listTransactions.find((item) => {
      console.log(item);
      console.log(itemDeletar);
      console.log(item.descricao);
      console.log(tipoDeletar);
      console.log(item.tipo);
      return (
        item.descricao === itemDeletar &&
        item.tipo === tipoDeletar &&
        item.valor === valorDeletar
      );
    });
    console.log(encontrar);
    const indice = listTransactions.indexOf(encontrar);
    console.log(indice);
    const arr = [...listTransactions];
    console.log(arr);
    arr.splice(indice, 1);
    setListTransactions(arr);
  };
  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <TotalMoney listTransactions={listTransactions} />
        </section>
        <List
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
          deletar={deletar}
        />
      </main>
    </div>
  );
}

export default App;
