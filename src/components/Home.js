import React, {Component} from 'react'
import Header from './Header'
import ItemsList from './ItemsList'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <ItemsList />
                <Link className="add-btn" to="/additem">+</Link>
            </div>
        )
    }
}
export default Home