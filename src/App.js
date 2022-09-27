import './App.css';
import List from './components/List';

function App() {

  const items = [
    {id: 1, text: 'Apple'},
    {id: 2, text: 'Mango'},
    {id: 3, text: 'Banana'},
  ]

  return (
    <div className="App">
      <h2>Fruit List</h2>
      <List items={items}/>
    </div>
  );
}

export default App;
