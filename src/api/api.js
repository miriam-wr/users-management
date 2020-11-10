const BASE = 'https://test-api-server.herokuapp.com'

export async function login(loginDetails) {
    return await fetch(`${BASE}/login`, {
        method: "POST"
    },loginDetails).then(res =>
        res.json()
    );
}

export async function getUsers() {
    return await fetch(`${BASE}/users`, {
        method: "GET"
    }).then(res =>
        res.json()
    );
}

export async function getUserDetails(userId) {
    return await fetch(`${BASE}/users/${userId}`, {
        method: "GET"
    }).then(res =>
         res.json()
    );
}

export async function updateUserDetails(user) {
    return await fetch(`${BASE}/users/${user.id}`, {
        method: "POST"
    }, user)
    .then(res =>
        res.json()
    );
}