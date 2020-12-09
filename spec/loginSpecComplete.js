describe('login', () => {
  describe('when the user logs in successfully', () => {
    it('should resolve a token', () => {
      const response = { token: '123' };
      const loginValue = new Promise((resolve, reject) => {
        resolve(response);
      });
      spyOn(Api, 'login').and.returnValue(loginValue);
      return expectAsync(login('test', 'test')).toBeResolvedTo(response.token);
    });
  });
  describe('when the user uses an incorrect email', () => {
    it('should reject with an error message', () => {
      const response = { error: 'user not found' };
      const loginValue = new Promise((resolve, reject) => {
        resolve(response);
      });
      spyOn(Api, 'login').and.returnValue(loginValue);
      return expectAsync(login('test', 'test'))
        .toBeRejectedWithError('Oops! Incorrect username or password. Check your details and try again.');
    });
  });
  describe('when the user does not enter a password', () => {
    it('should reject with an error message', () => {
      const response = { error: 'Missing password' };
      const loginValue = new Promise((resolve, reject) => {
        resolve(response);
      });
      spyOn(Api, 'login').and.returnValue(loginValue);
      return expectAsync(login('test', 'test'))
        .toBeRejectedWithError('Oops! Missing password, make sure to fill in your password and try again.');
    });
  });
});
describe('clickButton', () => {
  describe('when the user logs in successfully', () => {
    let previousEmail;
    let previousPassword;
    beforeEach(() => {
      previousEmail = loginEmail.value;
      previousPassword = loginPassword.value;
      loginEmail.value = 'test';
      loginPassword.value = 'test';
      const response = { token: '123' };
      const loginValue = new Promise((resolve, reject) => {
        resolve(response);
      });
      spyOn(Api, 'login').and.returnValue(loginValue);
      return clickButton();
    });
    afterEach(() => {
      loginEmail.value = previousEmail;
      loginPassword.value = previousPassword;
    });
    it('should reset the login email', () => {
      expect(loginEmail.value).toBe('');
    });
    it('should reset the login password', () => {
      expect(loginPassword.value).toBe('');
    });
    it('should update the login message with the token', () => {
      expect(loginMessage.innerText).toBe('Logged in with token 123');
    });
  });
  describe('when the user uses an incorrect username', () => {
    it('should update the login message with the correct error', () => {
      const response = { error: 'user not found' };
      const loginValue = new Promise((resolve, reject) => {
        resolve(response);
      });
      spyOn(Api, 'login').and.returnValue(loginValue);
      return clickButton().then(() => {
        expect(loginMessage.innerText).toBe('Oops! Incorrect username or password. Check your details and try again.');
      });
    });
  });
  describe('when the user does not include a password', () => {
    it('should update the login message with the correct error', () => {
      const response = { error: 'Missing password' };
      const loginValue = new Promise((resolve, reject) => {
        resolve(response);
      });
      spyOn(Api, 'login').and.returnValue(loginValue);
      return clickButton().then(() => {
        expect(loginMessage.innerText).toBe('Oops! Missing password, make sure to fill in your password and try again.');
      });
    });
  });
});



// Nick used beforeEach and afterEach to clean up the code, could have whats in
// there before and after the contents of the it functions
// so it would be something like

    // it('should reset the login email', () => {
    //   previousEmail = loginEmail.value;
    //   previousPassword = loginPassword.value;
    //   loginEmail.value = 'test';
    //   loginPassword.value = 'test';
    //   const response = { token: '123' };
    //   const loginValue = new Promise((resolve, reject) => {
    //     resolve(response);
    //   });
    //   spyOn(Api, 'login').and.returnValue(loginValue);
    //   return clickButton().then(() => {
    //     expect(loginEmail.value).toBe('');
    //     loginEmail.value = previousEmail;
    //     loginPassword.value = previousPassword;
    //   });
    // });