import React from 'react';

class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            search: ''
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
                        name="search"
                        onChange={this.handleChanges}
                    />
                    <button type="submit">Search</button>
                </form>
              
            </div>
        );
    }
}



export default SearchForm;