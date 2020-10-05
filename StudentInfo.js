
// arrow function with no name, it this function does not take any argument 
// getStudentName is the variable that holds the function 
//  vrbname  =   ()   =>    {}
const getStudentName =   ()  =>
{
return 'jim'
}
const getCampusName = () =>
{
return ("UEL Campus ")
}
// exporting a value  in this case date of birth
const dateofBirth= "12/12/1980"
exports.getName=getStudentName
exports.Location=getCampusName
exports.dob=dateofBirth 
// how to export function with parameters
exports.Studentgrade=(marks)=>{
if (marks>50 && marks <70)
return ("B grade")
else 
return ("A grade)")
}
 