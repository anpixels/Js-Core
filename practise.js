

const a = 12; //This is Number
const b = "Avinash" // This is String
const c = true; // Boolean True or False
const d = ["AK", "NK", "SD", "CA"] // This is Array of data
const e = { // This is objects in array
    iD: 21,
    userName: "ak",
    passWord: "admin123",
}
const f ={ // this is group of objects inside array
  subsType: {
    plan:"Silver Plan",
    paymentType: "Paid Member",
    lastLogin: "Yesterday",
    emailUsed: "ak@anpixels.com",
  },
  paymentRenewal: {
    when: "Thursday",
    howMuch: 40,
    cyclePeriod: "Monthly"
  },
  statusType: "paid",
  billingCycle: "Montly",
}

console.log(f); // Calling whole objects inside array of F
console.log(f.subsType); // Calling only a particular key inside an object of array
console.log(f.subsType.emailUsed); //Calling particular value from key variable
