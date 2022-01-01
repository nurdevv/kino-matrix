import React from 'react'
import Card from "../../Card";

class Movies extends React.Component{

    render() {
        return(
            <div className='movies'>
                {this.props.movies.map((el)=>{
                    return <Card key ={el.imbID} movie={el}/>
                })}

            </div>
        )
    }

}
export default Movies