import logo from './logo.svg';
import './App.css';
import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} excercise={exercises1} />
      <Content part={part2} excercise={exercises2} />
      <Content part={part3} excercise={exercises3} />
      <Total excercise1 = {exercises1} excercise2 = {exercises2} excercise3 = {exercises3} />
      
    </div>
  )
}
const Header = (props) => {
  return (
    <div>
      <h1> {props.course}</h1>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <h2> {props.part} {props.excercise}</h2>
   
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <h3>Number of exercises {props.excercise1+ props.excercise2 + props.excercise3}</h3>
    </div>
  )
}

export default App
