import { useEffect, useState } from 'react';
import '../../Assets/css/Users.css';
import User from './User.js';
import Request from '../../Utils/Request.js';

function Users() { 
    const url = 'http://localhost:3000/api/users';
    let [stateUsers, setUsers] = useState([]);

    const loadUsers = async () => {
        Request(url, setUsers);
    }

    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <div className="Users container">
            <div className="user-header row">
                <div className="col-12">
                    <h4>Usuarios</h4>
                </div>
            </div>
            <div className="user-list row justify-content-start">
               {
                 stateUsers && stateUsers.map((user, idx) => {
                    return <User key={idx} user={user} />
                 })
               }
            </div>
        </div>
    )
}

export default Users;