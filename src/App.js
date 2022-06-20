import logo from './logo.svg';
import './App.css';
import Header from './Componets/Header';
import Footer from './Componets/Footer';
import Home from './Conteiners/Home';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Doctors from './Conteiners/Doctors';
import Contact from './Conteiners/Contact';
import Login from './Conteiners/Login';

function App() {
  return (

    <Router>
      <div className="App">
       
        <Header />
             <Switch>
                <Route exact path={"/"}><Home /></Route>
                <Route exact path={"/doctors"}><Doctors /></Route>
                <Route exact path={"/contact"}> <Contact /></Route>
                <Route exact path={"/appointment"}> <Login /></Route>
            </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
