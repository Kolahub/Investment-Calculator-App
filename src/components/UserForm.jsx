import { useState } from 'react'
import { calculateInvestmentResults } from '../util/investment.js'
function UserForm({ label, name, onChangeValue }) {
  return (
        <div>
        <label htmlFor="">{ label }</label>
        <input type="number" name={name}required onChange={onChangeValue}/>
        </div>
  )
}

export default UserForm