const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = require('../app');
const pool = require("../data/index")
// const app = express();




// const request = supertest(app);
describe('GET /api/todos', function() {
test("responds with correct status and payload", async function () {
    const response = await request(app).get("/api/userTodos");
    
    console.log(response.body); 
    expect(response.status).toEqual(200);expect(response.body)
    .toStrictEqual({
        success: true,
        payload: expect.any(Array)
    });
    expect(response.body.payload[0].to_do_title).toEqual('Get Milk');
    for (let i = 0; i < response.body.payload.length; i++){
        expect(response.body.payload[i])
        .toStrictEqual({
            // id: expect.any(Number),
            // task: expect.any(String),
            // completion_date: expect.any(String)
            todo_id: expect.any(Number),
            user_todo_id: expect.any(Number),
            to_do_title: expect.any(String),
            done: expect.any(Boolean),
            priority: expect.any(Number)
        })
        
    }

})
})







// afterAll(() => {
//     pool.end();
// })