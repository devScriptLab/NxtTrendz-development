import {Switch, Route} from 'react-router-dom'

import './App.css'

import Home from './components/Home'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={LoginForm} />
    <Route component={NotFound} />
  </Switch>
)

export default App
