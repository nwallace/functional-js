'use strict';

import { validateSignUp } from '../src/_scripts/validations';

describe('Sign up validations', function() {

  let validInput = {
    username: 'phillipjfry',
    password: '1c3Cr34Ms0uP',
    passwordConfirmation: '1c3Cr34Ms0uP',
  };

  let errorsWith = function(overrides) {
    let input = Object.assign({}, validInput, overrides);
    return validateSignUp(input);
  };

  it('has no errors given valid input', () => {
    expect(errorsWith({})).toEqual([]);
  });

  it('allows 8 character passwords', () => {
    expect(errorsWith({password: 'abcdefgh', passwordConfirmation: 'abcdefgh'}))
      .toEqual([]);
  });

  it('allows 4 character usernames', () => {
    expect(errorsWith({username: 'abcd'})).toEqual([]);
  });

  [
    ["username be present", {username: ''}, "Username can't be blank"],
    ["username be 4 characters", {username: 'abc'}, "Username must be at least 4 characters"],
    ["username be less than 31 characters", {username: 'abcdefghijklmnopqrstuvwxyzABCDE'}, "Username must be 30 characters or less"],
    ["password be present", {password: ''}, "Password can't be blank"],
    ["password be 8 characters", {password: 'abcdefg'}, "Password must be at least 8 characters"],
    ["password confirmation match", {passwordConfirmation: '1c3Cr34M'}, "Password confirmation doesn't match"],
  ].forEach(([description, overrides, error]) => {
    it(`requires ${description}`, () => {
      expect(errorsWith(overrides)).toEqual(jasmine.arrayContaining([error]));
    });
  });
});
