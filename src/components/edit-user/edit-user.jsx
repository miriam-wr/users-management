import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { getUserDetails as getUserDetailsAPI, updateUserDetails } from '../../api/api';
import { updateUser } from '../../actions/index'

const EditUser = (props) => {

    const [userDetails, setUserDetails] = useState({})
    const history = useHistory()
    const dispatch = useDispatch()

    const getUserDetails = (userId) => {

        getUserDetailsAPI(userId)
            .then(user => {
                setUserDetails(user)
            })
            .catch((err) => {
                console.log(err);
            });

    }

    useEffect(() => {
        const userId = props.match.params.id;
        getUserDetails(userId);
    }, []);

    const handleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.id]: e.target.value })
    }

    const myActionCreator = (action) => {
        return new Promise((resolve, reject) => {
            dispatch(action())
            resolve()
        });
    }

    const handleSubmit = () => {
        updateUserDetails(userDetails)
            .then(
                () => {
                    myActionCreator(() => updateUser(userDetails)).then(
                        () => {
                            history.push('/home');
                        }
                    );

                }
            )

    }

    return (
        <form>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName"
                    type="text"
                    defaultValue={userDetails.firstName}
                    onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName"
                    type="text"
                    defaultValue={userDetails.lastName}
                    onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email"
                    type="text"
                    defaultValue={userDetails.email}
                    onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="date">Date</label>
                <input id="date"
                    type="text"
                    defaultValue={userDetails.date}
                    onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input id="phone"
                    type="text"
                    defaultValue={userDetails.phone}
                    onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="account">Account</label>
                <input id="account"
                    type="text"
                    defaultValue={userDetails.account}
                    onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="accountName">Account Name </label>
                <input id="accountName"
                    type="text"
                    defaultValue={userDetails.accountName}
                    onChange={handleChange} />
            </div>

            <input type="button" value="update" onClick={handleSubmit} />

        </form>


    )
}

export default EditUser;