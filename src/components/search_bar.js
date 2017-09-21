import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            term: ''
        };
    }
    render() {
        return (
            <div>
                <input onChange={this.onInputChange}/>
            </div>
        );
    }

    onInputChange = (event) => {
        this.setState({term: event.target.value})
        // console.log(event.target.value);
    }
}

export default SearchBar;