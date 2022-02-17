import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value, symbol}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value} {symbol}</td>
    </tr>
  )
}

const DisplayStats = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  if (total > 0) {
    const average = (total / 3).toFixed(2)
    const positive = (good / total * 100).toFixed(2)
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good + neutral + bad} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} symbol="%"/>
        </tbody>
      </table>
    )
  }
  else {
    return (
      <div>
        No feedback given
      </div>
    )
  }
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Header text="statistics" />
      <DisplayStats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App