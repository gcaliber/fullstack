import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) ) + min;
  const len = anecdotes.length

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(len).fill(0))
  
  console.log(votes)

  let max = 0
  for (let i = 0, tmp = -Infinity; i < len; i++) {
    if (votes[i] > tmp) {
      tmp = votes[i]
      max = i
    }
  }

  const handleVoteClick = () => {
    const copy = {...votes}
    copy[selected] += 1
    return setVotes(copy)
  }
  const handleNextAnecdoteClick = () => setSelected(getRandom(0, len))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      has {votes[selected]} votes
      <div>
        <Button handleClick={handleVoteClick} text="vote" />
        <Button handleClick={handleNextAnecdoteClick} text="next anecdote" />
      </div>
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[max]}</p>
      has {votes[max]} votes
    </div>
  )
}

export default App