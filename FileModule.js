var fs = require('fs');

exports.ReadSynchrous = (file1,file2)=>{
console.log("reading file ")  
var data = fs.readFileSync(file1, {encoding:'utf8', flag:'r'}); 
console.log('Data: ', data); 
console.log("reading second file")
data = fs.readFileSync(file2, {encoding:'utf8', flag:'r'}); 
console.log('Data index.js: ', data); 
}

exports.ReadASynchrous = (file1,file2) =>{
// asynhronous
console.log("Reading file asyncronloly")
var data = fs.readFile(file1, {encoding:'utf8', flag:'r'},function(err, data) { //Move on, this will fire when ready.
  if(err) return console.log('Error: ', err);
  console.log('Data: Async: ', data); // Assume var data is defined above.
});
  data = fs.readFileSync(file2, {encoding:'utf8', flag:'r'}); 
  console.log('readFileSync synchronus Data: ', data); 
}
//process.exit(1)