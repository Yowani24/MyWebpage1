import React from 'react'
import AboutPage from './components/AboutPage'
import HomePage from './components/HomePage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from './components/Footer'
function App() {
  return (
    <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/about" component={AboutPage}/>
          </Switch>
          <Footer/>
      </div>
     </Router>
  );
}

export default App;
