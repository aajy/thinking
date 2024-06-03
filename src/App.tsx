import { useState } from 'react';
import './App.css';
import { UIListTab } from './components/UILIstTab';
import { UITabBox } from './components/UITabPage';

function App() {
	const UIList = ['Joy', 'Material', 'Base'];
	const [activeNum, setActiveNum] = useState(0);
	return (
		<div className='App'>
			<h1>Thinking</h1>
			<UIListTab UIList={UIList} setActiveNum={setActiveNum} />
			<UITabBox activeNum={activeNum} />
		</div>
	);
}

export default App;
