# Micro-Frontend Example

## Table of Contents

- [Introduction](#introduction)
- [Project Description](#project-description)
- [Installation](#installation)

## Introduction

This Project is a micro-frontend demonstration, created using following two approach-

1. `create-mf-app` cli which gives us flexibility to create a micro-frontend boilerplate with a single command.
2. Through overriding webpack configuration and creating MF setup to expose modules/components from one application to be used in another application.

## Project Description

This Application has first module(Employer) which consist of list of Employees following with an Individual Employee Detail page.

Another module is Employee Application, which only has detail page of Individual Employees.

Both the applications are using shared components/sub-modules demonstrating how Micro-Frontend can be used to create a complex application.

## Installation

1. clone the repo in your local system using `git clone https://github.com/rishavpandey43/micro-frontend-demonstration.git`

2. Checkout to different branches `micro-frontend-create-mf-app-cli` or `micro-frontend-native-webpack` and follow the instructions

3. navigate to both the folders separately in different terminals and run `yarn && yarn start`

4. _Employer Application_ will be served on port `8080` and _Employee Application_ will be served on port `3000`
