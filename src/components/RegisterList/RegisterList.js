import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './RegisterList.css';

const RegisterList = () => {
    const { registerKey } = useParams();
    const [registers, setRegisters] = useState([])
    const [deleteRegister, setDeleteRegister] = useState([]);

    useEffect(() => {
        fetch('https://frozen-dusk-49984.herokuapp.com/registerList')
            .then(res => res.json())
            .then(data => {
                setRegisters(data)
            })
    }, [])

    const handleDelete = (_id) => {
        const selectedRegister = deleteRegister.filter(event => registerKey !== _id)
        fetch(`https://frozen-dusk-49984.herokuapp.com/delete/${registerKey}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setDeleteRegister(selectedRegister);
                }
            })
    }

    return (
        <div>
            <h3>Volunteer Reister List</h3>
            <div className="jumbotron">
                <table >
                    <th>Name</th>
                    <th>Email ID</th>
                    <th>Registration Date</th>
                    <th>Volunteer Activity</th>
                    <th>Action</th>
                </table>
                {
                    registers.map(register => 
                        <table>
                            <th>{register.name}</th>
                            <th>{register.email}</th>
                            <th>{register.date}</th>
                            <th>{register.title}</th>
                            <button onClick={() => handleDelete(registerKey)} className="btn btn-outline-danger">Delete</button>
                        </table>
                    )
                }
            </div>
        </div>
    );
};

export default RegisterList;