# A boilerplate for socket io typescript server


# Folder Structure

```
.
+-- node_modules
|   +-- *
+-- src
|   +-- __test__
|   +-- common
|   +-- controllers
|   +-- types
|
|   +-- index.ts	

```

## index.ts

the  **socket server** entry point

## common

application configurations and server instantiation

In this folder you can see:

- authorization.ts : Handle middleware for user/socket security checks
- socket.ts here we can register all our controller here and our socket server listerners
- We have app.ts, server.ts and config.ts for the express server and the configurations



## controllers

Application controllers/socket listeners an managers.


## __test__

Folder for application unit test.
to test : 

`npm test`

