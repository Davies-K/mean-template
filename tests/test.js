process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../app');
const mongoose = require("mongoose");
const User = require("../api/users/model");

var Cookies;
chai.use(chaiHttp);

describe('Users', function() {
    User.collection.drop();

    it('should create a new user POST', function (done) {
       chai.request(server)
           .post('/api/users')
           .send({'email': 'test@test.com', 'username': 'testuser', 'password': 'testpassword'})
           .end(function (err, res) {
               res.should.have.status(200);
               res.should.be.json;
               res.body.should.be.a('object');
               res.body.should.have.property('email');
               res.body.should.have.property('username');
               done();
           });
    });

    it('should authenticate the user POST', function (done) {
       chai.request(server)
           .post('/api/login')
           .send({'email': 'test@test.com', 'password': 'testpassword'})
           .end(function (err, res) {
               res.should.have.status(200);
               res.should.be.json;
               res.body.should.be.a('object');
               res.body.should.have.property('message');
               res.body.should.have.property('userInfo');
               res.body.should.have.property('expiresAt');
               Cookies = res.headers['set-cookie'].pop().split(';')[0];
               done();
           });
    });
});
