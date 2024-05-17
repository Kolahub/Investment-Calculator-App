import { useState } from 'react'
import { calculateInvestmentResults } from '../util/investment.js'
function UserForm({ label, name, value, onChangeValue }) {
    // const [ value, setValue ] = useState('')
    // function handleCalculation (initialInvestment, annualInvestment, expectedReturn, duration) {
    //     setData((prevData) => {
    //         return [...prevData, calculateInvestmentResults(initialInvestment, annualInvestment, expectedReturn, duration)]
    //     })
    // }


  return (
        <div>
        <label htmlFor="">{ label }</label>
        <input type="number" name={name}required onChange={onChangeValue}/>
        </div>
  )
}

export default UserForm