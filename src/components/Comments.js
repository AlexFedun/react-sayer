import React, {Component} from 'react'

class Comments extends Component {
    
    render() {
        let name = this.props.itemName;
        let body = "";
        let storedItems = JSON.parse(localStorage.getItem(name));
        if (storedItems) {
            body = storedItems.map((item, index) =>
            (
                <div className="item" key={index}>
                    <div className="avatar"></div>
                <div className="msg">{item}</div>
                </div>
            ));
        } else {
            body = <div className="title">Nothing found!</div>;
        }
        return (
            <div className="comments scroll">
                {body}
            </div>
        )
    }
}
export default Comments