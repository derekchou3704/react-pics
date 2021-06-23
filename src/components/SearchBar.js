import React from 'react'

class SearchBar extends React.Component {
    state = { term: '' }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term)
        // in class components, 'this' must be called rather than just props
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search: </label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;