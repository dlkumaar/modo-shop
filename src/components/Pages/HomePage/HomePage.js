import React from 'react';
import MenuLayout from '../../MenuLayout/MenuLayout';

import './HomePage.scss';

const HomePage = (props) => {
	console.log(props);
	return (
		<div className='homepage'>
			<h1>Welcome to my Homepage</h1>
			<MenuLayout />
		</div>
	);
};

export default HomePage;
