import logo from './logo.svg';
import './App.css';
import Header from './Componets/Header';
import Footer from './Componets/Footer';
import Home from './Conteiners/Home';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Doctors from './Conteiners/Doctors';
import Contact from './Conteiners/Contact';
import Login from './Conteiners/Login';
import Appointment from './Conteiners/Appoment';
import List from './Conteiners/List';
import About from './Conteiners/About';
import List1 from './Conteiners/List1';
import PublicRoute from "./routers/PublicRoute"
import PrivetRoute from "./routers/PrivetRoute"
import { store } from "./redux/store";
import {Provider} from 'react-redux'

function App() {
  return (

    <Router>
      <div className="App">
      <Provider store={store}>
        <Header />
             <Switch>
                <PublicRoute  path={"/"} exact component={Home} />
                <PublicRoute  path={"/doctors"} exact component={Doctors} />
                <PublicRoute  path={"/contact"} exact component={Contact} />
                <PublicRoute restrict={true}  path={"/appointment"} exact component={Login} />
                <PrivetRoute  path={"/appointment-1"} exact component={Appointment} />
                <PrivetRoute  path={"/about"} exact component= {About }/>
                <PrivetRoute  path={"/list1"} exact component={List1}/> 
            </Switch>
        <Footer />
        </Provider>
      </div>
    </Router>
  );
}

export default App;
