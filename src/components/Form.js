import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Form({ setUsers, id, setId }) {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        user.id = id;
        setId(id + 1);
        setUsers((prev) => [...prev, user]);
        navigate('/table');
        e.target.reset();
    }

    const handleChange = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <div>
            <h1>CREATE A USER</h1>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type='text' name='Name' onChange={handleChange} />
                <label>Email: </label>
                <input type='email' name='Email' onChange={handleChange} />
                <label>Phone: </label>
                <input type='text' name='Phone' onChange={handleChange} />
                <label>Address: </label>
                <input type='text' name='Address' onChange={handleChange} />
                <label>Password: </label>
                <input type='password' name='Password' onChange={handleChange} />
                <input type='submit' value='Submit' />
            </form>
            <Link to={'/table'}>Show Users</Link>


        </div>
    )
}