$(document).ready(readyNow);

let employeeObjectArray = [];
let monthlySalaryPay = 0;

function readyNow(){
    console.log('Jquery is working!');

    $('#submitBtn').on('click',addEmployee);
}

function addEmployee() {

    //get values from inputs and make an object
    let addedEmployee = {
        firstName : $('#firstNameInput').val(),
        lastName : $('#lastNameInput').val(),
        employeeID : $('#employeeID').val(),
        employeeTitle : $('#employeeTitle').val(),
        annualSalary : $('#annualSalary').val()
    };
    //console.log(addedEmployee);
    //push object to array for later
    employeeObjectArray.push(addedEmployee);
    monthlySalaryPay += parseFloat(addedEmployee.annualSalary / 12);

   

    //console.log(monthlySalaryPay);

    $('#monthlyTotal').text(`Total Monthly:$${monthlySalaryPay}`);



    $('#employeeTable').append(`<tr>
    <td>${addedEmployee.firstName}</td>
    <td>${addedEmployee.lastName}</td>
    <td>${addedEmployee.employeeID}</td>
    <td>${addedEmployee.employeeTitle}</td>
    <td>${addedEmployee.annualSalary}</td>
    </tr>`);


}