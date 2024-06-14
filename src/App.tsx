import './App.css';
import '../src/styles/reset.scss';
import { UIListTabMenuContainer } from './pages/UIList/UIListTabMenuContainer';
import { FormContainer } from './pages/Form/FormContainer';
import { LooseCouplingFormContainer } from './pages/Form/LooseCouplingFormContainer';
import { TightCouplingFormContainer } from './pages/Form/TightCouplingFormContainer';
import { Input } from './components/Input';

function App() {
	return (
		<div className='App'>
			<h1>Thinking</h1>
			<UIListTabMenuContainer />
			<FormContainer />
			<TightCouplingFormContainer />
			<LooseCouplingFormContainer />
			<Input />
		</div>
	);
}

export default App;
