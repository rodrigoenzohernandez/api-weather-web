const index = require("../app.js");

const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", index);

test("CP01 - Test index route", () => {
  request(app)
    .get("/")
    .expect(200);
});

test("CP02 - test location route", () => {
  request(app)
    .get("/location")
    .expect(200);
}); 

test("CP03 - test current route", async () => {
  request(app)
    .get("/current")
    .expect(200); 
}); 

test("CP04 - test current route with city", async () => {
  request(app)
    .get("/current/Barracas")
    .expect(200); 
}); 

test("CP05 - test forecast route", async () => {
  request(app)
    .get("/forecast")
    .expect(200);    
}); 

test("CP06 - test forecast route with city", async () => {
  request(app)
    .get("/forecast")
    .expect(200);    
}); 

test("CP07 - force wrong route", async () => {
  request(app)
    .get("/165165")
    .expect(404);    
}); 