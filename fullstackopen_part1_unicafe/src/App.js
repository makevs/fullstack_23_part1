import { useState } from 'react'

const Header = (props) => <h1>{props.name}</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  if (props.all > 0) { return (
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.all} />
          <StatisticLine text="average" value={props.average} />
          <StatisticLine text="positive" value={props.positive} />
        </tbody>
      </table>
    )
  } else { return (
    <div>
    <p>No feedback given</p>
    </div>
    )
  }
}

const StatisticLine = (props) => (
    <tr>
      <td>{props.text}</td>
      <td style={{paddingleft: 10}}>{props.value}</td>
    </tr>
)


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100 + "%"

  return (
    <>
        <Header name="give feedback" />
        <Button handleClick={() => setGood(good + 1)} text="Good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="Bad" />
        <Header name="statistics" /> 
        <Statistics good={good} neutral={neutral} bad={bad}
        all={all} average={average} positive={positive} />
    </>
  )
}

export default App