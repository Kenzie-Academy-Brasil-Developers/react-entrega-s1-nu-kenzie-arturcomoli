import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TotalMoney from "./components/TotalMoney";
import List from "./components/List";
import InitialPage from "./components/InitialPage";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [listaFiltrada, setListaFiltrada] = useState([]);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const deletar = (itemDeletar) => {
    const encontrar = listTransactions.find((item) => {
      return item.maxId === itemDeletar;
    });
    const indice = listTransactions.indexOf(encontrar);
    const arr = [...listTransactions];
    arr.splice(indice, 1);
    setListTransactions(arr);
  };

  // const filtrarTodos = () => {
  //   setListaFiltrada(listTransactions);
  // };

  // const filtrar = (tipo) => {
  //   const filtrados = listTransactions.filter((item) => {
  //     return item.tipo === tipo;
  //   });
  //   setListaFiltrada(filtrados);
  // };
  console.log(listTransactions);
  // console.log(listaFiltrada);

  return (
    <div className="App">
      {!isLoggedIn ? (
        <InitialPage handleLogin={handleLogin} />
      ) : (
        <>
          <Header handleLogin={handleLogin} />
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
              // filtrar={filtrar}
              // filtrarTodos={filtrarTodos}
              // listaFiltrada={listaFiltrada}
            />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
