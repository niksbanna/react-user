import { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Form from './components/Form';
import Table from './components/Table';
import './App.css';
import UpdateUser from './components/UpdateUser';
import Home from './components/Home';

function App() {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState(1);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home users={users} />,
    },
    {
      path: "/form",
      element: <Form setUsers={setUsers} id={id} setId={setId} />,
    },
    {
      path: "/table",
      element: <Table users={users} />,
    },
    {
      path: "/updateUser/:id",
      element: <UpdateUser users={users} />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
