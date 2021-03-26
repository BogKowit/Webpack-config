import React from 'react';
import users from '../../data/users';
import UserListCreateStatus from './UserListCreateStatus';

const UserListCreate = () => (
    <div>
        <ul>
            {users.map((userData) => (
                <UserListCreateStatus userData={userData}/>
            ))}
        </ul>
    </div>
)

export default UserListCreate;