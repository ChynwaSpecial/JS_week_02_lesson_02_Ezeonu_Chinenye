let myProfile = {
    name: 'Ezeonu Chinenye',
    age: 30,
    occupation: 'Developer'
  };
  
  for (let key in myProfile) {
    console.log(`${key}: ${myProfile[key]}`);
  }
  