// After the completion of this Lab you would be able to do following 
//1. Defining an arrow function in a separate module
//2. how to  export a function to other module
//3. How to export a variable to other module
// how to  export a function with argument.clear
//4, how to use a module declared in a separate file
//Also notice that in the require statement, 
//the module name is prefixed with ./, as it’s a local file. 
//Also note that there’s no need to add the file extension.
console.clear()
console.log("programe starting")
const person = require('./Person')  // require is  provided by node to use modules defined in another file


//var fs = require('fs');
const student= require('./StudentInfo')
//const Readfile=require('./FileModule')

console.log("Student Name:" +student.getName()) // because getName is the function  so we should use ()
console.log(`${student.Location()}`) // because getLocation is the function  so we shoudl use ()
console.log(`${student.dob}`)  // because dob is not the the function rather a variable so we do nt needt to use ()
console.log(student.Studentgrade())
console.log("grade is "+student.Studentgrade(55) )
// creating new Person
person1= new person("Jim","USA","myemail@gmail.com")
console.log(person1.getPersonInfo())
console.log("Programe ended")
//console.log("reading filesg")
//Readfile.ReadSynchrous('Person.js','StudentInfo.js')