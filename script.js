// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Global variable made for the employeesArray
let employeesArray = [];



// Collect employee data

const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
 
  // While loop will continue as long as this variable is true
  let continueAdding = true;

  while (continueAdding) {

    // Prompts to collect the employee's information
    const employeeFirstName = prompt("Please enter the employee's first name:");
    const employeeLastName = prompt("Please enter the employee's last name:");
    let employeeSalary = prompt("Please enter the employee's salary:");

    // If an invalid salary amount is entered then the value defaults to 0
    if(isNaN(employeeSalary)) employeeSalary = 0;

    
    // Adds employee's information to an object
    let employeesInfo = {
      firstName: employeeFirstName,
      lastName: employeeLastName,
      salary: parseFloat(employeeSalary)
    }

    // Displays the objects in the console
    console.log(employeesInfo);

    // Adds the objects to the empty array employeeArray
    employeesArray.push(employeesInfo);

    
    // If user chooses to add another employee then the while loop will continue, otherwise it will end
    let confirm = window.confirm("Do you want to add another employee?");

    if (!confirm) {
      return employeesArray;
    }
  }
}

   
// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

 // For loop made to get the sum of the employee salaries
  let salaryTotal = 0;

  for (let i = 0; i < employeesArray.length; i++) {
    salaryTotal += employeesArray[i].salary;
  }

  // Salary average is being calculated and the value is shown on the console
  const salaryAverge = salaryTotal / employeesArray.length;
  console.log(`The employee salary average is:`, `$` + `${salaryAverge.toFixed(2)}`)

}



// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

  // A random array index is determined to find a random employee and then they are displayed on the console
  const randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)];
  console.log(`The selected random employee is: ${randomEmployee.firstName} ${randomEmployee.lastName}`)

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
