describe('login', () => {
    describe('when the user logs in successfully', () => {
        it('should resolve a token', () => {
            const response = {
                token: '123'
            }
            const loginValue = new Promise((resolve, reject) => {
                resolve(response)
            })
            spyOn(Api, 'login').and.returnValue(loginValue);

            return expectAsync(login('test', 'test')).toBeResolvedTo(response.token)
        })
    })

    describe('when the user users an incorrect email', () => {
        it('should reject with an error message', () => {
            const response = {
                error: 'user not found'
            };
            const loginValue = new Promise((resolve, reject) => {
                resolve(response)
            })
            spyOn(Api, 'login').and.returnValue(loginValue)
            return expectAsync(login('test', 'test'))
                .toBeRejectedWithError('Oops! Incorrect username or password. Check your details and try again.')
        })
    })

    describe('when a password is not passed to login', () => {
        it('should reject with an error message', () => {
            const response = {
                error: 'Missing password'
            };
            const passwordValue = new Promise((resolve, reject) => {
                resolve(response)
            })
            spyOn(Api, 'login').and.returnValue(passwordValue)
            return expectAsync(login('test', 'test'))
                .toBeRejectedWithError('Oops! Missing password, make sure to fill in your password and try again.')
        })
    })
})

describe('clickButton', () => {
    // test for when user logs in successfully
    describe('when the user logs in successfully', () => {
            // create variable for previousEmail for email reset
            // create variable for previousPassword for password reset
            let previousEmail;
            let previousPassword;

            // create beforeEach() function for test email and password creation
            beforeEach(() => {
                // set previous variables with test data
                previousEmail = loginEmail.value;
                previousPassword = loginPassword.value;
                loginEmail.value = 'test';
                loginPassword.value = 'test';
                // create test token id and response object expected from the promise returned by Api.login()
                const response = {
                    token: '123'
                };
                const loginValue = new Promise((resolve, reject) => {
                        resolve(response);
                    })
                    // use a spy to modify Api.login() to return promise instead of calling the real API
                spyOn(Api, 'login').and.returnValue(loginValue);
                // the return statement stops the execution of the function and returns a value from the function
                return clickButton();
            })

            // create afterEach() function for email and password reset
            afterEach(() => {
                    loginEmail.value = previousEmail;
                    loginPassword.value = previousPassword;
                })
                // test for email and password reset back to previousEmail
            it('should reset the login email', () => {
                expect(loginEmail.value).toBe('');
            });
            it('should reset the login password', () => {
                expect(loginPassword.value).toBe('');
            });
            it('should update the login message with the token', () => {
                expect(loginMessage.innerText).toBe('Logged in with token 123');
            })
        })
        // test for when user enters an incorrect username
    describe('when the user uses an incorrect username', () => {
        // it should update the login message with the correct error
        it('should update the login message with the correct error', () => {
            // create variable for error response
            const response = {
                error: 'user not found'
            };
            // create new Promise for loginValue and save to variable
            const loginValue = new Promise((resolve, reject) => {
                    resolve(response);
                })
                // use a spy to modify Api.login() to return promise instead of calling the real API
            spyOn(Api, 'login').and.returnValue(loginValue);
            // expect error message to be returned 'Oops! Incorrect username or password. Check your details and try again.'
            return clickButton().then(() => {
                expect(loginMessage.innerText).toBe('Oops! Incorrect username or password. Check your details and try again.')
            })
        })
    })

    // test for when user does not include a password
    describe('when the user does not include a password', () => {
        // it should update the login message with the correct error
        it('should update the login message with the correct error', () => {
            // create variable for error response
            const response = {
                error: 'Missing password'
            };
            // create new Promise for loginValue and save to variable
            const loginValue = new Promise((resolve, reject) => {
                    resolve(response);
                })
                // expect error message to be returned 'Oops! Missing password, make sure to fill in your password and try again.'
            spyOn(Api, 'login').and.returnValue(loginValue);
            return clickButton().then(() => {
                expect(loginMessage.innerText).toBe('Oops! Missing password, make sure to fill in your password and try again.')
            })
        });
    })
});