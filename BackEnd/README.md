# Wedding Planner Application (Backend)

This is the backend for a wedding planner application built using Node.js and MongoDB. It provides RESTful APIs to manage users and wedding venues. The application is designed with security, performance, and scalability in mind, making it ready for production deployment.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Testing with Postman](#testing-with-postman)
- [Deployment](#deployment)
- [Logging and Monitoring](#logging-and-monitoring)
- [Contributing](#contributing)
- [License](#license)

## Features
- User Authentication and Authorization
- CRUD Operations for Users and Venues
- Secure Password Handling with Bcrypt
- JWT-based Authentication
- Input Validation
- Error Handling Middleware
- Logging with Winston
- API Documentation with Swagger
- Performance Optimization with Compression and Helmet

## Installation

### Prerequisites
- Node.js v20.17.0 or later
- MongoDB

## Install Dependencies
```bash
- npm install
```
## Environment Variables
- Create a .env file in the root directory and add the following environment variables:
- PORT: The port number on which the server will run .
- MONGO_URI: The MongoDB connection string.
- JWT_SECRET: A secret key for signing JWT toke




