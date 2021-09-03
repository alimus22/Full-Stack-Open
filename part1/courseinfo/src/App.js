import React, { useState } from 'react'

// const History = (props) => {
// 	if (props.allClicks.length === 0) {
// 		return (
// 			<div>
// 				The app is used by pressing the buttons!
// 			</div>
// 		)
// 	}
// 	return (
// 		<div>
// 			Button press history: {props.allClicks.join(' ')}
// 		</div>
// 	)
// }

// const Button = (props) => {
// 	console.log(props)
// 	const {onClick, text} = props
// 	return (
// 		<button onClick={onClick}>
// 			{text}
// 		</button>
// 	)
// } 

// const App = (props) => {
  
// 	const [left, setLeft] = useState(0) 
// 	const [right, setRight] = useState(0)
// 	const [allClicks, setAll] = useState([])

// 	const handleLeftClick = () => {
// 		setAll(allClicks.concat('L'))
// 		setLeft(left + 1)
// 	} 

// 	const handleRightClick = () => {
// 		setAll(allClicks.concat('R'))
// 		setRight(right + 1)
// 	}
// 	return (
// 		<div>
// 			Left Click: {left}
// 			<Button onClick={handleLeftClick} text='Left'/>
// 			<Button onClick={handleRightClick} text='Right'/>
// 			Right Click: {right}
// 			<History allClicks={allClicks}/>
// 		</div>
// 	)
// }

const Button = (props) => (
	<div>
		<button onClick={props.handleClick}>
			{props.text}
		</button>
	</div>
)


const Display = (props) => <div>{props.value}</div>

const App = (props) => {
	const [value, setValue] = useState(10)

	const setToValue = (newValue) => {
		setValue(newValue)
	}

	return (
		<div>
			<Display value={value}/>
			<Button handleClick={() => setToValue(1000)} text='Thousand'/>
			<Button handleClick={() => setToValue(0)} text='Reset'/>
			<Button handleClick={() => setToValue(value + 1)} text='Increment'/>
		</div>
	)
}

export default App