import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Registration.css';
import brand from '../../logos/brand.png';
import { useHistory, useParams } from 'react-router-dom';

const Registration = () => {
    const { eventKey } = useParams();
    const [event, setEvent] = useState({});
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`https://frozen-dusk-49984.herokuapp.com/events/${eventKey}`)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [eventKey]);

    const onSubmit = data => {
        const { title, img } = event;
        data = { ...data, title, img }
        fetch('https://frozen-dusk-49984.herokuapp.com/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedCount > 0) {
                    history.push('/events')
                }
            })
    }

    return (
        <div className="jumbotron text-center">
            <img src={brand} alt=""/>
            <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                <h3>Register as a Volunteer</h3>
                <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })}/>
                {errors.name && <span className="error">Name is required</span>}
                
                <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })}/>
                {errors.email && <span className="error">Email is required</span>}
                
                <input name="date" ref={register({ required: true })}  placeholder="Date" />
                {errors.date && <span className="error">Date is required</span>}
                
                <input name="eventTitle" defaultValue={event.title} ref={register({ required: true })}/>
                {errors.eventTitle && <span className="error">Event Title is required</span>}

                <input name="Description" ref={register({ required: true })}  placeholder="Description"/>
                {errors.description && <span className="error">Description is required</span>}
                
                <input type="submit" value="Registration" className="btn btn-primary"/>
            </form>
        </div>
    );
};

export default Registration;