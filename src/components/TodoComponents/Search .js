import React from 'react';

class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            query: ''
        };
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

   

    render(){
        return(
            <div>
                <form onSubmit={this.submitSearch}>
                    <input
                        type="text"
                        value={this.state.search}
                        name="query"
                        onChange={this.handleChanges}
                    />
                    <button type="submit">Search</button>
                </form>
                <button onClick={this.props.clearSearch}>Clear Search</button>
            </div>
        );
    }
}



export default SearchForm;