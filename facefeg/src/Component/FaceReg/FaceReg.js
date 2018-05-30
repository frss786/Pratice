import React from 'react'
import'./FaceReg.css'

const FaceReg = ({url, box}) => {
	function drawBoxes(){
		if(box instanceof Array){
			return (
				box.map(b => {
					return (<div key={b} className='boundingBox' style={{top: b.topRow, right: b.right, bottom: b.bottomRow, left: b.left}}></div>);
				})
			);
		}
	}

	return (
		<div className='center ma'>
			<div className='absolute mt2'> 
				<img id='inputimage' src={url} width='500px' height='auto'/>
				{drawBoxes()}
			</div>
		</div>
	);
}

export default FaceReg;