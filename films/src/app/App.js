import './App.css';
import Modal from '../components/modal/modal.js';
import Header from '../components/ui/header/header.jsx';
import Filters from '../components/ui/filters/filters.jsx'
import FilmGrid from '../components/ui/films/filmGrid.jsx';


function App() {
  return (
    <div className="App">
        <Header/>
        {/* <Modal/> */}
        <Filters/>
        <FilmGrid/>
    </div>
  );
}

export default App;
