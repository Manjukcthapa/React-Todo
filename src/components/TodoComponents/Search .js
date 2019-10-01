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

   submitSearch = e => {
       e.preventDefault();
       this.props.searchList(this.state.search)
       this.setState({
           search:''
       })
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
                {/* <button onClick={this.props.clearSearch}>Clear Search</button> */}
            </div>
        );
    }
}



export default SearchForm;