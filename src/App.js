import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TotalMoney from "./components/TotalMoney";
import List from "./components/List";
import Card from "./components/Card";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <Form />
          <TotalMoney />
        </section>
        <List />
      </main>
    </div>
  );
}

export default App;
