const request = require('supertest');

const server = 'http://localhost:3000/api';

describe('Route integration', () => {
        describe('/comments', () => {
            describe('GET', () => {
                it('responds with 200 status and text/html content type', () => {
                    return request(server)
                        .get('/comments')
                        .expect('Content-Type', /application\/json/)
                        .expect(200)
                })
            })
            describe('POST', () => {
                it('responds with 200 status and application/json content type', () => {
                    return request(server)
                        .post('/comments')
                        .expect('Content-Type', /application\/json/)
                        .expect(200)
                })
            })


            // describe('/createuser', () => {
            //     describe('POST', () => {
            //         it('responds with 200 status and application/json content type', () => {
            //             return request(server)
            //                 .post('/createuser')
            //                 .expect('Content-Type', /application\/json/)
            //                 .expect(200)
            //         })
            //     })

            // })

            describe('/userlogin', () => {
                describe('POST', () => {
                    it('responds with 200 status and application/json content type', () => {
                        return request(server)
                            .post('/userlogin')
                            .expect('Content-Type', /application\/json/)
                            .expect(200)
                    })
                })
            })

            describe('/pins', () => {
                describe('GET', () => {
                    it('responds with 200 status and text/html content type', () => {
                        return request(server)
                            .get('/pins')
                            .expect('Content-Type', /application\/json/)
                            .expect(200)
                    })
                })
            })
        })
})