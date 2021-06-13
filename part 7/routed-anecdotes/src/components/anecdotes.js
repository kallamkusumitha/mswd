import React from 'react'
import PropTypes from 'prop-types'

const Anecdote = ({ anecdote }) => {
  return (
    <>
      <h2>{anecdote.content}</h2>
      <div>
        <h3>Author: {anecdote.author}</h3>
        <h3>Has {anecdote.votes} votes</h3>
        <p>
          For more info see: <a href={anecdote.info}>{anecdote.info}</a>
        </p>
      </div>
    </>
  )
}

Anecdote.propTypes = {
  anecdote: PropTypes.object
}

export default Anecdote