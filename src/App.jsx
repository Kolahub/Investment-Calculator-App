import { useState } from "react";
import Header from "./components/Header.jsx";
import UserForm from "./components/UserForm.jsx";
import Results from "./components/Results.jsx";
import { calculateInvestmentResults } from "./util/investment.js";

function App() {
  const [values, setValues] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  function handleChangeValue(e) {
    const { name, value } = e.target;
    setValues((prevValue) => {
      const updatedValue = {
        ...prevValue,
        [name]: value === "" ? "" : Number(value),
      };
      console.log(updatedValue);
      return updatedValue;
    });
  }
  let errMsg = ''
  if (values.duration < 1 && values.duration !== '') {
    errMsg = <p className="center">Invalid input data provided.</p>
  }

  let results = calculateInvestmentResults(values);

  return (
    <>
      <Header />
      <form id="user-input">
        <div className="input-group">
          <UserForm
            label="INITIAL INVESTMENT"
            name="initialInvestment"
            onChangeValue={handleChangeValue}
          />
          <UserForm
            label="AUNNAL INVESTMENT"
            name="annualInvestment"
            onChangeValue={handleChangeValue}
          />
          <UserForm
            label="EXPECTED RETURN"
            name="expectedReturn"
            onChangeValue={handleChangeValue}
          />
          <UserForm
            label="DURATION"
            name="duration"
            onChangeValue={handleChangeValue}
          />
        </div>
      </form>
      {errMsg}
      <Results resultsArr={results} msg ={errMsg}/>
    </>
  );
}

export default App;
