import React from 'react';

const Card = ({movie}) => {
    return (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={movie.Poster}/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{movie.Title}</span>
                <div className='card__descr'>
                    <p>{movie.Year}</p>
                    <p>{movie.Type}</p>
                </div>

            </div>
        </div>
    );
};

export default Card;