import React from 'react';
import Search from "./search";
import Movies from "./movies";
import axios from "axios";


class Main extends React.Component{
    state = {
        movies : []
    };

    componentDidMount() {
    axios('http://www.omdbapi.com/?apikey=dc3106ae&s=matrix')
        .then(({data})=> this.setState({movies:data.Search}))
    }

    render() {
        return(
            <main className='container content'>
                <Search/>
                <Movies movies={this.state.movies}/>
            </main>
        )
    }

}
export default Main