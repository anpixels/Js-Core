

const a = 12; //This is Number
const b = "20 Avinash" // This is String
const c = true; // Boolean True or False
const d = ["AK", "NK", "SD", "CA"] // This is Array of strings - one of one string
const e = { // This is objects of variable e
    iD: 21,
    userName: "ak",
    passWord: "admin123",
    lastLogin: null, // Null is the way to tell there is no value.
}
const f = [ // this is group is array of objects - one of one objects
  {
    plan:"Silver Plan",
    paymentType: "Paid Member",
    lastLogin: "Yesterday",
    emailUsed: "ak@anpixels.com",
  },
  {
    when: "Thursday",
    howMuch: 40,
    cyclePeriod: "Monthly",
    emailUsed: "nims@anpixels.com",
  },
  {
    statusType: "paid",
    emailUsed: 12,
},
  {
    billingCycle: "Montly",
    emailUsed: "aa@anpixels.com",
  },
  {
    emailUsed: "bb@anpixels.com",
  }
]

// console.log(f); // Calling whole objects inside array of F
// console.log(f.subsType); // Calling only a particular key inside an object of array
// console.log(f.subsType.emailUsed); //Calling particular value from key variable

// Only Show Email values from all Key types of object F
// debugger
// {} => object
// [] => Array
// "" => String
// When filter: show the arrays that has particular varible - Filter will display whole array will not shorten or change the state of array
// When map: Only display those variable from the array- will change the state of value.

// Filter and Map
// let animal_names = f.filter((animal, index, f) => {
//     return animal.emailUsed
// }).map((animal) => {
//     return animal.emailUsed
// })


let animal_names = f.map((animal, index, f) => {
    return animal.emailUsed
}).filter((pure) => {
    // console.log(str.includes('To be'));
    // if (f.emailUsed === str.includes)
      if(pure === 12){
        return false
      }
    return pure.includes("@")
})
console.log(animal_names);
