
Script scheduler

A project based on agenda to run periodic and triggered jobs. 
Motivation for the project was to create something that would allow programmers full scripting control while the only thing that needs to be added is an extra typescript alghoritm to the jobs folder (not completely true, the file needs to be added to ioc config).

Features:
- Typescript (Typings, Async/Await etc.)
- Code quality check with TSLint
- Dependency injection with InversifyJS
- Unit testing / Code coverage with Mocha,Chai and Istanbul
- Visual Studio Code tasks and debugging

I personally use this project because I like to have more control then I have with OSIsoft Asset Framework Analytics.
To be able to mimic some of the functionality I use agenda to be able to run "periodic analyses". I also added the ability to perform "triggered analyses" with the use of a WebSocket channel.
For data access I added a typescript PIWebAPI client with typings (2016R2+) to the project. Although this can be used directly, an injectable service was added handling some basic functions.

Requirements:
Current version of Node.js (https://nodejs.org/en/) and make sure you have latest version of npm and add node.js folder to System Variables Path so that you can execute "node" from command prompt (for example C:\Program Files\nodejs\)
Current version of MongoDB (https://www.mongodb.com/download-center#community) and add bin directory to System Variable Path so that you can execute "mongod" from command prompt (for example "C:\Program Files\MongoDB\Server\3.4\bin")
Current version of Visual Studio Code (https://code.visualstudio.com/)

Installation:
Download project from github.
Open folder in Visual Studio Code.
Ctrl+ to open integrated terminal
Execute "npm install" to install all required node modules in node_modules folder
Execute "npm run-script build" to build the project or Ctrl + Shift + B
Execute "mongod" in one terminal
Execute "npm start" in other terminal or click on launch program from debugger and set breakpoints (Ctrl + Shift + D)









ToDo readme file:

[![Build Status](https://travis-ci.org/{{github-user-name}}/{{github-app-name}}.svg?branch=master)](https://travis-ci.org/{{github-user-name}}/{{github-app-name}}.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/{{github-user-name}}/{{github-app-name}}/badge.svg?branch=master)](https://coveralls.io/github/{{github-user-name}}/{{github-app-name}}?branch=master)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## Setting travis and coveralls badges
1. Sign in to [travis](https://travis-ci.org/) and activate the build for your project.
2. Sign in to [coveralls](https://coveralls.io/) and activate the build for your project.
3. Replace {{github-user-name}}/{{github-app-name}} with your repo details like: "ospatil/generator-node-typescript".


