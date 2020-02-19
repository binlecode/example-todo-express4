
## intro

This simple express app serves as RESTful data endpoint for todo CRUDs.
The data service is consumed by an Angular todo SPA: https://github.com/binlecode/example-todo-angular8


Node version
- nodejs 12.14.1
- npm 6.13.4

need to install mongodb as application repository:

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
npm install express body-parser mongodb mongoose --save
npm install nodemon --save-dev
# add cors support
npm install cors --save
# in package.json, a `dev` script is defined to run nodemon
npm run dev
```

## basic code structure

`server.js` => `todo.routes` => `todo.controller` => `todo.model` => `mongoose`





## reference tutorial
- https://zellwk.com/blog/crud-express-mongodb/
- https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/




