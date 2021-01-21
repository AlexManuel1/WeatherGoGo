import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    state = {
        term: ''
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.userSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-bar">
                <form onSubmit={event => this.onFormSubmit(event)}>
                    <input 
                        className="user-input"
                        placeholder="Enter city" 
                        type="text"
                        onChange={(e) => this.setState({term: e.target.value})}
                        value={this.state.term}
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar;