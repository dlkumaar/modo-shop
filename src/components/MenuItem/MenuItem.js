import React from 'react';
import { withRouter } from 'react-router-dom';
import './MenuItem.scss';

const MenuItem = (props) => {
	return (
		<div
			className={`${props.size} menu-item`}
			onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}>
			<div
				style={{ backgroundImage: `url(${props.imageUrl})` }}
				className='background-image'></div>
			<div className='content'>
				<div className='title'>{props.title}</div>
				<span className='subtitle'>SHOP NOW</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
