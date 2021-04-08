import './App.css';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import Newquestion from './components/Newquestion';
import Login from './components/Login';
import ErrorPage from './components/ErrorPage';
import FormProvider from './context/Formcontext';
import Index from './components/Index';
import Profile from './components/Profile';

function App() {
  return (
      <Router>
        <FormProvider>
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Index} />
            <Route exact path='/question' component={Newquestion} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/profile/:user' component={Profile} />
            <Route component={ErrorPage}/>
          </Switch>
        </FormProvider>
      </Router>
  );
}

export default App;
