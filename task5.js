// Multiple objects with different properties
let staff = {
    name: "James",
    age: 35
  };
  
  let job = {
    organization: "SwissTech",
    department: "ICT"
  };
  
  let contact = {
    email: "james24@gmail.com",
    phone: "08136953850"
  };
  
  // Merge multiple objects
  let staffProfile = Object.assign({}, staff, job, contact);
  
  console.log(staffProfile);
  