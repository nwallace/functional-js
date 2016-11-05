export default {

  validateSignUp(input) {
    let { username, password, passwordConfirmation } = input,
        errors = [];

    // Validate username
    if (!/\w/.test(username)) {
      errors.push("Username can't be blank");
    }
    if (username.length < 4) {
      errors.push("Username must be at least 4 characters");
    }
    if (username.length > 30) {
      errors.push("Username must be 30 characters or less");
    }

    // Validate password
    if (!/\w/.test(password)) {
      errors.push("Password can't be blank");
    }
    if (password.length < 8) {
      errors.push("Password must be at least 8 characters");
    }

    // Validate password confirmation
    if (passwordConfirmation !== password) {
      errors.push("Password confirmation doesn't match");
    }

    return errors;
  },
};

