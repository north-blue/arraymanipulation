let data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
  { name: "seito", age: 20, profession: "admin" },
  { name: "nami", age: 20, profession: "navigator" },
  { name: "robin", age: 30, profession: "archaelogist" },
  { name: "zoro", age: 21, profession: "swordsman" },
  { name: "sanji", age: 21, profession: "cook" },
  { name: "luffy", age: 19, profession: "captain" },
];

// 1. Print Developers
function printDeveloper() {

     for (let i = 0; i < data.length; i++) {
       if (data[i].profession === "developer") {
         console.log(data[i].name);
       }
     }

}

// 2. Add Data
function addData() {
    const name = prompt("Enter name:");
  const age = parseInt(prompt("Enter age:"));
  const profession = prompt("Enter profession:");

  const newData = { name, age, profession };
  data.push(newData);

  console.log("Data added successfully!");
}

// 3. Remove Admins
function removeAdmin() {
     const admins = data.filter((person) => person.profession === "admin");
     data = data.filter((person) => person.profession !== "admin");

     console.log("Admins removed:");
     console.log(admins);
}

// 4. Concatenate Array
function concatenateArray() {
     const array1 = ["shanks", 39, "yonko"];
     const array2 = ["luffytaro", 19, "yonko"];

     // Concatenate the arrays
     const concatenatedArray = array1.concat(array2);

     // Log the concatenated array
     console.log("Concatenated Array:", concatenatedArray);
}

// 5. Average Age
function averageAge() {
  // Calculating the total age
  const totalAge = data.reduce((sum, person) => sum + person.age, 0);

  // Calculate the average age
  const avgAge = totalAge / data.length;

  // Log the average age
  console.log("Average Age:", avgAge);
}

// 6. Age Check
function checkAgeAbove25() {
  // Use the some() method to check if at least one person is older than 25
  const isAbove25 = data.some((person) => person.age > 25);

  if (isAbove25) {
    console.log("At least one person is older than 25");
  } else {
    console.log("No one is older than 25.");
  }
}

// 7. Unique Professions
function uniqueProfessions() {
  // Create a Set to store unique professions
  const uniqueProfessionsSet = new Set();

  // Iterate through the array and add professions to the Set
  data.forEach((person) => {
    uniqueProfessionsSet.add(person.profession);
  });

  // Convert the Set to an array and log the unique professions
  const uniqueProfessionsArray = Array.from(uniqueProfessionsSet);
  console.log("Unique Professions:", uniqueProfessionsArray);
}

// 8. Sort by Age
function sortByAge() {
  // Use the sort method to sort the array by age in ascending order
  data.sort((a, b) => a.age - b.age);
  console.log("Sorted by Age (Ascending):", data);

}

// 9. Update Profession
function updateJohnsProfession() {
  // Find the index of John's object in the array
  const johnIndex = data.findIndex((person) => person.name === "john");

  // Update John's profession to 'manager' if found
  if (johnIndex !== -1) {
    data[johnIndex].profession = "manager";
    console.log("John's profession updated to 'manager'");
  } else {
    console.log("John not found in the array");
  }
}

// 10. Profession Count
function getTotalProfessions() {
  // Initialize counters for developers and admins
  let developerCount = 0;
  let adminCount = 0;

  // Iterate through the array and count the professions
  data.forEach((person) => {
    if (person.profession === "developer") {
      developerCount++;
    } else if (person.profession === "admin") {
      adminCount++;
    }
  });

  // Print the total number of developers and admins
  console.log("Total Developers:", developerCount);
  console.log("Total Admins:", adminCount);
}