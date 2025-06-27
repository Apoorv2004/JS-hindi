// singleton {literals ki tarah decleare krte h toh singleton nii banta h or constructor ki tarah decleare krte h toh singleton banta h}
//object.create


// object literals

const Jsuper = {
    name: "Apoorv",
    "full name": "Apoorv Chauhan",
    age:20,
    location: "India",
    email:"apoorv@12.com",
    isloggedIn: true,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
}

console.log(Jsuper.email);
console.log(Jsuper["email"]); // accessing object properties using bracket notation

console.log(Jsuper["full name"]); // accessing object properties with spaces in the name using bracket notation