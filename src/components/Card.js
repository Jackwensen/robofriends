import React from 'react';

const Card = (props) => {
    const { name, id, email} = props;
    return(
        <div className="tc bg-light-green dib br1 pa10 ma3 grow bw1 shadow-1">
            <img alt='player' src={`https://robohash.org/1${id}?set=set4&size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;
