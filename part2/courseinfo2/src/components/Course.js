import React from "react";

const Header = ({ course }) => {
  return <h2>{course.name}</h2>;
};

const Total = ({ parts }) => {
  return (
    <b>
      Total of {parts.reduce((sum, part) => (sum += part.exercises), 0)}{" "}
      exercises.
    </b>
  );
};

// const Part = (props) => {
//   return (
//     <p>
//       {props.part.name} {props.part.exercises}
//     </p>
//   )
// }

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
      <Total parts={parts} />
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
    </div>
  );
};

export default Course;
