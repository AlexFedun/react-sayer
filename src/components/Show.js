import React, {Component} from 'react'
import Header from './Header'
import Comments from './Comments';

class Show extends Component {
    state = {
        msg: '',
        itemName: ''
    };

    handleChange = (event) => {
        const input = event.target;
        this.setState({ [input.name]: input.value });
      };
     
    handleFormSubmit = (event) => {
        event.preventDefault();
        if (this.state.msg !== "") {
            let storedItems = JSON.parse(localStorage.getItem(this.state.itemName));
            if (storedItems == null) {
                storedItems = [];
            }
            storedItems.push(this.state.msg);
            localStorage.setItem(this.state.itemName, JSON.stringify(storedItems));
            document.getElementsByName("msg")[0].value = "";
            this.forceUpdate();
            let scrollDiv = document.getElementsByClassName("comments")[0];
            scrollDiv.scrollTop = scrollDiv.scrollHeight;
        }
    };
    componentWillMount() {
        let id = +this.props.match.params.id;
        let parseName = JSON.parse(localStorage.getItem("names"))[id];
        this.setState({itemName: parseName});
    }
    render() {
        return (
            <div>
                <Header pageName={" " + this.state.itemName} />
                <Comments itemName={this.state.itemName}/>
                <form onSubmit={this.handleFormSubmit}>
                    <input name="msg" placeholder="Enter new msg..." value={this.state.msg} onChange={this.handleChange}/>
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }
    componentDidUpdate() {
        let scrollDiv = document.getElementsByClassName("comments")[0];
        scrollDiv.scrollTop = scrollDiv.scrollHeight;
    }
}
export default Show