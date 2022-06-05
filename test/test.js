const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);

describe('/GET inmates', () => {
    it('it should GET all inmates', (done) => {
        chai.request(server)
            .get('/inmates')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});

describe('/POST inmates', () => {
    it('it should POST a inmate', (done) => {
        let inmate = {
            name: "John",
            age: "20",
            crime: "Theft",
            kin: "John",
            kinNumber: "0712345678",
            entryDate: "2020-01-01",
            releaseDate: "2020-01-01"
        }
        chai.request(server)
            .post('/inmates')
            .send(inmate)
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.should.have.property('age');
                res.body.should.have.property('crime');
                res.body.should.have.property('kin');
                res.body.should.have.property('kinNumber');
                res.body.should.have.property('entryDate');
                res.body.should.have.property('releaseDate');
                done();
            });
    });
});
     


