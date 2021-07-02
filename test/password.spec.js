const {checkPassword} = require('../src/password');
const { assert } = require('chai')

describe('verify password', () => {
    it('password must not be null', () => {
       
        assert.throws(() => {checkPassword(null)}, "Null error");
    })

    it('password length should be of 8 charachters', () => {
        assert.throws( () => {checkPassword("abscdd")}, "Length Error");
    }) 

    it('password should have atleast one uppercase letter', () => {
        assert.throws(() => {checkPassword("abcde789")}, "Upper Case error");
    })

    it('password must have a lowercase letter', () => {
        assert.throws(()=> {checkPassword("ABC990DC")}, "Lower Case error");
    })

    it('password must have a number', () => {
        assert.throws(() => {checkPassword("aBcdkeidk")}, "Number error");
    });
})