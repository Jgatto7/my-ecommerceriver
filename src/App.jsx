import './App.css';
import ItemListContainer from './components/ItemListContainer';
import second, { NavBar } from './components/NavBar'

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer texto= 'Esteban' />
    </>
  );
}

export default App;
