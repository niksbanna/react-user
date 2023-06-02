import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function UpdateUser({ users }) {
    const { id } = useParams();
    const user = users.find((user) => user.id === parseInt(id));
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) navigate('/');
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/table');
    }

    const handleChange = (e) => {
        user[`${e.target.name}`] = e.target.value;
    }
    return (
        <div>
            <h1>UPDATE A USER</h1>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type='text' name='Name' onChange={handleChange} />
                <label>Email: </label>
                <input type='text' name='Email' onChange={handleChange} />
                <label>Phone: </label>
                <input type='text' name='Phone' onChange={handleChange} />
                <label>Address: </label>
                <input type='text' name='Address' onChange={handleChange} />
                <label>Password: </label>
                <input type='password' name='Password' onChange={handleChange} />
                <input type='submit' value='Submit' />
            </form>

        </div>
    )
}
