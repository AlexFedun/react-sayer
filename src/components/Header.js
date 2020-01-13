import React, {Component} from 'react'
import {Link} from "react-router-dom"
class Header extends Component {
    render() {

        let body = (
            <div className="header">
                <h1>Sayer</h1>
                <h5>World's most used time waster</h5>
            </div>
        )
        if (this.props.pageName) {
            body = (
                <div className="header">
                    <h3>
                        <Link className="back-btn" to="/">🠜</Link>
                        {" " + this.props.pageName}
                    </h3>
                </div>
            )
        }
        return (
            <div>
                {body}
            </div>
        )
    }
}
export default Header