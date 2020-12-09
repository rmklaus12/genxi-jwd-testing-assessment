// an Api class that calls a real api to get data. This is only used to demonstrate how to use a spy 
// to prevent calling a real API. 

const Api = {
    login: (email, password) => {
        return fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(response => response.json());
    }
}