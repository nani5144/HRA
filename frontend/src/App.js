
import './App.css';
import {  Route, Switch } from 'react-router-dom';
import House from './components/House.jsx'
import FilterList from './components/FilterList.jsx'
import Header from './components/Header.jsx'
import SingleHouse from './components/SingleHouse.jsx'
import AddHouse from './components/AddHouse.jsx'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={House} />
        <Route exact path="/house/:house_id" component={SingleHouse}/>
        <Route exact path="/add" component={AddHouse}/>
        
        <Route path="*" component={House} />
    </Switch>
    </div>
  );
}

export default App;
