# Fleek

[![Build Status](https://travis-ci.org/fleekjs/fleek.svg?branch=master)](https://travis-ci.org/fleekjs/fleek)

Unifying library for the fleek framework. Uses [koa2](https://github.com/koajs/koa/tree/v2.x) as a base to leverage swagger documentation and rapidly build documentation driven code.

Requirements:
- Node >= 6.0.0

# Usage

```
npm install --save fleek
```

This package is to be used as middleware for [Koa2](https://github.com/koajs/koa/tree/v2.x) to aggregate functionality from the various fleek components:
- [fleek-context](https://github.com/fleekjs/fleek-context) - takes koa requests and binds the appropriate swagger path data using [routington](https://www.npmjs.com/package/routington)
- [fleek-validator](https://github.com/fleekjs/fleek-validator) - uses the fleek/swagger context to validate incoming requests
- [fleek-router](https://github.com/fleekjs/fleek-router) - uses fleek/swagger context to route to provided controllers/operations

# Examples

For a swagger example, refer to the test [swagger json](https://github.com/fleekjs/fleek-router/blob/master/tests/swagger.json)

```javascript
const Koa = require('koa');
const fleek = require('fleek');

const SWAGGER = require('./swagger.json');

let app = new Koa();

// Parse the request and bind `context.fleek.context` to the appropriate path+method config using the provided swagger
app.use(fleek.context(SWAGGER));

// Validate the request using the fleek context
app.use(fleek.validator().catch((ctx, next) => {
  ctx.body = ctx.fleek.validation; // return the specific failures to the client
  ctx.status = 400;
  return Promise.resolve();
}));

// If `ctx.fleek.context.tags` contains the tag `authenticated`, athenticate the request
app.use(fleek.router.tag('authenticated', (ctx, next) => {
  if (someAuthFunction(ctx)) {
    ctx.body = 'Not authorized';
    ctx.status = 401;
    return Promise.resolve();
  } else return next();
}))

// Route to controllers using `ctx.fleek.constext.tag[]` which export CRUD methods, and any specially named exported function using operationId
app.use(router.controllers(`${__driname}/controllers`));
// controllers/
//  ├── bar.js [exports: get(ctx, next)]
//  ├── foo
//  |    └── biz.js [exports: post(ctx, next)]
//  └── */** [exports: createBar(ctx, next)]

app.listen(3000);
```

## Authors

- [John Hofrichter](https://github.com/johnhof)

_Built and maintained with [<img width="15px" src="http://hart.com/wp-content/themes/hart/img/hart_logo.svg">](http://hart.com/) by the [Hart](http://hart.com/) team._
