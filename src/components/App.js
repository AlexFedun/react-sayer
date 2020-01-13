import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom"
import '../style.css'  
import Home from './Home'
import AddItem from './AddItem'
import Show from './Show'

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/additem" component={AddItem} />
                    <Route path="/show/:id" component={Show} />
                </Switch>
            </Router>
        )
    }
}
export default App