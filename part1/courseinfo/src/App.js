import React, { useState } from 'react'

const App = (props) => {
  
	const [left, setLeft] = useState(0) 
	const [right, setRight] = useState(0)
	const [allClicks, setAll] = useState([])

	const handleLeftClick = () => {
		setAll(allClicks.concat('L'))
		setLeft(left + 1)
	} 

	const handleRightClick = () => {
		setAll(allClicks.concat('R'))
		setRight(right + 1)
	}

	return (
		<div>
			Left Click: {left}
			<button onClick={handleLeftClick}>Left</button>	
			<button onClick={handleRightClick}>Right</button>
			Right Click: {right}
			<p>{allClicks.join(' ')}</p>
		</div>
	)
}

export default App