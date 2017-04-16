[![Build Status](https://travis-ci.org/{{github-user-name}}/{{github-app-name}}.svg?branch=master)](https://travis-ci.org/{{github-user-name}}/{{github-app-name}}.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/{{github-user-name}}/{{github-app-name}}/badge.svg?branch=master)](https://coveralls.io/github/{{github-user-name}}/{{github-app-name}}?branch=master)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

Script scheduler

A project based on agenda to run periodic jobs. 
Motivation for the project was to create something that would allow programmers full scripting control while the only thing that needs to be added is an extra typescript alghoritm to the jobs folder (not completely true, the file needs to be added to ioc config).

Features:
- Typescript
- Unit testing
- Code coverage
- Dependency injection

I personally use this project because I don't like the scripting abilities of OSIsoft Asset Framework Analytics.
It uses a unknown script language, it has limited program flow control, no ways of adding extensions or writing unit tests.
To be able to mimic some of the functionality I use agenda to be able to run "periodic analyses". 
For data access I added a typescript PIWebAPI client with typings (2016R2+) to the project.

## Setting travis and coveralls badges
1. Sign in to [travis](https://travis-ci.org/) and activate the build for your project.
2. Sign in to [coveralls](https://coveralls.io/) and activate the build for your project.
3. Replace {{github-user-name}}/{{github-app-name}} with your repo details like: "ospatil/generator-node-typescript".


