import React from 'react'
import { Link } from 'react-router-dom'

export default function Home({ users }) {
    return (
        <div>
            <h1>CREATE A USER</h1>
            <Link to={'/form'}>GO</Link> &nbsp;
            <h1>VIEW ALL USERS</h1>
            <Link to={'/table'}>GO</Link>
        </div>
    )
}
