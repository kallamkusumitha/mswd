import React, { useState } from 'react'


const App = () => {
  const array = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(array.length).fill(0))
  const handleClickVote = () => {
    const vote = [...votes]
    vote[selected] += 1
    setVotes(vote)
  }
  const maximumVotes = () => {
    let maximum = 0,indexMaximum = 0
    votes.forEach((param, value) => {
      if (param > maximum) {
        maximum = param
        indexMaximum = value
      }
    })
    return indexMaximum
  }
  const handleClickSelect = () => {
    const duplicate = Math.floor(Math.random() * array.length)
    setSelected(duplicate)
  }

  

  return (
    <>
      <h1>Anecdote of the day</h1>
      <h3>{array[selected]}</h3>
      <h3>has {votes[selected]} votes</h3>
      <Button handleClick={handleClickVote} text="vote" />
      <Button handleClick={handleClickSelect} text="next anecdote" />
      {votes[maximumVotes()] === 0 ?
        <>
          <h3>There is votes</h3>
        </>
        :
        <>
          <h3>{array[maximumVotes()]}</h3>
          <h3>has {votes[maximumVotes()]} votes</h3>
        </>
      }
    </>
  )
}
const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

export default App
