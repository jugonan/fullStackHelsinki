import React from 'react';
import ReactDOM from 'react-dom';

import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Total from './components/Total/Total';

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentls of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (

    <div>
      <Header name={course} />
      <Content number={1} part={part1} exercise={exercises1}/>
      <Content number={2} part={part2} exercise={exercises2}/>
      <Content number={3} part={part3} exercise={exercises3}/>
      <Total exercise1={exercises1} exercise2={exercises2} exercise3={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));