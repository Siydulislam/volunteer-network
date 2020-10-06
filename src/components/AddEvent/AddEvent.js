import React, { useState } from 'react';
import './AddEvent.css';

const AddEvent = () => {
    const [inputField, setInputField] = useState({});
    const handleAddEvent = () => {
        fetch('https://frozen-dusk-49984.herokuapp.com/addEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: inputField })
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedCount) {
                alert("Event has been Added Successfully!!!")
            }
        })
    }
    return (
        <div>
            <h3>Add Event</h3>
            <div className="jumbotron">
                <form className="form-style">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Event Title</label>
                            <input onChange={e => setInputField(e.target.value)} type="text" className="form-control" placeholder="Enter Title"/>
                        </div>
                        <div className="col">
                            <label htmlFor="">Event Date</label>
                            <input onChange={e => setInputField(e.target.value)} type="text" className="form-control" placeholder="Enter Date"/>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <label htmlFor="">Description</label>
                            <textarea onChange={e => setInputField(e.target.value)} type="text" className="form-control" placeholder="Enter Description"/>
                        </div>
                        <div className="form-group col">
                            <label for="exampleFormControlFile1">Upload Image</label>
                            <input onChange={e => setInputField(e.target.value)} type="file" className="form-control-file" id="exampleFormControlFile1"/>
                        </div>
                    </div>
                </form>
                <button className="mt-3 btn btn-primary" onClick={handleAddEvent}>Submit</button>
            </div>
        </div>
    );
};

export default AddEvent;