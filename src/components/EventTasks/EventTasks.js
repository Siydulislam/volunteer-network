import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import EventTask from './EventTask';


const EventTasks = () => {
    const { eventKey } = useParams();
    const history = useHistory();
    const [loggedInUser, setLoggedInUserUser] = useContext(UserContext)
    const [eventTasks, setEventsTasks] = useState([])
    useEffect(() => {
        fetch(`https://frozen-dusk-49984.herokuapp.com/eventTasks?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                setEventsTasks(data)
            })
    }, [])

    const handleDelete = (_id) => {
        const selectedEvent = eventTasks.filter(event => eventKey !== _id)
        fetch(`https://frozen-dusk-49984.herokuapp.com/delete/${eventKey}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setEventsTasks(selectedEvent);
                    history.push('/registration')
                }
            })
    }

    return (
        <div className="container">
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    {
                        eventTasks.map(event => <EventTask event={event} handleDelete={handleDelete}></EventTask>)
                    }
                </div>
            </div>
        </div>
    );
};

export default EventTasks;