import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index'
import Home from './components/home/home'
import Login from './components/login/login'
import EditUser from "./components/edit-user/edit-user";
import './App.css';

function App() {

 const store = createStore( reducer);

  return (
    <div className="App">
     <Provider store={store}>
      <Router >
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/edit/:id" component={EditUser} />
        </Switch>
      </Router>
    </Provider>
    </div>
  );
}

export default App;
