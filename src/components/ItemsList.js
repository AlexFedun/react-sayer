import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class ItemsList extends Component {

    deleteSubmit = (item) => {
        console.log(item);
        localStorage.removeItem(item);
        let storedNames = JSON.parse(localStorage.getItem("names"));
        storedNames.splice( storedNames.indexOf(item), 1 );
        localStorage.setItem("names", JSON.stringify(storedNames));
        this.forceUpdate();
    }

    render() {
        let storedNames = JSON.parse(localStorage.getItem("names"));
        let body = <div className="title">Nothing found!</div>;
        if (storedNames != null && storedNames.length !== 0) {
            body = storedNames.map((item, index) => {
                let count = "0";
                let arr = JSON.parse(localStorage.getItem(item));
                if(arr){
                    count = arr.length;
                }
                return (
                    <div className="item" key={index}>
                        <Link to={"/show/" + index}>
                            {item}
                            <div className="counter">{count}</div>
                        </Link>
                        <div className="delete" onClick={(e) => this.deleteSubmit(item, e)}>Delete</div>
                    </div>
                )
            })
        }
        return (
            <div className="scroll">{body}</div>
        )
    }
}
export default ItemsList