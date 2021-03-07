import './App.scss';
import { Switch, Route } from 'react-router-dom';

import HomePage from './components/Pages/HomePage/HomePage';

const HatsPage = () => {
	return (
		<div>
			<h1>Hats Page</h1>
		</div>
	);
};

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/hats' component={HatsPage} />
			</Switch>
		</div>
	);
}

export default App;
