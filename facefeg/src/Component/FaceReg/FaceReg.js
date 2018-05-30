import React from 'react'

const FaceReg = ({url}) => {
	return (
		<div className='center ma'>
			<div className='absolute mt2'> 
				<img id='inputimage' src={url} width='500px' height='auto'/>
			</div>
		</div>
	);
}

export default FaceReg;