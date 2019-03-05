process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../app');
const mongoose = require("mongoose");
const User = require("../api/users/model");
const expect = chai.expect;

// Redis related imports
const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);

chai.use(chaiHttp);


describe('Auth flow', function() {
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

    it('should authenticate and logout the user POST', function (done) {
        const agent = chai.request.agent(server);

        agent
           .post('/api/login')
           .send({'email': 'test@test.com', 'password': 'testpassword'})
           .then(function (res) {
               expect(res).to.have.cookie('token');

               return agent.post('/api/logout')
                   .then(function (res) {
                       expect(res).to.have.status(200);
                       done();
                   });
           });
    });

});
