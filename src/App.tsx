import './App.css';
import '../src/styles/reset.scss';
import { UIListTabContainer } from './pages/UIList/UILIstTabContainer';
import { FormContainer } from './pages/Form/FormContainer';

function App() {
	return (
		<div className='App'>
			<h1>Thinking</h1>
			<UIListTabContainer />
			<FormContainer />
		</div>
	);
}

export default App;
