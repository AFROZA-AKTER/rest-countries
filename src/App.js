
import './App.css';
import Countries from './components/countries/Countries';


function App() {
  return (
    <div className="App">
     <Countries></Countries>
    </div>
  );
}

/*
  return(
    <div>
      {
           countries.map(country => <Country></Country>)
        }
    </div>
  )
}

function Country(props){
  return (
    <div className="country">
      
    </div>
  )
} */

export default App;
