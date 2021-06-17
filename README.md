# Tic-Tac-Toe-ReactJs

The purpose of our project is to develop and implement a working Tic-Tac-Toe web application using ReactJS. It uses WebStorage API for storing user data.

Reactstrap, react router dom and react redux are used as external libraries.

## About application
Tic-tac-toe is a simple and fun two player game in which the players take turns putting X's or O's on a 3x3 grid. The first player to get 3 marks in a row (vertically, horizontally, or diagonally) wins the game, and the other loses the game.

## How to start?
### Prerequisites
Make sure you have installed all of the following prerequisites on your development machine:
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.

### Install
The boilerplate comes pre-bundled with a `package.json` files that contain the list of modules you need to start your application.

To install the dependencies, run this in the application folder from the command-line:

```bash
$ npm install
```
### Running Application
Run application by using npm in main folder:

```bash
$ npm start
```

Your application should run on port 8080 with the *development* environment configuration, so in your browser just go to [http://localhost:8080](http://localhost:8080)

### Build
```bash
$ npm run-script build
```

### Fake-API
This application initializes a fake api which is written in **src\_helpers\fake-backend.js** which provides data based on custom fetch logic so that when client side hits this api in REST API fashion, it would serve the request with the data required and using localStorage javascript API to store data locally in the browser.
