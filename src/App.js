import SearchBar from './Components/Search_bar';
import './App.css';
import FormAdmin from './Components/Form';

function App() {
  return (
    <div className="App">
      {<SearchBar/>}
      {<FormAdmin/>}
    </div>
  );
}

export default App;
