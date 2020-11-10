import React from 'react';
import { useHistory } from 'react-router';

const User = ({ user }) => {

    const history = useHistory()

    const handleClick = () => {
        history.push('/edit/'+user.id);
    }

    return (
        <tr onClick={handleClick}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.date}</td>
            <td>{user.phone}</td>
        </tr>
    )
};

export default User;