import { humanize } from './utilities';

var makeErrorDetector = function(errorMsg, detectorTest) {
  return function(input) {
    if (detectorTest(input)) {
      return errorMsg;
    } else {
      return null;
    }
  };
};

var makeIsBlankDetector = function(field) {
  return makeErrorDetector(humanize(field) + " can't be blank", function(input) {
    return !/\w/.test(input[field]);
  });
};
var makeIsShorterThanDetector = function(field, minLength) {
  return makeErrorDetector(humanize(field) + " must be at least " + minLength + " characters", function(input) {
    return input[field].length < minLength;
  });
};

var signUpErrorDetectors = [
  makeIsBlankDetector("username"),
  makeIsShorterThanDetector("username", 4),
  makeErrorDetector("Username must be 30 characters or less", function(input) {
    return input.username.length > 30;
  }),
  makeIsBlankDetector("password"),
  makeIsShorterThanDetector("password", 8),
  makeErrorDetector("Password confirmation doesn't match", function(input) {
    return input.password !== input.passwordConfirmation;
  }),
];

export default {
  validateSignUp(input) {
    let errors = [];
    for (let i=0; i < signUpErrorDetectors.length; i++) {
      let errorMsg = signUpErrorDetectors[i](input);
      if (errorMsg) {
        errors.push(errorMsg);
      }
    }
    return errors;
  },
};
