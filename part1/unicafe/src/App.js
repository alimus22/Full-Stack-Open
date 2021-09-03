import React, { useState } from 'react'

const Titles = ({ text, level }) => {
  switch (level) {
    case 1:
      return (
        <h2>{text}</h2>
      )
    case 2:
      return (
        <h1>{text}</h1>
      )
    default:
      <div>Error unable to load</div>
  }
}

const Button = (props) => <button onClick={props.function}>{props.text}</button>

const Statistics = (props) => <div>{props.text}: {props.value}</div>


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {
    setGood(good + 1)
  }

  const addNeutral = () => {
    setNeutral(neutral + 1)
  }

  const addBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Titles text={'Give feedback'} level={2} />
      <Button function={addGood} text={'Good'} />
      <Button function={addNeutral} text={'Neutral'} />
      <Button function={addBad} text={'Bad'} />
      <Titles text={'Statistics'} level={1} />
      <Statistics text={'Good'} value={good} />
      <Statistics text={'Neutral'} value={neutral} />
      <Statistics text={'Bad'} value={bad} />
    </div>
  )
}

export default App;
