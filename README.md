# Countries-api
This application provides API for CRUD operations on list of countries along with currency, capital and language.

# Description
This application demonstrates a node-express-mongo way of creating APIs
REST (Representational State Transfer) is an architectural style for developing web services using the HTTP request.
GET requests are for lookups, 
PUT requests are for mutation, 
POST requests are for creation
and DELETE requests are for deletion

# Project Structure Explaination
1. models - This package contains the server what information our countries objects are going to contain and it also  represents 
database schema 
2. routes - Each route will determine which method to execute when they are invoked by a client, 
depending on which HTTP method is specified.
In our application, we will have routes that do the following:
Get all countries - GET
Get a specific country - GET with a id to find country
Create a country - POST
Update an existing country - PUT
Delete a country - DELETE
3. controllers - Defines the functions that each route will invoke in countriesController.js
4. app.js - App file to tie everything together, we'll write our app.js file which tells the server where the routes are, 
and what middleware functions to use. These are functions that have access to the request and response objects,
so they can be used to handle errors and to parse request data.

# Components Used
A brief explaination for modules used:
1. Express is what we'll use to bootstrap the web server
2. Mongoose interacts with the Atlas MongoDB database
3. Nodemon automatically restarts the application when file changes are detected
4. Dotenv is used to create a .env file that helps us to store the env variables like connection strings, username or password
and loads environment variables from a .env file into process.env


