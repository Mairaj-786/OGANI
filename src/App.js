import React from 'react'
import Home from './components/landing/Home/Home';
import Navbar from './constraints/Navbar/Navbar';
import './Style/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Store from './Redux';
import { Provider } from 'react-redux';
import SingleProduct from './components/Detail/SingleProduct';



const App = () => {
  return (
    <div className="tes">
      <Provider store={Store}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/details/:id" component={SingleProduct} />
          </Switch>
        </Router>
      </Provider>
    </div>
  )
}

export default App
