import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
import brain from './Brain.png'

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 150, width: 150 }} >
			 	<div className="Tilt-inner"> 
			 		<img style={{paddingTop: '30px'}}src={brain} />
			 	</div>
			</Tilt>
		</div>
	);
}

export default Logo