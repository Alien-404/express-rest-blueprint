## Node.js Express REST API Blueprint

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This repository provides a blueprint for a Node.js Express REST API with several features. Please read the documentation carefully to understand how to use and customize this blueprint.

## Features

1.  **Middleware Error Handling:**
    - Includes a middleware for handling errors in a structured way.
2.  **Nodemailer Integration:**
    - Utilizes Nodemailer for email sending functionality.
    - Note: Before using, make sure to provide your Gmail email and password in the configuration.
3.  **Joi Validations:**
    - Implements Joi for request payload validation.
4.  **EJS Template:**
    - Utilizes EJS templates for rendering email content.

## Folder Structure

**src/**

- **config/**
  - **s3.config.js**: Configuration for S3 object storage.
- **controllers/**
  - **example.controller.js**: Example endpoint controller.
- **debug/**
  - Testing area for functions and mailer. (DO NOT PUSH TO REPO)
- **routes/**
  - **api.routes.js**: List of API endpoints.
- **utils/**
  - **lib/**
    - **jwt.libjs**: JWT library.
    - **mailer.lib.js**: Mailer utility.
  - **validations/**
    - **api.schema.js**: Schema validations for API.
- **views/template**
  - **emailTemplate.ejs**: EJS template for emails.

🚀 © 2024 [Rico](https://www.rinaru.com/) \- Crafting Awesome Node.js Express APIs

Connect on [LinkedIn](https://www.linkedin.com/in/rico-rinaru/) | Explore [GitHub](https://github.com/Alien-404)
