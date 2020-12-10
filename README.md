
## Intro

This simple express app serves as RESTful data endpoint for todo CRUDs.
The data service is consumed by an Angular todo SPA: https://github.com/binlecode/example-todo-angular8

## Environment

Node version
- nodejs 12.14.1
- npm 6.13.4

Also need mongodb to be installed as application repository.

## Basic code structure

`server.js` => `todo.routes` => `todo.controller` => `todo.model` => `mongoose`

## API usage

Todo resource endpoint and methods:
```
GET /todos
GET /todos/:id
POST /todos
PUT /todos/:id
PATCH /todos/:id
DELETE /todos/:id
```

See `app/routes/todo.routes.js` for todo CRUDs REST endpoint details.

## Todos

- [ ] deployment with / without docker

## Dependency installation

Steps to install mongodb as application repository:

```bash
# need to tap brew for mongodb repo
brew tap mongodb/brew
# install (head is 4.2 at the moment)
brew install mongodb-community
# to start mongodb
brew services start mongodb-community
# to stop mongodb
brew services stop mongodb-community
# tail mongodb log
tail -f /usr/local/var/log/mongodb/mongo.log
# for GUI query support
brew cask install robo-3t
```

```bash
# check package.json for dependeny libs
npm install 
# in package.json, a `dev` script is defined to run nodemon
npm run dev
```


## reference tutorial
- https://zellwk.com/blog/crud-express-mongodb/
- https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/




