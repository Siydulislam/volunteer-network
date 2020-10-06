import React from 'react';
import { useHistory } from 'react-router-dom';

const Events = ({ events }) => {
    const history = useHistory()
    const handleClick = (title) => {
        history.push(`/registration/${title}`)
    }
    return (
        <div className="col-md-3 col-sm-6 mt-4" style={{cursor: 'pointer'}} onClick={() => handleClick(events.title)}>
            <img src={events.img} class="card-img-top" alt="..."/>
            <div className="card-body bg-light">
                <h5 className="card-title text-center">{events.title}</h5>
            </div>
        </div>
    );
};

export default Events;