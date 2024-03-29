import React, { useState } from 'react'

const Text = (props) => {
  return (
    <h2>
      {props.text}
    </h2>
  )
}

const TopAnecdote = (props) => {
  var max = 0
  for (const numOfVotes of props.votes) {
    if (numOfVotes > max) {
      max = numOfVotes
    }
  }
  if (max === 0) {
    return (
      <div>
        No votes yet.
      </div>
    )
  }
  return (
    <div>
      {props.anecdotes[props.votes.indexOf(max)]}
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const vote = () => {
    votes[selected] += 1
    const copy = [...votes]

    return setVotes(copy)
  }
    
  const randomAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  return (
    <div>
      <Text text={'Anecdote of the Day'} />
      <p>{anecdotes[selected]}</p>
      <p>This citation has: {votes[selected]} votes</p>
      <button onClick={vote}>Vote</button>
      <button onClick={randomAnecdote}>Next anecdote</button>
      <Text text={'Anecdote with Most Votes'} />
      <TopAnecdote anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App