# Introduction

AdonisJS is a TypeScript-first web framework for Node.js. You can use it to create a full-stack web application or a JSON API server.

At the fundamental level, AdonisJS provides structure to your applications, configures a seamless TypeScript development environment, and offers a vast collection of well-maintained and extensively documented packages.

We envision teams using AdonisJS spending less time on trivial decisions like cherry-picking npm packages for every minor feature, writing glue code, debating for the perfect folder structure, and spending more time delivering real-world features critical for the business needs.

## Start

start dev container on Jetbrains or Visual studio code

after start, run this:

```bash
yarn start
```

## Tests

```bash
yarn test
```

## Docs

(Adonis)[https://docs.adonisjs.com/guides/introduction]

(ORM)[https://lucid.adonisjs.com/docs/introduction]

# Generate random key

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
