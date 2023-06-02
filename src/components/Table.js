import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Table({ users }) {

    const [selectedUser, setSelectedUser] = useState(null);
    const navigate = useNavigate();

    const handleViewDetails = (user) => {
        setSelectedUser(user);
    };

    const handleCloseModal = () => {
        setSelectedUser(null);
    };

    const handleDeleteUser = () => {
        const index = users.indexOf(selectedUser);
        if (index > -1) {
            users.splice(index, 1);
        }
        setSelectedUser(null);
    }

    return (
        <div>
            <Link to={'/form'}>Create User</Link> &nbsp;
            <Link to={'/'}>Home</Link>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Show Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, i) => {
                            return (
                                <tr key={i}>
                                    <td>{user.Name}</td>
                                    <td><button onClick={() => handleViewDetails(user)}>View</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {selectedUser && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>User Details</h2>
                        <p>Id: {selectedUser.id}</p>
                        <p>Name: {selectedUser.Name}</p>
                        <p>Email: {selectedUser.Email}</p>
                        <p>Phone: {selectedUser.Phone}</p>
                        <p>Address: {selectedUser.Address}</p>
                        <p>Password: {selectedUser.Password}</p>
                        <button onClick={() => navigate(`/updateUser/${selectedUser.id}`)}>Update</button>
                        <button onClick={handleDeleteUser}>Delete</button>
                        <button onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    )
}