import './App.css';
import '../src/styles/reset.scss';
import { UIListTabMenuContainer } from './pages/UIList/UIListTabMenuContainer';
import { FormContainer } from './pages/Form/FormContainer';
import { TightCouplingForm } from './pages/Form/TightCouplingForm';
import { LooseCouplingForm } from './pages/Form/LooseCouplingForm';

function App() {
	return (
		<div className='App'>
			<h1>Thinking</h1>
			<UIListTabMenuContainer />
			<FormContainer />
			<TightCouplingForm />
			<LooseCouplingForm />
		</div>
	);
}

export default App;
