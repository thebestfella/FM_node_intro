// even app.js and lib.js are both in the same filder
// it is recommendated to use ""./lib"
// if its a module I crated in the same repo.
// have the use "." , if up a directory use "../" 
const {action, value, userIds} = require('./lib')

action();
