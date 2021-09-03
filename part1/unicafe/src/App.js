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

const StatisticLine = (props) => <div>{props.text}: {props.value}</div>

const Statistics = ({ good, neutral, bad }) => {
  if (good == 0 && neutral == 0 && bad == 0) {
    return <div>No feedback given</div>
  }
  const average = (good, neutral, bad) => (good - bad) / (good + neutral + bad)

  const positivity = (good, neutral, bad) => (good / (good + neutral + bad) * 100)

  return (
    <div>
      <StatisticLine text={'Good'} value={good} />
      <StatisticLine text={'Neutral'} value={neutral} />
      <StatisticLine text={'Bad'} value={bad} />
      <StatisticLine text={'All'} value={good + bad + neutral} />
      <StatisticLine text={'Average'} value={average(good, neutral, bad)} />
      <StatisticLine text={'Positivity'} value={positivity(good, neutral, bad) + ' %'} />
    </div>
  )
}


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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
