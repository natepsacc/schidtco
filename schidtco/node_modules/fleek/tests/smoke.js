'use strict';

let mocha = require('mocha');
let expect = require('chai').expect;

let fleek = require('../');

describe('Fleek', () => {
  it('should include fleek-context', () => expect(fleek.context).to.be.ok);
  it('should include fleek-validator', () => expect(fleek.validator).to.be.ok);
  it('should include fleek-router', () => expect(fleek.router).to.be.ok);
});
