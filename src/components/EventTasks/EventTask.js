import React from 'react';

const EventTask = (props) => {
    const {event, handleDelete} = props;
    const { eventTitle, date, img, eventKey} = event;
    return (
        <div className="card mb-3 col-md-6 col-sm-12" style={{width: "540px"}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={img} className="card-img" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{eventTitle}</h5>
                        <p>{date}</p>
                        <button className="btn btn-danger" onClick={() => handleDelete(eventKey)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventTask;