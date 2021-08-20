import React from 'react'


const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <p>
      {props.title} {props.noexercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part title={props.parts[0].name} noexercises={props.parts[0].exercises} />
      <Part title={props.parts[1].name} noexercises={props.parts[1].exercises} />
      <Part title={props.parts[2].name} noexercises={props.parts[2].exercises} />
    </div>
  )
}
  


const Total = (props) => {
  var total = 0;
  for(var i = 0; i < 3; i++) {
    total += props.parts[i].exercises;
  }
  return (
    <p>
      Number of exercises {total}
    </p>
  )
}

const App = () => {
  const course = { 
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  }
  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts}/>
      <Total parts = {course.parts} />
    </div>
  )
}
 

export default App;
