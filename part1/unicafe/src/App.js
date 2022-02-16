import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  return (
    <div>{props.text} {props.count}</div>
  )
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
      <Statistics text="good" count={good} />
      <Statistics text="neutral" count={neutral} />
      <Statistics text="bad" count={bad} />
      <Statistics text="all" count={good + neutral + bad} />
      <Statistics text="average" count={(good + neutral + bad) / 3} />
      <Statistics text="positive" count={good / (good + neutral + bad)} />
    </div>
  )
}

export default App