import React, {Component} from 'react'
import Header from './Header'

class AddItem extends Component {
    state = {
        name: ''
    };

    handleChange = (event) => {
        const input = event.target;
        this.setState({ [input.name]: input.value });
      };
     
    handleFormSubmit = () => {
        let storedNames = JSON.parse(localStorage.getItem("names"));
        storedNames.push(this.state.name);
        localStorage.setItem("names", JSON.stringify(storedNames));
    };

    render() {
        return (
            <div>
                <Header pageName="Create new item"/>
                <form onSubmit={this.handleFormSubmit} action="/">
                    <input name="name" placeholder="Enter new item title..." value={this.state.name} onChange={this.handleChange}/>
                    <button type="submit">Add</button>
                 </form>
            </div>
        )
    }
}
export default AddItem