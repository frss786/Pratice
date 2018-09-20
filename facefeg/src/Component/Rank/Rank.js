import React from 'react'

class Rank extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		const {rank, name} = this.props;
		console.log(rank, name)
		return	(<div className='white f3'>
				<div>
					{ name + ' your current rank is...'}
				</div>
				<div className='white f1'>
					{rank}
				</div>
			</div>);
	}
}

export default Rank;
