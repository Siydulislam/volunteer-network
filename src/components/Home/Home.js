import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Events from './Events';

const Home = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('https://frozen-dusk-49984.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])

    return (
        <div className="container">
            <Navbar></Navbar>
            <div className="text-center mt-5">
                <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
                <form className="form-inline d-flex justify-content-center mt-5 mb-5">
                    <input className="form-control" type="search" placeholder="Search..." aria-label="Search"/>
                    <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
            <div className="row">
                {
                    events.map(events =><Events events={events}></Events>)
                }
            </div>
        </div>
    );
};

export default Home;