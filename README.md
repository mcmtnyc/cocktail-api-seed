# Project 5 - Cocktail API

A REST API built with Mongoose, MongoDB, Express, Javascript, HTML, CSS and RESTful routes that

## Description

This project uses Schemas and Models to take and format JSON information that is then seeded into a database. That database is then used to build an API that can be accessed through multiple link routes.

## Heroku Link

https://git.heroku.com/mel-t-cocktail-api.git
https://mel-t-cocktail-api.herokuapp.com/

## Instructions for local database manipulation:

1. Clone down this repo.
2. Install dependencies.
3. Seed the database.
4. Start server link.
5. Either view the API info through a browser for the seeded information or manipulate the information through apps like Postman or Insomnia.

### Clone repository

```
git clone https://github.com/mcmtnyc/Project-5-Cocktail-API.git
```

### Install Dependencies

```
npm install mongoose mongodb express
```

### Seed the data

```
npm run download
```

### Seed the data

```
npm run seed
```

### Connect to server

```
npm run start
```

## API Endpoints

#### IN BROWSER ONLY GET COMMANDS WILL WORK

in an app like Postman you can run the rest of the commands to manipulate the API.

| Method | Endpoint          | Description                                                       |
| ------ | ----------------- | ----------------------------------------------------------------- |
| GET    | /                 | This is the API root.                                             |
| GET    | /cocktails/       | Retrieves all cocktails                                           |
| GET    | /cocktails/:id    | Retrieves one cocktail by ID.                                     |
| GET    | /cocktails/:name  | Retrieves one cocktail by name.                                   |
| GET    | /cocktails/:glass | Retrieves one cocktail by glass.                                  |
| POST   | /cocktails        | Creates a Cocktail based on the JSON body submitted               |
| PUT    | /cocktails/:id    | Updates a DigCocktails's object file based on the JSON submitted. |
| DELETE | /cocktails/:id    | Deletes the Cocktail object by ID                                 |
