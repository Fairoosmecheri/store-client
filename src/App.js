import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import User from './pages/user/User';
import Admin from './pages/admin/Admin';
function App() {
  return (
    <div className="App overflow-x-hidden">
      <Router>
        <Switch>
          <Route exact path='/'>
            <User />
          </Route>
          <Route path='/admin'>
            <Admin />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
