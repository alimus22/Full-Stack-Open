import React from 'react'

const Header = ({ course }) => {
    return (
        <h1>{course.name}</h1>
    )
}

// const Total = ({ course }) => {
//   const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
//   return(
//     <p>Number of exercises {sum}</p>
//   ) 
// }

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
  )
}

const Content = ({ parts }) => {
    return (
       <div>
           {parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
       </div> 
    )
}


const Course = ({course}) => {
    
    return (
        <div>
            <Header course={course} />
            <Content parts={course.parts}/>
        </div>
    )
}

export default Course