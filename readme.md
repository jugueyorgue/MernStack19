To Clone in your own machine -

when we do clone in our own repo 
git init 
git add README.md 
git add . 
git commit -m "first commit" 
git remote add origin https://github.com/MishraAshish/MERNStack19.git <use your own repo for committing data>
git push origin master

Next time to commit and push we follow - 
git add . 
git commit -m "subsequent commits" 
git push origin master

go to any directory where you want to clone and run below

git clone https://github.com/MishraAshish/mernstack19.git

git clone for the first time

subsequent times we need to run - git pull

if you have changes in your machine - so either you resolve that or use git reset --hard and then take git pull

git clean -fd 
git pull


we need to use "npm init" to initialize npm package manager for our repository

console.log("This is the first command in server.js"); 
console.log("as a dev dependency : npm i express -D"); 
console.log("as a production dependency : npm i express"); 
console.log("Node Monitoring Tool : npm i nodemon -D"); 
console.log("To Install All Modules present in package.json : npm i");

"version": "1.0.0", Major:Minor:Patch NPM - npm cli (command line interfaces)

To run the node api MERNStack18 cd - node-server run - npm i then - npm start

MERNStack18 cd - reactapp run - npm i then - npm start

important : npm i -command is used to install all dependencies mentioned in package.json important : npm i -command is used to install module in the project

http://localhost:9000/getproducts - a get api

npm init - to initialize the project 
npm install or npm i - to install module dependency 
npm uninstall or npm u - to uninstall module dependency 
npm install -D or npm i -D  <package name>   -> to install module dependency

//CREATE REACT APP
npm init
npm i -D webpack
copy the below dependencies on package.json and run npm install;
// "devDependencies": {
//     "@babel/core": "^7.23.6",
//     "@babel/preset-env": "^7.23.6", //converting es6 to core js 
//     "@babel/preset-react": "^7.23.3", //converting react syntax to core js 
//     "babel-loader": "^9.1.3", //helper library to convert the css into js  bundle
//     "css-loader": "^6.8.1",
//     "html-webpack-plugin": "^5.5.4", //helps to launch our html page while serving the request
//     "style-loader": "^3.3.3",
//     "webpack": "^5.89.0", //bundling, task runner, loader, configuration runner, bower runner
//     "webpack-cli": "^5.1.4", // to run web pack command like - serve, build etc
//     "webpack-dev-server": "^4.15.1" // front end application host
//   }

//or
//npm i -D @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin style-loader webpack-cli webpack-dev-server







//process to copy and run react app
npm install
npm run build
npm start