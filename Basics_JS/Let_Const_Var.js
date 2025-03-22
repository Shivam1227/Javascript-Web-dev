const name = "Shivam"
// name = 'Vivek'

console.log(name);

// var
{
    var name2 = "Shubham"
    name2 = "Raj"        //update allowed
    var name2 = "Raju"       //redeclaration is also allowed
    console.log(name2);
    
}
console.log(name2);   // can be called outside scope

// let
{
    let name3 = "Susum"
    name3 = "Shruti"       //update allowed
    // let name3 = "Shashwat"  // redeclaration not allowed
    console.log(name3);
    
}
// console.log(name3);      cant be called outside scope


// no let, var, const
name4 = "suraj"
console.log(name4);



// Undefined
let newName;
console.log(newName)     // O/p undefined

// Console Table
console.table([name, name2, name4, newName])   //This print all thing alltogehter in a table
