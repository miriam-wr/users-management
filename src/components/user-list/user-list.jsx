import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { sortBy } from 'lodash'
import { setUserList } from "../../actions";
import { getUsers } from '../../api/api'
import User from './user'
import ColumnHeader from '../column-header/column-header'
import './user-list.scss'
import users from '../../reducers/users';

const UserList = () => {

    const [sorting, setSorting] = useState()
    const [filters, setFilters] = useState({
        global: '',
        idFrom: '',
        idTo: '',
        firstName: '',
        lastName: '',
        dateFrom: undefined,
        phone: ''
    })
    const dispatch = useDispatch()
    const userList = useSelector(state => state.users.userList)

    const allFilters = (user) => {
        return ('' + user.id + user.firstName + user.lastName + user.date + user.phone)
            .toLowerCase()
            .includes(filters.global)
            && (filters.idFrom == '' || user.id > Number(filters.idFrom))
            && (filters.idTo == '' || user.id < Number(filters.idTo))
            && user.firstName.includes(filters.firstName)
            && user.lastName.includes(filters.lastName)
            // && user.date > filters.dateFrom
            && user.phone.includes(filters.phone)
    }

    const handleChange = (name, value) => {
        setFilters({ ...filters, [name]: value })
    }

    const userSortedFilterdList = sortBy(userList, sorting)
        .filter(user => allFilters(user));

    const getUserList = () => {
        getUsers()
            .then(userList => {
                dispatch(
                    setUserList(userList));
            })
            .catch((err) => {
                console.log(err);
            });

    }

    useEffect(() => {
        if (!userList || userList.length == 0) {
            getUserList();
        }
    }, []);

    return (
        <section className="section">
            <div>
                <input type="text"
                    onChange={(e) => { handleChange('global', e.target.value) }}
                />
            </div>
            <div className="columns">
                <div id="app" className="column is-half is-offset-one-quarter">
                    <div className="panel">
                        <p className="panel-heading">Users</p>
                        <div className="panel-block has-text-centered">
                            <table className="user-list-table ">
                                <thead>
                                    <tr>
                                        <ColumnHeader
                                            handleClick={setSorting}
                                            handleChange={handleChange}
                                            text="ID"
                                            name="id"
                                            value={{from: filters.idFrom, to: filters.idTo}}
                                            type="number" />
                                        <ColumnHeader
                                            handleClick={setSorting}
                                            handleChange={handleChange}
                                            text="First Name"
                                            name="firstName"
                                            value={filters.firstName}
                                            type="string" />
                                        <ColumnHeader
                                            handleClick={setSorting}
                                            handleChange={handleChange}
                                            text="Last Name"
                                            name="lastName"
                                            value={filters.lastName}
                                            type="string" />
                                        <ColumnHeader
                                            handleClick={setSorting}
                                            handleChange={handleChange}
                                            text="Date"
                                            name="date"
                                            type="date" />
                                        <ColumnHeader
                                            handleClick={setSorting}
                                            handleChange={handleChange}
                                            text="Phone"
                                            name="phone"
                                            value={filters.phone}
                                            type="string" />
                                    </tr>
                                </thead>
                                <tbody>
                                    {userList && userSortedFilterdList.map((user, i) => {
                                        return <User key={i} index={i} user={user} />
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserList;