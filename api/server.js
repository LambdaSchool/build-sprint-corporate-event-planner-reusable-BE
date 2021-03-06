const express = require('express')

const server = express();

const cors = require('cors');

const helmet = require('helmet');

const authRouter = require('./endpoints/auth/auth-router')

const authorize = require('./middleware/auth-middleware')

const userRouter = require("../api/endpoints/users/users-router")
const eventRouter = require("../api/endpoints/events/events-router")
const vendorRouter = require("../api/endpoints/vendors/vendors-router")
const shoppingListRouter = require("../api/endpoints/shoppingList/shoppingList-router")
const todoListRouter = require("../api/endpoints/todoList/todoList-router")

server.use(express.json());
server.use(helmet())
server.use(cors())
server.use('/api/auth', authRouter);
server.use(authorize)
server.use('/api/users', userRouter)
server.use('/api/events', eventRouter)
server.use('/api/vendors', vendorRouter)
server.use('/api/shopping', shoppingListRouter)
server.use('/api/todo', todoListRouter)

module.exports = server;