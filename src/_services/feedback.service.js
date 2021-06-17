import config from 'config';
import { authHeader } from '../_helpers';

export const feedbackService = {
    submit,
    get
};

function submit(data) {
    data.dated = new Date();
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch(`${config.apiUrl}/feedback`, requestOptions)
        .then(handleResponse)
        .then(data => {
            return data;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function get(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/feedback`, requestOptions).then(handleResponse);
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}