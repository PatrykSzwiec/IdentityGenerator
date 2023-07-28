const fs = require('fs');

const genders = ['M','F'];
const maleNames = ['John', 'Michael', 'David', 'James', 'Robert'];
const femaleNames = ['Mary', 'Jennifer', 'Linda', 'Emily', 'Emma'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones'];

function randChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateEmail(firstName, lastName) {
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
  return email;
}

const people = [];

for (let i = 0; i < 20; i++) {
  const gender = randChoice(genders);
  const firstName = gender === 'M' ? randChoice(maleNames) : randChoice(femaleNames);
  const lastName = randChoice(lastNames);
  const age = Math.floor(Math.random() * 79) + 18; // Random age between 18 and 57
  const phoneNumber = `+1${Math.floor(Math.random() * 10000000000).toString().padStart(10, '0')}`;
  const email = generateEmail(firstName, lastName);

  const person = {
    gender,
    firstName,
    lastName,
    age,
    phoneNumber,
    email,
  };

  people.push(person);
}

const jsonData = JSON.stringify(people, null, 2);

fs.writeFile('people.json', jsonData, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('Data saved to people.json successfully!');
  }
});