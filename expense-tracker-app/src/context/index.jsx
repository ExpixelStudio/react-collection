import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [formData, setFormData] = useState({
    type: "income",
    amount: 0,
    description: "",
  }); // Define some initial state

  const [value, setValue] = useState("expense");
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [allTransactions, setAllTransactions] = useState([]);

  function handleFormSubmit(currentFormData) {
    console.log(currentFormData);
    
    if(!currentFormData.description || !currentFormData.amount) return;

    setAllTransactions([...allTransactions, {...currentFormData, id : Date.now()}])
    
  }

  console.log(allTransactions);
  
  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        totalExpense,
        setTotalExpense,
        totalIncome,
        setTotalIncome,
        value,
        setValue,
        allTransactions,
        setAllTransactions,
        handleFormSubmit
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
