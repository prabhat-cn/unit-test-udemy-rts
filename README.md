# Getting Started with React Typescript using Jest & Enzyme

## @types/ dependencies

npm i @types/enzyme @types/enzyme-adapter-react-16

npm i @types/moxios

## dev dependencies

https://jestjs.io/docs/webpack

npm i --save-dev jest@26.6.0 babel-jest@26.6.0 identity-obj-proxy

# next enzyme package

npm i --save-dev enzyme enzyme-adapter-react-16

# Babel remove properties data-test

npm i --save-dev babel-plugin-react-remove-properties

# for React 17

npm i --save-dev enzyme @wojtekmaj/enzyme-adapter-react-17

# test prop types

Prop type does not required in typescript

# to test axios use moxios

npm i --save-dev moxios

## Removing data-test attributes before build

-> npm i --save-dev babel-plugin-react-remove-properties
-> npm run eject
-> update babel config
-> Create Production Build

## to run react build file static server

# (for windows)

after-> npm run build
install-> npm install -g serve
then start static build server by -> serve -s build

# (for mac and linux)

-> sudo npm run build
-> sudo npm install -g serve

# then start static build server by

-> sudo serve -s build
