# Almabetter Backend Capstone Project - Get YouTube Subscribers
In this project, we used Node.js, Express.js and database MongoDB to GET all the subscriber's data from the data base, based on our conditions.  Used Postman to test and modify APIs

<img src="https://1000logos.net/wp-content/uploads/2021/04/YouTube-logo-768x432.png" alt="Alt text" title="Youtube-subscribers">

# Follow Below Steps to Use this project
Step-1. **Clone** or **Download zip** file in your system, then extract files and open up with VS code.

Step-2. **Install npm dependencies** using `npm install` command in VS code terminal.

Step-3. **Start the backend server** using `node src/index.js` command.

Step-4. **Use mongoDB cloud database** and create your new cluster and replace all DATABASE_URL from the project folders with your new cluster URL.

Step-5. **node src/createDatabase.js** Run this command to store static data into your database.

    
## We used HTTP GET request methods to search and get Users data from database.
1. GET http://localhost:3000/ = this is our first endpoint which shows home page with welcome note to the client.

2. GET http://localhost:3000/subscribers = in this endpoint clients will get subscribers data directly for mongodb cloud database which was stored by user, in the form of object array or JSON format. 

3. GET http://localhost:3000/subscribers/names = in this endpoint clients will (conditionally) get only name and subscribedChannel data from database collection called subscribers. if end point does't match with the specified one,then client will get **404 page not fount** error status code occurs. 

4. GET http://localhost:3000/subscribers/:_id = Here clients will (matching Id) get subscribers data  from database only if the params Id is matched with the database collections Id. if it does not match then **400 Bad request due to bad syntax** error status code occurs.

6. GET http://localhost:3000/anything = when the client use to enter wrong route which is not correct, then they will get an error message  **404 page not found** error status code.

**For Deploying This project** we used **Render flatform**, you can get it by searching in google.

## Authors

- [@Bapu-Gouda](https://github.com/bapugouda-biradar)
- [@Venkatesha](https://github.com/venkateshb007)

## Acknowledgements

- [node.js](https://nodejs.org/en/docs/)
- [express.js](http://expressjs.com/en/guide/routing.html)
- [mongodb-cloud](https://www.mongodb.com/docs/atlas/)
- [mongoose](https://mongoosejs.com/docs/guide.html)
- [nodemon](https://www.npmjs.com/package//nodemon)
