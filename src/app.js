const express = require("express");
const subscriberModel = require("./models/subscribers.js");
const app = express();

//express.json() is a built in middleware function in Express
//It parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json());

//home page that will show the HTML h1 tag details for the client.
app.get("/", async (request, response) => {
  response.send(
    `<h1> Hi, this is Venkatesha B - Cohort Raptor Batch </h1>
    <h4> Welcome to Almabetter Backend Capstone Project - Get Youtube Subscribers </h4>`
  );
});

//By hitting on this end point, client can see youtube subscribers details.
app.get("/subscribers", async (request, response) => {
  let data = await subscriberModel.find();
  response.send(data);
});


//In this end point, client can see only subscribers name and youtubechannel which they are subscribed.
app.get("/subscribers/names", async (request, response) => {
  let data = await subscriberModel.find().select("name , subscribedChannel");
  response.send(data);
});

//This is our last end point, where clients can see subscribers details based on the particular params Id.
//If param Id does not match with the subscribers Id, which are there in database then client will get following errors.
app.get("/subscribers/:_id", async (request, response) => {
  await subscriberModel
  .findById(request.params._id) //getting users details based on matching Id.
  .then((userData) => {
    //If Id does not match with database subscribers Id, then client will get following error.
    if (!userData) {
      response.status(400).send({
        message: Error(`Oops! 400 Bad request, User not exist with the given _id:${request.params._id}, Please check your Id`).message
      });
    } 
    //If Id mathced then client will get the API result.
    else {
      response.send(userData);
    }
  })

  // If Id formate is does not match with subscribers Id, then clients will get following error. 
  .catch(() => {
    response.status(400).json({
      message: `Oops! 400 Bad request, due to bad syntax... Please check your _id: ${request.params._id}`,
    });
  });
});

// use() function is used to mount the specified middleware function at the path which is being specified.
//Means, when client enters wrong endpoints then app.use() method will show errors as invalid route. 
app.use((request,response)=>{
  response.status(404).send({errorMessage:'Error status code: 404 - Page Not Found, Due to Invalid Route Action'})
})

module.exports = app;
