import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import * as Styled from "./App.styled";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <Styled.Main>
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </Styled.Main>
  );
}

export default App;
