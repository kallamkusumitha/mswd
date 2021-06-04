import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


const Parts = (props) => {
  return (
    <div>
      <p>{props.topic} : {props.excercises}</p>

    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Parts topic={props.courses[0].topic} excercises={props.courses[0].exercises} />
      <Parts topic={props.courses[1].topic} excercises={props.courses[1].exercises} />
      <Parts topic={props.courses[2].topic} excercises={props.courses[2].exercises} />
    </div>
  )
}







const App = () => {
  const course = {
    name: "Half Stack application development",
    courses: [
      {
        topic: "Fundamentals of React",
        exercises: 10,
      },
      {
        topic: "Using props to pass data",
        exercises: 7,
      },
      {
        topic: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content courses={course.courses} />
      <Total courses={course.courses} />
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <h4>Number of exercises {props.courses[0].exercises+ props.courses[1].exercises + props.courses[2].exercises}</h4>
    </div>
  )
const Header = (props) => {
  return (
    <div>
      <h2> {props.course.name}</h2>
    </div>
  )
}

}
export default App
