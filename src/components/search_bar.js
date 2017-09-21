import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {};
    }
    render() {
        return (
            <div>
                {/* controled forms */}
                <input value={this.state.term} onChange={this.onInputChange}/>
            </div>
        );
    }

    onInputChange = (event) => {
        this.setState({term: event.target.value})
        console.log(this.state);
    }
}

export default SearchBar;