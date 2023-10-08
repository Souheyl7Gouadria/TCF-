
import React,{ useState } from 'react';
import classes from './UserInput.module.css'

const initialState ={
  'current-savings':1000,
  'yearly-contribution':1200,
  'expected-return':7,
  'duration':10
}

const UserInput = (props) => {

  const [userInput,setUserInput] =useState(initialState)

  const submitHandler=(event) => {
    event.preventDefault();
    props.onCalculate(userInput)
    
  }
  const resetHandler =() => {
    setUserInput( initialState)
  }
  const changeHandler= (input , value) =>{
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
        // dynamically update 
      }
    })
  }

// [input] : value , this way we dont set the property named input (because it doesnt exist ) instead we set the property which name is stored in input
  return (
    <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input value={userInput['current-savings']} onChange={(event) => changeHandler('current-savings',event.target.value)} type="number" id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input value={userInput['yearly-contribution']} onChange={(event) => changeHandler("yearly-contribution",event.target.value)}  type="number" id="yearly-contribution" />
          </p>
        </div>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input value={userInput['expected-return']} onChange={(event) => changeHandler("expected-return",event.target.value)} type="number" id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input value={userInput['duration']} onChange={(event) => changeHandler("duration",event.target.value)} type="number" id="duration" />
          </p>
        </div>
        <p className={classes['actions']}>
          <button onClick={resetHandler} type="reset" className={classes.buttonAlt}>
            Reset
          </button>
          <button type="submit" className={classes.button}>
            Calculate
          </button>
        </p>
      </form>
  )
}

export default UserInput