const request = require('supertest');
const express = require('express');
const app = express();

app.get('/users', (req,res)=>{
  res.json({users:["Rishabh"]});
});

test("GET /users", async ()=>{
  const res = await request(app).get('/users');
  expect(res.statusCode).toBe(200);
});
