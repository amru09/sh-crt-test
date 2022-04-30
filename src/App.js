import './App.css';
import Headers from './components/Headers';
import ShoppingCart from './components/ShoppingCart';
import data from './data';

function App() {
  return (
    <div>
      <Headers />
      <ShoppingCart data={data} />
    </div>
  );
}

export default App;
