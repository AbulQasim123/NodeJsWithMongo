1:) Create the folder
2:) Run command npm init
3:) installed the required dependency

---------Organize your project like this--------
---------Project Structure----------
FolderName/
├── config/
│   └── connection.js  # MongoDB connection
├── controllers/
│   └── userController.js  # Logic for user operations
├── models/
│   └── userModel.js  # User schema
├── routes/
│   └── userRoutes.js  # Routes for user APIs
├── index.js  # Entry point


_____________Node.js Basics Q & A_____________

Q - What is Node.js?
A - Node.js is a JavaScript runtime env.. built on Chrome's V8 JavaScript engine that allows developers to execute JavaScript code on the server side.

Q - What is NodeJs used for ?
A - NodeJs is used for backend development.

Q - What is the main advantage of using Node.js?
A - Node.js is non-blocking and asynchronous, which makes it ideal for handling multiple requests simultaneously.

Q - What is the V8 engine?
A - V8 is Google's open-source JavaScript engine that compiles JavaScript into machine code.

Q - What language is Node.js written in?
A - Node.js is written in C, C++, and JavaScript.

Q - Is Node.js single-threaded?
A - Yes, Node.js is single-threaded with an event loop to handle multiple requests asynchronously.

_____________Node.js Architecture_____________

Q - What is the event loop in Node.js?
A - The event loop is a mechanism in Node.js that handles and processes asynchronous tasks, such as I/O operations.

Q - What is a callback function?
A - A callback function is a function passed as an argument to another function, which is executed after an asynchronous task completes.

Q - What is non-blocking I/O?
A - Non-blocking I/O allows Node.js to perform other operations while waiting for I/O tasks to complete.

Q - What is an event emitter in Node.js?
A - An event emitter is a module in Node.js that facilitates the handling of events by emitting and listening for events.

Q - What are streams in Node.js?
A - Streams are objects that enable reading or writing data piece-by-piece, rather than all at once.

_____________Core Modules_____________

Q - Name some core modules in Node.js.
A - http , fs , path , os , url

Q - What is the fs module used for?
A - The fs module is used for file system operations, such as reading and writing files.

Q - What does the http module do?
A - The http module enables Node.js to create an HTTP server and handle HTTP requests and responses.

Q - What is the purpose of the path module?
A - The path module provides utilities for working with file and directory paths.

Q - What is the os module?
A - The os module provides information about the operating system.

_____________Node.js Package Manager (NPM)_____________

Q - What is NPM?
A - NPM is the package manager for Node.js that allows developers to install, manage, and share packages.

Q - How do you install a package globally?
A - Use the command: npm install -g <package-name>

Q - How do you install a package locally?
A - Use the command: npm install <package-name>

Q - What is a package.json file?
A - A package.json file contains metadata about the project and its dependencies.

Q - How do you initialize a Node.js project with package.json?
A - Use the command: npm init

_____________Creating a Server_____________

Q - How do you create a simple HTTP server in Node.js?
A - Use the http module to create a server and handle HTTP requests and responses.

Q - What is the default port number for Node.js servers?
A - Commonly used ports are 3000, 8000, or 8080.

Q - How do you send JSON data in a Node.js server?
A - res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello, World!' }));

Q - What does res.end() do?
A - It signals the server that the response has been completed.

Q - How do you handle URL routing in a basic server?
A - if (req.url === '/about') {
        res.write('About Page');
    } else if (req.url === '/contact') {
        res.write('Contact Page');
    } else {
        res.write('Home Page');
    }

_____________Asynchronous Programming_____________

Q - What is the difference between synchronous and asynchronous code?
A - Synchronous code blocks execution until the task is complete, while asynchronous code allows other tasks to execute while waiting.
 
Q - What is a promise in Node.js?
A - A promise represents the eventual result of an asynchronous operation, with states: pending, resolved, or rejected.

Q - What is async/await?
A - async/await is a syntax for writing asynchronous code in a synchronous manner.

Q - How do you handle errors in promises?
A - Use .catch() to handle errors in promises.

Q - Give an example of an async/await function.
A - const fetchData = async () => {
        try {
            const data = await someAsyncFunction();
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    };

_____________Express.js Framework_____________

Q - What is Express.js?
A - Express.js is a web application framework for Node.js that simplifies server creation and routing.

Q - How do you install Express.js?
A - Use the command: npm install express

Q - How do you create an Express server?
A - const express = require('express');
    const app = express();
    app.get('/', (req, res) => res.send('Hello, World!'));
    app.listen(3000, () => console.log('Server running on port 3000'));

Q - How do you handle POST requests in Express?
A - app.post('/submit', (req, res) => {
        res.send('Data received');
    });

Q - What is middleware in Express?
A - Middleware functions are functions that have access to the request, response, and next objects in the application lifecycle.

_____________Database Integration_____________

Q - Which databases can you use with Node.js?
A - MongoDB, MySQL, PostgreSQL, SQLite, etc.

Q - How do you connect to MongoDB in Node.js?
A - Use the mongoose library:
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true });

Q - What is Mongoose?
A - Mongoose is an ODM (Object Data Modeling) library for MongoDB.

Q - How do you define a schema in Mongoose?
A - const schema = new mongoose.Schema({ name: String, age: Number });

Q - How do you create a model in Mongoose?
A - const Model = mongoose.model('CollectionName', schema);

_____________Error Handling_____________

Q - How do you handle errors in Node.js?
A - Use try-catch blocks or error-handling middleware.

Q - What is the global error object in Node.js?
A - The Error object is used to represent errors in Node.js.

Q - How do you emit an error in Node.js?
A - const EventEmitter = require('events');
    const emitter = new EventEmitter();
    emitter.emit('error', new Error('Something went wrong'));

Q - What is a common HTTP status code for errors?
A - 400: Bad Request, 404: Not Found, 500: Internal Server Error

Q - How do you create custom error messages?
A - throw new Error('Custom error message');

_____________Best Practices_____________

Q - What is linting in Node.js?
A - Linting is the process of analyzing code to detect errors and enforce coding standards.

Q - What is environment configuration?
A - Environment configuration involves using .env files to manage sensitive data like API keys and database credentials.

Q - Why use process.env in Node.js?
A - process.env allows you to access environment variables.

Q - What is clustering in Node.js?
A - Clustering is a way to utilize multiple CPU cores by creating child processes.

Q - How do you debug a Node.js application?
A - Use tools like node --inspect, console.log, or VSCode's debugger.