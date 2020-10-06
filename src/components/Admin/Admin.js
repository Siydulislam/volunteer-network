import React, { useState } from 'react';
import './Admin.css';
import brand from '../../logos/brand.png';
import AddEvent from '../AddEvent/AddEvent';
import RegisterList from '../RegisterList/RegisterList';

const Admin = () => {
    const [view, setView] = useState('volunteerList');
    return (
        <div className="row mt-5">
            <aside className="col-md-3">
                <img src={brand} alt="" style={{width: '250px'}} className="ml-5"/>
                <h4 onClick={() => setView('volunteerList')} className="mt-5 ml-5"><b>Register List</b></h4>
                <h4 onClick={() => setView('add-event')} className="ml-5"><b>Add Event</b></h4>
            </aside>
            <div className="col-md-9">
                <div>
                    {
                        view === 'volunteerList' ? <RegisterList></RegisterList> : <AddEvent></AddEvent>
                    }
                </div>
            </div>
        </div>
    );
};

export default Admin;